package com.trabajandoya.tuchambamascercaplatform.payments.application;

import com.trabajandoya.tuchambamascercaplatform.payments.domain.Subscription;
import com.trabajandoya.tuchambamascercaplatform.payments.infrastructure.SubscriptionEntity;
import com.trabajandoya.tuchambamascercaplatform.payments.infrastructure.SubscriptionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SubscriptionService {

    private final SubscriptionRepository repository;

    public SubscriptionService(SubscriptionRepository repository) {
        this.repository = repository;
    }

    public List<Subscription> findAll() {
        return repository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    public Optional<Subscription> getById(Long id) {
        return repository.findById(id).map(this::toDomain);
    }

    public Subscription create(Subscription s) {
        return toDomain(repository.save(toEntity(s)));
    }

    public Subscription cancel(Long id) {
        SubscriptionEntity entity = repository.findById(id).orElseThrow();
        entity.setStatus("cancelled");
        return toDomain(repository.save(entity));
    }

    private Subscription toDomain(SubscriptionEntity e) {
        return new Subscription(e.getId(), e.getUserId(), e.getType(), e.getStartDate(), e.getEndDate(), e.getStatus());
    }

    private SubscriptionEntity toEntity(Subscription s) {
        SubscriptionEntity e = new SubscriptionEntity();
        e.setId(s.getId());
        e.setUserId(s.getUserId());
        e.setType(s.getType());
        e.setStartDate(s.getStartDate());
        e.setEndDate(s.getEndDate());
        e.setStatus(s.getStatus());
        return e;
    }
}
