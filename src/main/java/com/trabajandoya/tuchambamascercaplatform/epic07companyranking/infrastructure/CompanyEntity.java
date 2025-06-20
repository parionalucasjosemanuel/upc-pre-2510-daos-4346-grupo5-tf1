package com.trabajandoya.tuchambamascercaplatform.epic07companyranking.infrastructure;

import jakarta.persistence.*;

@Entity
@Table(name = "companies")
public class CompanyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private int rating;

    // getters y setters
}