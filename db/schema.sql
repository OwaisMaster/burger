DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45) NOT NULL,
    planet VARCHAR(30) NOT NULL default 'Earth',
    devoured BOOLEAN NOT NULL default 0,
    PRIMARY KEY(id)
)