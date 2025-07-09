DROP TABLE IF EXISTS job_technologies;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS recommendations;
DROP TABLE IF EXISTS company_ratings;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS map_locations;

CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255),
    phone VARCHAR(20)
);

CREATE TABLE subscriptions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    type VARCHAR(20),
    start_date DATE,
    end_date DATE,
    status VARCHAR(20)
);

CREATE TABLE recommendations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    author VARCHAR(100),
    date DATE
);

CREATE TABLE company_ratings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company VARCHAR(255),
    stars INT,
    comment TEXT,
    author VARCHAR(100),
    date DATE
);

CREATE TABLE jobs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    company VARCHAR(255),
    location VARCHAR(255),
    rating DOUBLE,
    created_at DATE
);

CREATE TABLE job_technologies (
    job_id BIGINT,
    technology VARCHAR(100)
);

CREATE TABLE messages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    sender VARCHAR(100),
    receiver VARCHAR(100),
    content TEXT,
    timestamp TIMESTAMP
);

CREATE TABLE companies (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    rating INT
);

CREATE TABLE map_locations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    latitude DOUBLE,
    longitude DOUBLE
);