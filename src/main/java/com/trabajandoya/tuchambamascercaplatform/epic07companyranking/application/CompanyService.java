package com.trabajandoya.tuchambamascercaplatform.epic07companyranking.application;

import com.trabajandoya.tuchambamascercaplatform.epic07companyranking.domain.Company;
import com.trabajandoya.tuchambamascercaplatform.epic07companyranking.infrastructure.CompanyEntity;
import com.trabajandoya.tuchambamascercaplatform.epic07companyranking.infrastructure.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {
    private final CompanyRepository repository;

    public CompanyService(CompanyRepository repository) {
        this.repository = repository;
    }

    public List<Company> findAll() {
        return repository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    private Company toDomain(CompanyEntity e) {
        return new Company(e.getId(), e.getName(), e.getDescription(), e.getRating());
    }
}