create table IF NOT EXISTS occupations (
	id SERIAL PRIMARY KEY,
	occupation VARCHAR(50) NOT NULL,
	access_level INT NOT NULL CHECK (access_level <= 5)
);
insert into occupations (id, occupation, access_level) values (1, null, 1);
insert into occupations (id, occupation, access_level) values (2, null, 2);
insert into occupations (id, occupation, access_level) values (3, null, 3);
insert into occupations (id, occupation, access_level) values (4, null, 4);
insert into occupations (id, occupation, access_level) values (5, null, 5);
