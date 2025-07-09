package com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.infrastructure;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;
import lombok.Data;

@Data
@Entity
@Table(name = "jobs")
public class JobEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    private String location;

    @ElementCollection
    private List<String> technologies;

    private double rating;
    private LocalDate createdAt;

    // getters y setters
}
