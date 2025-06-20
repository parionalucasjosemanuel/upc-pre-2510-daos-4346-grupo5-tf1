package com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MapLocationRepository extends JpaRepository<MapLocationEntity, Long> {
}