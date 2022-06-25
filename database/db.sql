CREATE DATABASE usersdb;

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  fullname VARCHAR(200),  
  username VARCHAR(40), 
  email TEXT
);

INSERT INTO users(fullname, username, email) VALUES('Sherlock Holmes','sherlock28','sherlockh@gmail.com');
INSERT INTO users(fullname, username, email) VALUES('John Watson','watson','drwatson@gmail.com');
INSERT INTO users(fullname, username, email) VALUES('James Moriarty','jmoriarty','drjmoriarty@gmail.com');