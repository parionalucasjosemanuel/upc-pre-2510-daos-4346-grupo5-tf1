# TuChambaMásCerca - Backend

This is the backend implementation of the **Tu Chamba Más Cerca** platform. The application is built using **Java** and the **Spring Boot** framework following a Domain-Driven Design (DDD) architecture, organized by modules (epics) such as recommendations, company ratings, subscriptions, user profiles, and more.

The backend exposes a set of **RESTful APIs**, documented using **Swagger UI**, and integrates with a **SQL** relational database.

---

## 📌 Features

- Modular architecture with epics (DDD-oriented)
- Full CRUD operations for each domain (e.g., Recommendations, Company Ratings, Subscriptions)
- Integration with Angular frontend via REST API
- Swagger UI documentation for API testing
- SQL H2  relational database integration
- Ready for deployment on cloud or on-premise environments

---

## ⚙️ Technologies

- **Java 21+**
- **Spring Boot Framework**
- **Spring Web**
- **Spring Data JPA**
- **Spring Security** (for future authentication)
- **SQL H2**
- **Swagger/OpenAPI 3 (via SpringDoc)**

---


## Authors

| Name | Student Code |
|--|--|
| José Manuel Pariona Lucas | U202119257 |
|   Arias Segil, Marllely Anahi | U202223984 |
| Paucar Zenteno, Jesús Fernando | U202316687 |
|  Valdivia Quispe, Stephano Renan | U202311294 |
| Zevallos Linares, Alessandro Netto | U202216035 |

./mvnw spring-boot:run
http://localhost:8080/swagger-ui.html
http://localhost:8080/h2-console
Conecta con:

JDBC URL: jdbc:h2:mem:tuchamba_db

User: sa

Password: (deja vacío)