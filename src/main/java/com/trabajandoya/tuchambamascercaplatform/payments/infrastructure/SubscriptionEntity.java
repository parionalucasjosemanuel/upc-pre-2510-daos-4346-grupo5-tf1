package com.trabajandoya.tuchambamascercaplatform.payments.infrastructure;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.Data;

@Data
@Entity
@Table(name = "subscriptions")
public class SubscriptionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String type;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;

    // Getters y setters
}
