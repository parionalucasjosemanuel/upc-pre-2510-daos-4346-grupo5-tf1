// src/main/java/com/trabajandoya/tuchambamascercaplatform/epic01-recommendations/domain/Recommendation.java
package com.trabajandoya.tuchambamascercaplatform.epic01recommendations.domain;

import java.time.LocalDate;

public class Recommendation {
    private Long id;
    private String title;
    private String description;
    private String author;
    private LocalDate date;

    public Recommendation() {}

    public Recommendation(Long id, String title, String description, String author, LocalDate date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.date = date;
    }

    // Getters y setters
}
