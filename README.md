# TrabajandoYa - Job Recommendation Platform

> A web application developed to help tech professionals
> share and discover job experiences, company ratings, and recommended positions. This platform supports accessibility (a11y), internationalization (i18n), and subscription-based feature access (Freemium / Premium).

---

## 📘 Project Overview

TrabajandoYa allows users to:

- Register and edit job recommendations (EPIC01)
- Rate companies and leave comments (EPIC02)
- Search and filter recommended jobs (EPIC03)
- Contact recommendation authors and manage messages (EPIC04)
- Access a chatbot for emotional support (EPIC05)
- Manage their user profile securely (EPIC06)
- View company rankings (EPIC07)
- See nearby companies on a map and receive notifications (EPIC08)
- Switch languages and navigate via screen readers (EPIC09)
- Securely manage personal data and authentication (EPIC10)

Users get different features based on their subscription:
- **Freemium** users: Basic access to recommendations and public company data.
- **Premium** users: Access to filters, rankings, messaging, emotional chatbot, and maps.

---

## 🏗️ Architecture

- **Frontend Framework:** Angular 16+
- **Design Language:** Material Design (Angular Material)
- **i18n:** `ngx-translate` supporting `en_US` and `es_419`
- **Accessibility:** Fully ARIA-compliant interface with screen reader and keyboard support
- **Backend Simulation:** `json-server` using `db.json`
- **Directory Structure:** Domain-driven folders by EPIC (epic01 to epic10), plus `public`, `payments`, `shared`, `environment`, and `server`

---

## 👨‍💻 Authors

| Name | Student Code |
|--|--|
| José Manuel Pariona Lucas | U202119257 |
|   Arias Segil, Marllely Anahi | U202223984 |
| Paucar Zenteno, Jesús Fernando | U202316687 |
|  Valdivia Quispe, Stephano Renan | U202311294 |
| Zevallos Linares, Alessandro Netto | U202216035 |


## 🚀 Technologies Used

- Angular 16+
- Angular Material
- ngx-translate (i18n)
- ARIA attributes (a11y)
- TypeScript, HTML5, CSS3, SCSS
- JSON Server (for mocking REST API)
- VS Code / IntelliJ IDEA
- GitHub + Trello (project management)

---

## ⚙️ Installation & Run

### Clone the repository
https://github.com/parionalucasjosemanuel/upc-pre-2510-daos-4346-grupo5-tp1.git
cd Frontend-master
- Intall dependencies
npm install
Run frontend (Angular app)
ng serve
Run (Json Server)
 npx json-server --watch src/server/db.json --port 3000
