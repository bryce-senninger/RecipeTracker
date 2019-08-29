CREATE DATABASE recipe_db;
USE recipe_db;

CREATE TABLE recipes
(
	id int NOT NULL AUTO_INCREMENT,
	recipe_name varchar(255) NOT NULL,
	tried BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
