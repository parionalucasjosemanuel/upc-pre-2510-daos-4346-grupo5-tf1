package com.trabajandoya.tuchambamascercaplatform.payments.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<SubscriptionEntity, Long> {
}
