package com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.application.MapLocationService;
import com.trabajandoya.tuchambamascercaplatform.epic08mapnotifications.domain.MapLocation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maplocations")
@CrossOrigin(origins = "*")
public class MapLocationController {

    private final MapLocationService service;

    public MapLocationController(MapLocationService service) {
        this.service = service;
    }

    @GetMapping
    public List<MapLocation> getAll() {
        return service.getAll();
    }
}