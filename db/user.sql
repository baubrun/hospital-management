create table IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    occupation VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    date_created DATE DEFAULT CURRENT_DATE
)