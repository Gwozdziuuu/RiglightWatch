#!/bin/bash

set -e
set -u

function create_main_database() {
    echo "  Creating user and main database 'riglightwatch-db'"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER "riglightwatch-db" WITH PASSWORD 'postgres';
    CREATE DATABASE "riglightwatch-db";
    revoke all on database "riglightwatch-db" from PUBLIC;
EOSQL
}

function create_schema() {
    local schema_to_create=$1

    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "riglightwatch-db" <<-EOSQL
        create user $schema_to_create with
          NOSUPERUSER
          NOCREATEDB
          NOCREATEROLE
          INHERIT
          LOGIN
          NOREPLICATION
          NOBYPASSRLS
          CONNECTION LIMIT 10
          password 'postgres';

        create schema $schema_to_create authorization $schema;

        create role "${schema_to_create}_rwd";
        grant connect on database "riglightwatch-db" to "${schema_to_create}_rwd";
        grant usage, create on schema $schema_to_create to "${schema_to_create}_rwd";
        grant select, insert, update, delete on all tables in schema $schema_to_create to "${schema_to_create}_rwd";
        grant usage, select on all sequences in schema $schema_to_create to "${schema_to_create}_rwd";

        grant "${schema_to_create}_rwd" to $schema;
EOSQL
}

function create_user_and_database() {
	local database=$1
	echo "  Creating user and database '$database'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
	    CREATE USER $database WITH PASSWORD 'postgres';
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $database;
EOSQL
}

if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
	echo "  Multiple database creation requested: $POSTGRES_MULTIPLE_DATABASES"
	create_main_database # riglightwatch-db
	for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
		create_user_and_database $db
	done
	echo "  Multiple databases created"
fi

if [ -n "$DB_SCHEMAS_LIST" ]; then
  echo "  Multiple schemas creation requested at riglightwatch-db"

	for schema in $(echo $DB_SCHEMAS_LIST | tr ',' ' '); do
	  echo "$schema"
		create_schema $schema
	done
	echo "  Multiple schemas created"
fi
