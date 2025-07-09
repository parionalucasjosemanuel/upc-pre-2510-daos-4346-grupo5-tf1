package com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.application;

import com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.domain.MapLocation;
import com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.infrastructure.MapLocationEntity;
import com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.infrastructure.MapLocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MapLocationService {
    private final MapLocationRepository repository;

    public MapLocationService(MapLocationRepository repository) {
        this.repository = repository;
    }

    public List<MapLocation> getAll() {
        return repository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    private MapLocation toDomain(MapLocationEntity e) {
        return new MapLocation(e.getId(), e.getName(), e.getLatitude(), e.getLongitude());
    }
}