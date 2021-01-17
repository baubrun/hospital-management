create table IF NOT EXISTS rooms (
	room_number SERIAL PRIMARY KEY,
	short_stay BOOLEAN NOT NULL,
	long_stay BOOLEAN NOT NULL,
	occupied BOOLEAN NOT NULL,
	CHECK (room_number <= 25),
	occupant_id INT UNIQUE REFERENCES patients(patient_id) 
);

insert into rooms (short_stay, long_stay, occupied) values (true, true, true);
insert into rooms (short_stay, long_stay, occupied) values (false, false, false);
insert into rooms (short_stay, long_stay, occupied) values (false, true, false);
insert into rooms (short_stay, long_stay, occupied) values (false, false, false);
insert into rooms (short_stay, long_stay, occupied) values (true, true, true);
insert into rooms (short_stay, long_stay, occupied) values (true, false, false);
insert into rooms (short_stay, long_stay, occupied) values (false, true, false);
insert into rooms (short_stay, long_stay, occupied) values (false, false, false);
insert into rooms (short_stay, long_stay, occupied) values (false, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, true, true);
insert into rooms (short_stay, long_stay, occupied) values ( false, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, true, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, false, false);
insert into rooms (short_stay, long_stay, occupied) values ( true, true, false);
