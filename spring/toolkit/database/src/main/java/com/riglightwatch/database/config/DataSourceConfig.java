package com.riglightwatch.database.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Primary
    @Bean(name = "writeDataSource")
    public DataSource writeDataSource(
            @Value("${spring.datasource.write.jdbc-url}") String dbUrl,
            @Value("${spring.datasource.write.username}") String dbUsername,
            @Value("${spring.datasource.write.password}") String dbPassword,
            @Value("${spring.datasource.write.max-connections}") int writeMaxConnections
    ) {
        return getDataSource("WriteDataBaseConnectionPool", dbUrl, dbUsername, dbPassword, writeMaxConnections);
    }

    @Bean(name = "readDataSource")
    @Qualifier("readDataSource")
    public DataSource readDataSource(
            @Value("${spring.datasource.read.jdbc-url}") String dbUrl,
            @Value("${spring.datasource.read.username}") String dbUsername,
            @Value("${spring.datasource.read.password}") String dbPassword,
            @Value("${spring.datasource.read.max-connections}") int readMaxConnections
    ) {
        return getDataSource("ReadDataBaseConnectionPool", dbUrl, dbUsername, dbPassword, readMaxConnections);
    }

    private DataSource getDataSource(String poolName, String dbUrl, String dbUsername, String dbPassword, int maxConnections) {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setPoolName(poolName);
        hikariConfig.setDriverClassName("org.postgresql.Driver");
        hikariConfig.setJdbcUrl(dbUrl);
        hikariConfig.setUsername(dbUsername);
        hikariConfig.setPassword(dbPassword);
        hikariConfig.setMinimumIdle(1);
        hikariConfig.setMaximumPoolSize(maxConnections);
        hikariConfig.setKeepaliveTime(5 * 60 * 1000);
        hikariConfig.setLeakDetectionThreshold(2 * 1000);
        return new HikariDataSource(hikariConfig);
    }
}