package com.trabajandoya.tuchambamascercaplatform.epic07companyranking.domain;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    private Long id;
    private String name;
    private String description;
    private int rating;

    // constructor, getters y setters
}