package com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.infrastructure;

import jakarta.persistence.*;

@Entity
@Table(name = "map_locations")
public class MapLocationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double latitude;
    private double longitude;

    // getters y setters
}