CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price real NOT NULL,
    url VARCHAR NOT NULL,
    description text,
    category VARCHAR(100)
);