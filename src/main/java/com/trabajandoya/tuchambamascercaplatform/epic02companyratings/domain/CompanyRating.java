package com.trabajandoya.tuchambamascercaplatform.epic02companyratings.domain;

import java.time.LocalDate;

public class CompanyRating {
    private Long id;
    private String company;
    private int stars;
    private String comment;
    private String author;
    private LocalDate date;

    public CompanyRating() {}

    public CompanyRating(Long id, String company, int stars, String comment, String author, LocalDate date) {
        this.id = id;
        this.company = company;
        this.stars = stars;
        this.comment = comment;
        this.author = author;
        this.date = date;
    }

    // Getters y setters
}
