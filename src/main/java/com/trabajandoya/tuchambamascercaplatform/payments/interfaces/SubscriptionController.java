package com.trabajandoya.tuchambamascercaplatform.payments.interfaces;

import com.trabajandoya.tuchambamascercaplatform.payments.application.SubscriptionService;
import com.trabajandoya.tuchambamascercaplatform.payments.domain.Subscription;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
@CrossOrigin(origins = "*")
public class SubscriptionController {

    private final SubscriptionService service;

    public SubscriptionController(SubscriptionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Subscription> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Subscription create(@RequestBody Subscription s) {
        return service.create(s);
    }

    @PatchMapping("/{id}/cancel")
    public Subscription cancel(@PathVariable Long id) {
        return service.cancel(id);
    }
}
