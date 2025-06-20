package com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.application.JobService;
import com.trabajandoya.tuchambamascercaplatform.epic03jobsearch.domain.Job;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {

    private final JobService service;

    public JobController(JobService service) {
        this.service = service;
    }

    @GetMapping
    public List<Job> getAll() {
        return service.getAll();
    }
}
