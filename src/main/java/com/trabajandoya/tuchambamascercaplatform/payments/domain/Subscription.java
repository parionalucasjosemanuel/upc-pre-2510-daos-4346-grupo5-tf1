package com.trabajandoya.tuchambamascercaplatform.payments.domain;

import java.time.LocalDate;

public class Subscription {
    private Long id;
    private Long userId;
    private String type; // "Freemium" o "Premium"
    private LocalDate startDate;
    private LocalDate endDate;
    private String status; // "active", "expired", "cancelled"

    public Subscription() {}

    public Subscription(Long id, Long userId, String type, LocalDate startDate, LocalDate endDate, String status) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }

    // Getters y setters
}
