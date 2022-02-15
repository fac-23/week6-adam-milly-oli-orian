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
    'A delicious red cupcake ♥️',
    'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
);

INSERT INTO products (name, price, description, url) VALUES (
    'Sprinkle Town',
    4,
    'Super sweet with extra sprinkles 🦄',
    'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
);

INSERT INTO products (name, price, description, url) VALUES (
    'Chocolate overload',
    5,
    'Rich crunchy goodness🍫',
    'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
);

INSERT INTO products (name, price, description, url) VALUES (
    'Cherry on top!',
    3,
    'We challenge you to find a more perfect item 🍒',
    'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
);

INSERT INTO products (name, price, description, url) VALUES (
    'Green Envy',
    3,
    'Beautifully decorated royal cupcakeness 🟢',
    'https://images.unsplash.com/photo-1612742126667-e669a77b710a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
);

INSERT INTO products (name, price, description, url) VALUES (
    'Coffee Monster',
    2,
    'Missed your espress this morning?',
    'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
);

INSERT INTO products (name, price, description, url) VALUES (
    'Minty Fresh ',
    4,
    'So cool 😎',
    'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
);


COMMIT;
