package com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.domain;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MapLocation {
    private Long id;
    private String name;
    private double latitude;
    private double longitude;

    // constructor, getters, setters
}