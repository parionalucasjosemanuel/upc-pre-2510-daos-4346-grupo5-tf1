package com.trabajandoya.tuchambamascercaplatform.epic06userprofile.domain;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phone;

    // constructor, getters y setters
}