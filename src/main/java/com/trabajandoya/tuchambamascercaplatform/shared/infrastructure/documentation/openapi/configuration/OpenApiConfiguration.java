package com.trabajandoya.tuchambamascercaplatform.shared.infrastructure.documentation.openapi.configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.Data;

@Data
@Configuration
public class OpenApiConfiguration {
    @Bean
    public OpenAPI fromZeroApiOpenApi() {

        // General configuration
        var openApi = new OpenAPI();
        openApi.info(new Info()
                        .title("Tu Chamba Mas Cerca Application API")
                        .description("Tu Chamba Mas Cerca Application API documentation.")
                        .version("v1.0.0")
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Tu Chamba Mas Cerca github page")
                        .url("https://github.com/parionalucasjosemanuel/upc-pre-2510-daos-4346-grupo5-tf1/tree/Backend"));

        // Add security scheme

        final String securitySchemeName = "bearerAuth";

        openApi.addSecurityItem(new SecurityRequirement()
                        .addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName,
                                new SecurityScheme()
                                        .name(securitySchemeName)
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")));

        // Return OpenAPI configuration object with all the settings

        return openApi;
    }
}