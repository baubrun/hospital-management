create table IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    access_level INT NOT NULL CHECK(access_level <=5),
    date_created DATE DEFAULT CURRENT_DATE
)