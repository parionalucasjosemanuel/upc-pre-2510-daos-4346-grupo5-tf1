-- Users
INSERT INTO users (name, email, password, phone) VALUES
('Ana Ríos', 'ana@correo.com', 'encrypted123', '987654321'),
('Luis Gómez', 'luis@correo.com', 'encrypted456', '912345678'),
('Marta Salas', 'marta@correo.com', 'encrypted789', '955123456'),
('Carlos Ruiz', 'carlos@correo.com', 'encrypted111', '999888777'),
('Julia Vega', 'julia@correo.com', 'encrypted222', '911223344');

-- Subscriptions
INSERT INTO subscriptions (user_id, type, start_date, end_date, status) VALUES
(1, 'Premium', '2025-01-01', '2025-12-31', 'active'),
(2, 'Freemium', '2025-03-01', '2025-12-31', 'active'),
(3, 'Premium', '2025-02-15', '2025-11-30', 'cancelled'),
(4, 'Freemium', '2025-05-01', '2025-12-31', 'active'),
(5, 'Premium', '2025-06-01', '2026-05-31', 'expired');

-- Recommendations
INSERT INTO recommendations (title, description, author, date) VALUES
('Cómo destacar en entrevistas', 'Prepárate con ejemplos reales...', 'Admin', '2025-07-01'),
('Mejora tu CV', 'Usa palabras clave relevantes...', 'Admin', '2025-07-02'),
('LinkedIn efectivo', 'Optimiza tu perfil profesional...', 'Admin', '2025-07-03'),
('Errores comunes al postular', 'Evita errores frecuentes...', 'Admin', '2025-07-04'),
('Networking estratégico', 'Asiste a eventos y sigue en contacto...', 'Admin', '2025-07-05');

-- Company Ratings
INSERT INTO company_ratings (company, stars, comment, author, date) VALUES
('TechCorp', 5, 'Gran cultura empresarial.', 'ana@correo.com', '2025-06-30'),
('InnovateX', 3, 'Buena experiencia pero poco crecimiento.', 'luis@correo.com', '2025-06-29'),
('DevSolutions', 4, 'Buen ambiente pero salario regular.', 'marta@correo.com', '2025-06-28'),
('DataSoft', 2, 'Poca organización interna.', 'carlos@correo.com', '2025-06-27'),
('AlphaCode', 1, 'No cumplían lo prometido.', 'julia@correo.com', '2025-06-26');

-- Jobs
INSERT INTO jobs (title, company, location, rating, created_at) VALUES
('Frontend Developer', 'TechCorp', 'Lima', 4.5, '2025-07-01'),
('Backend Engineer', 'InnovateX', 'Arequipa', 4.0, '2025-07-02'),
('Data Analyst', 'DataSoft', 'Cusco', 3.5, '2025-07-03'),
('UX Designer', 'AlphaCode', 'Trujillo', 4.8, '2025-07-04'),
('QA Tester', 'DevSolutions', 'Lima', 3.9, '2025-07-05');

-- Job Technologies
INSERT INTO job_technologies (job_id, technology) VALUES
(1, 'Angular'), (1, 'TypeScript'),
(2, 'Node.js'), (2, 'PostgreSQL'),
(3, 'Python'), (3, 'Pandas'),
(4, 'Figma'), (4, 'Adobe XD'),
(5, 'Selenium'), (5, 'Java');

-- Messages
INSERT INTO messages (sender, receiver, content, timestamp) VALUES
('ana@correo.com', 'luis@correo.com', 'Hola Luis, ¿cómo estás?', NOW()),
('luis@correo.com', 'ana@correo.com', 'Hola Ana, todo bien y tú?', NOW()),
('marta@correo.com', 'julia@correo.com', '¿Tienes info del trabajo en AlphaCode?', NOW()),
('carlos@correo.com', 'ana@correo.com', 'Gracias por tu recomendación.', NOW()),
('julia@correo.com', 'marta@correo.com', 'Sí, te paso el link ahora.', NOW());

-- Companies
INSERT INTO companies (name, description, rating) VALUES
('TechCorp', 'Empresa líder en software.', 5),
('InnovateX', 'Startup enfocada en innovación.', 3),
('DevSolutions', 'Consultora TI con proyectos ágiles.', 4),
('DataSoft', 'Especialistas en big data.', 2),
('AlphaCode', 'Desarrolladores remotos.', 1);

-- Map Locations
INSERT INTO map_locations (name, latitude, longitude) VALUES
('TechCorp Sede Central', -12.0464, -77.0428),
('InnovateX Oficina', -12.0450, -77.0300),
('DataSoft Tower', -12.0480, -77.0500),
('AlphaCode Hub', -12.0499, -77.0410),
('DevSolutions Base', -12.0470, -77.0432);
