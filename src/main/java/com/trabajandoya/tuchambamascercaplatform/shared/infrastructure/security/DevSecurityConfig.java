package com.trabajandoya.tuchambamascercaplatform.shared.infrastructure.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class DevSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Desactiva protección CSRF
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/swagger-ui/**",
                    "/swagger-ui.html",
                    "/v3/api-docs/**",
                    "/h2-console/**",
                    "/api/**"
                ).permitAll() // Permitir acceso sin login
                .anyRequest().permitAll()
            )
            .headers(headers -> headers.frameOptions().disable()); // Necesario para H2

        return http.build();
    }
}
