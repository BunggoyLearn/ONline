-- Drop the database if it exists
DROP DATABASE IF EXISTS online_db;

-- Create the database
CREATE DATABASE online_db;

-- Connect to the new database
\c online_db;

-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL, 
  date DATE NOT NULL,
  time TIME NOT NULL,
  user_id SERIAL,
  FOREIGN KEY(user_id)
  REFERENCES users(user_id)
);