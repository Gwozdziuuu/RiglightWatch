package com.riglightwatch.database.parameters;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.Objects;

@ConfigurationProperties(prefix = "spring.datasource.create")
public class LiquibaseDatasourceParams {

    private String jdbcUrl;
    private String username;
    private String password;

    public String getJdbcUrl() {
        return jdbcUrl;
    }

    public void setJdbcUrl(String jdbcUrl) {
        this.jdbcUrl = jdbcUrl;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LiquibaseDatasourceParams that = (LiquibaseDatasourceParams) o;
        return Objects.equals(jdbcUrl, that.jdbcUrl) && Objects.equals(username, that.username) && Objects.equals(password, that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(jdbcUrl, username, password);
    }

    @Override
    public String toString() {
        var firstPasswordSymbol = password.isEmpty() ? "" : password.substring(0, 1);
        var lastPasswordSymbol = password.isEmpty() ? "" : password.substring(password.length() - 1);
        var hashedPassword = "%s***%s".formatted(firstPasswordSymbol, lastPasswordSymbol);
        return """
               {
                   "jdbcUrl"="%s",
                   "username"="%s",
                   "password"="%s"
               }
               """.formatted(jdbcUrl, username, hashedPassword);
    }

}
