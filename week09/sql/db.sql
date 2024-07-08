DROP table user if not exists;
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL
);
insert into user (firstname, lastname, city)
values ('toto', 'dupont', 'Lyon')