// src/main/java/com/trabajandoya/tuchambamascercaplatform/epic01-recommendations/infrastructure/RecommendationEntity.java
package com.trabajandoya.tuchambamascercaplatform.epic01recommendations.infrastructure;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "recommendations")
public class RecommendationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String author;
    private LocalDate date;

    // Getters y setters
}
