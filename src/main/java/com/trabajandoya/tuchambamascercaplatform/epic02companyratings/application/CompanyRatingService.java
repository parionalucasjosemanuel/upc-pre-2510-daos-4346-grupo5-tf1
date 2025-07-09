package com.trabajandoya.tuchambamascercaplatform.epic02companyratings.application;

import com.trabajandoya.tuchambamascercaplatform.epic02companyratings.domain.CompanyRating;
import com.trabajandoya.tuchambamascercaplatform.epic02companyratings.infrastructure.CompanyRatingEntity;
import com.trabajandoya.tuchambamascercaplatform.epic02companyratings.infrastructure.CompanyRatingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyRatingService {

    private final CompanyRatingRepository repository;

    public CompanyRatingService(CompanyRatingRepository repository) {
        this.repository = repository;
    }

    public List<CompanyRating> findAll() {
        return repository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    public CompanyRating save(CompanyRating rating) {
        return toDomain(repository.save(toEntity(rating)));
    }

    // Mappers
    private CompanyRating toDomain(CompanyRatingEntity e) {
        return new CompanyRating(e.getId(), e.getCompany(), e.getStars(), e.getComment(), e.getAuthor(), e.getDate());
    }

    private CompanyRatingEntity toEntity(CompanyRating r) {
        CompanyRatingEntity e = new CompanyRatingEntity();
        e.setId(r.getId());
        e.setCompany(r.getCompany());
        e.setStars(r.getStars());
        e.setComment(r.getComment());
        e.setAuthor(r.getAuthor());
        e.setDate(r.getDate());
        return e;
    }
}
