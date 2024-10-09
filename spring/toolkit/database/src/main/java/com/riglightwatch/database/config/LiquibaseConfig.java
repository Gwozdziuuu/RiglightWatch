package com.riglightwatch.database.config;

import com.riglightwatch.database.parameters.LiquibaseDatasourceParams;
import liquibase.integration.spring.SpringLiquibase;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
@EnableConfigurationProperties(LiquibaseDatasourceParams.class)
public class LiquibaseConfig {

    private static final Log log = LogFactory.getLog(LiquibaseConfig.class);

    private final LiquibaseDatasourceParams params;

    public LiquibaseConfig(LiquibaseDatasourceParams liquibaseDatasourceParams) {
        this.params = liquibaseDatasourceParams;
    }

    @Bean
    public SpringLiquibase liquibase() {
        SpringLiquibase liquibase = new SpringLiquibase();
        log.info("Liquibase config: %s".formatted(params.toString()));
        liquibase.setDataSource(dataSource(params.getJdbcUrl(), params.getUsername(), params.getPassword()));
        liquibase.setChangeLog("classpath:db/changelog/db.changelog-master.xml");
        return liquibase;
    }

    private DataSource dataSource(String dbUrl, String dbUsername, String dbPassword) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl(dbUrl);
        dataSource.setUsername(dbUsername);
        dataSource.setPassword(dbPassword);
        return dataSource;
    }

}