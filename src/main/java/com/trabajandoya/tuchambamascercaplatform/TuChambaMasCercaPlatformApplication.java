package com.trabajandoya.tuchambamascercaplatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableJpaAuditing
@SpringBootApplication
public class TuChambaMasCercaPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(TuChambaMasCercaPlatformApplication.class, args);
    }

}
