create table rooms (
	room_number SERIAL PRIMARY KEY,
	short_stay BOOLEAN NOT NULL,
	long_stay BOOLEAN NOT NULL,
	occupied BOOLEAN NOT NULL,
	CHECK (room_number <= 25)
);
insert into rooms (room_number, short_stay, long_stay, occupied) values (1, true, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (2, false, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (3, false, false, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (4, false, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (5, true, true, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (6, true, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (7, false, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (8, false, true, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (9, false, true, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (10, false, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (11, false, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (12, false, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (13, false, true, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (14, false, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (15, true, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (16, false, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (17, true, false, false);
insert into rooms (room_number, short_stay, long_stay, occupied) values (18, false, false, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (19, true, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (20, false, false, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (21, true, false, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (22, false, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (23, true, true, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (24, true, false, true);
insert into rooms (room_number, short_stay, long_stay, occupied) values (25, false, true, false);
