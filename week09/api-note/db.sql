DROP TABLE if exists user;
DROP TABLE if exists note;
CREATE TABLE user (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(1024),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE note (
    id INT PRIMARY KEY auto_increment,
    title VARCHAR(50),
    description VARCHAR(255),
    category ENUM('Home', 'Work', 'Personal') NOT NULL,
    id_user INT,
    CONSTRAINT fk_user_comment FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);