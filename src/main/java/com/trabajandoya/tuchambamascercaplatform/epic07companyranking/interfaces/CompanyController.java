package com.trabajandoya.tuchambamascercaplatform.epic07companyranking.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic07companyranking.application.CompanyService;
import com.trabajandoya.tuchambamascercaplatform.epic07companyranking.domain.Company;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "*")
public class CompanyController {
    private final CompanyService service;

    public CompanyController(CompanyService service) {
        this.service = service;
    }

    @GetMapping
    public List<Company> getAll() {
        return service.findAll();
    }
}