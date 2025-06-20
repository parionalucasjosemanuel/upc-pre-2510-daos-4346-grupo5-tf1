// src/main/java/com/trabajandoya/tuchambamascercaplatform/epic01-recommendations/infrastructure/RecommendationRepository.java
package com.trabajandoya.tuchambamascercaplatform.epic01recommendations.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendationRepository extends JpaRepository<RecommendationEntity, Long> {
}
