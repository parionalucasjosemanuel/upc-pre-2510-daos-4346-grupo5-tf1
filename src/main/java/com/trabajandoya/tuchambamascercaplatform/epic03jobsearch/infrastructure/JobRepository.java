package com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobEntity, Long> {
}
