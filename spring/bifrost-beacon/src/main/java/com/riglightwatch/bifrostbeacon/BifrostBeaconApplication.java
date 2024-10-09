package com.riglightwatch.bifrostbeacon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = "com.riglightwatch")
@SpringBootApplication
public class BifrostBeaconApplication {

    public static void main(String[] args) {
        SpringApplication.run(BifrostBeaconApplication.class, args);
    }

}
