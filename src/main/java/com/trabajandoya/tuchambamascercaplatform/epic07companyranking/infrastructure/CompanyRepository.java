package com.trabajandoya.tuchambamascercaplatform.epic07companyranking.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<CompanyEntity, Long> {
}