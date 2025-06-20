// src/main/java/com/trabajandoya/tuchambamascercaplatform/epic01-recommendations/application/RecommendationService.java
package com.trabajandoya.tuchambamascercaplatform.epic01recommendations.application;

import com.trabajandoya.tuchambamascercaplatform.epic01recommendations.domain.Recommendation;
import com.trabajandoya.tuchambamascercaplatform.epic01recommendations.infrastructure.RecommendationEntity;
import com.trabajandoya.tuchambamascercaplatform.epic01recommendations.infrastructure.RecommendationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RecommendationService {

    private final RecommendationRepository repository;

    public RecommendationService(RecommendationRepository repository) {
        this.repository = repository;
    }

    public List<Recommendation> findAll() {
        return repository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    public Optional<Recommendation> findById(Long id) {
        return repository.findById(id).map(this::toDomain);
    }

    public Recommendation save(Recommendation recommendation) {
        RecommendationEntity entity = toEntity(recommendation);
        return toDomain(repository.save(entity));
    }

    public Recommendation update(Long id, Recommendation recommendation) {
        RecommendationEntity entity = toEntity(recommendation);
        entity.setId(id);
        return toDomain(repository.save(entity));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // Mapping methods
    private Recommendation toDomain(RecommendationEntity e) {
        return new Recommendation(e.getId(), e.getTitle(), e.getDescription(), e.getAuthor(), e.getDate());
    }

    private RecommendationEntity toEntity(Recommendation r) {
        RecommendationEntity e = new RecommendationEntity();
        e.setId(r.getId());
        e.setTitle(r.getTitle());
        e.setDescription(r.getDescription());
        e.setAuthor(r.getAuthor());
        e.setDate(r.getDate());
        return e;
    }
}
