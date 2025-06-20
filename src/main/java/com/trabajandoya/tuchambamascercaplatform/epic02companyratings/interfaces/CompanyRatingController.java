package com.trabajandoya.tuchambamascercaplatform.epic02companyratings.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic02companyratings.application.CompanyRatingService;
import com.trabajandoya.tuchambamascercaplatform.epic02companyratings.domain.CompanyRating;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companyRatings")
@CrossOrigin(origins = "*")
public class CompanyRatingController {

    private final CompanyRatingService service;

    public CompanyRatingController(CompanyRatingService service) {
        this.service = service;
    }

    @GetMapping
    public List<CompanyRating> getAll() {
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity<CompanyRating> create(@RequestBody CompanyRating rating) {
        CompanyRating saved = service.save(rating);
        return ResponseEntity.ok(saved);
    }
}
