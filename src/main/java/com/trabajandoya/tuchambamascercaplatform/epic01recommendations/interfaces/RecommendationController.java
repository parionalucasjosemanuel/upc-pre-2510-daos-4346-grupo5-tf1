// src/main/java/com/trabajandoya/tuchambamascercaplatform/epic01-recommendations/interfaces/RecommendationController.java
package com.trabajandoya.tuchambamascercaplatform.epic01recommendations.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic01recommendations.application.RecommendationService;
import com.trabajandoya.tuchambamascercaplatform.epic01recommendations.domain.Recommendation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin(origins = "*")
public class RecommendationController {

    private final RecommendationService service;

    public RecommendationController(RecommendationService service) {
        this.service = service;
    }

    @GetMapping
    public List<Recommendation> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recommendation> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Recommendation create(@RequestBody Recommendation recommendation) {
        return service.save(recommendation);
    }

    @PutMapping("/{id}")
    public Recommendation update(@PathVariable Long id, @RequestBody Recommendation recommendation) {
        return service.update(id, recommendation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
