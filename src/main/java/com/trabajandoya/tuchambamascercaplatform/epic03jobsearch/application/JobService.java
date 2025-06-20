package com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.application;

import com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.domain.Job;
import com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.infrastructure.JobEntity;
import com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.infrastructure.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobService {
    private final JobRepository repo;

    public JobService(JobRepository repo) {
        this.repo = repo;
    }

    public List<Job> getAll() {
        return repo.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    private Job toDomain(JobEntity e) {
        return new Job(e.getId(), e.getTitle(), e.getCompany(), e.getLocation(), e.getTechnologies(), e.getRating(), e.getCreatedAt());
    }
}
