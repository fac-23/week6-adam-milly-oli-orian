BEGIN;

-- Remove existing tables and repopulate db when script runs
DROP TABLE IF EXISTS users, products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER,
    url TEXT, 
    description TEXT

);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES (
    'Grace Hopper',
    'gracehopper@gmail.com'
);


INSERT INTO products (name, price, description, url) VALUES (
    'Red Velvet',
    3,
    'A delicious red cupcake',
    'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
);



COMMIT;