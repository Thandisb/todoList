DROP DATABASE IF EXISTS todolist_dev;

CREATE DATABASE todolist_dev;

\c todolist_dev;


CREATE TABLE todos(
    id SERIAL PRIMARY KEY, 
    category TEXT NOT NULL,
    task TEXT NOT NULL
);