package com.trabajandoya.tuchambamascercaplatform.epic06userprofile.infrastructure;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String name;
    private String phone;

    // getters y setters
}