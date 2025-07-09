package com.trabajandoya.tuchambamascercaplatform.epic02companyratings.infrastructure;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.Data;

@Data
@Entity
@Table(name = "company_ratings")
public class CompanyRatingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private int stars;
    private String comment;
    private String author;
    private LocalDate date;

    // Getters y setters
}
