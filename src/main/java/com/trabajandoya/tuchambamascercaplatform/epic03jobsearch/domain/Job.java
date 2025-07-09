package com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.domain;

import java.time.LocalDate;
import java.util.List;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Job {
    private Long id;
    private String title;
    private String company;
    private String location;
    private List<String> technologies;
    private double rating;
    private LocalDate createdAt;

    // constructor, getters y setters
}
