create table patients (
	patient_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	admission DATE NOT NULL,
	discharge DATE,
	conditions TEXT []
	CHECK (patient_id <= 25)
);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (1, 'Korella', 'Charrett', 'kcharrett0@tinyurl.com', '12/2/2020', null, ARRAY ['Stroke', 'Cancer Treatment']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (2, 'Britteny', 'Selland', 'bselland1@cornell.edu', '12/8/2020', null, ARRAY ['General Pain']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (3, 'Emelia', 'Grogan', 'egrogan2@hud.gov', '12/4/2020', null, ARRAY ['Cancer Treatment']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (4, 'Freda', 'Wakes', 'fwakes3@hao123.com', '12/13/2020', null, ARRAY ['Heart Failure']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (5, 'Berrie', 'Ryal', 'bryal4@digg.com', '12/27/2020', null,  ARRAY ['Broken limb']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (6, 'Emogene', 'Kelsall', 'ekelsall5@histats.com', '12/21/2020', null,  ARRAY ['Covid-19']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (7, 'Rozanne', 'Madine', 'rmadine6@yandex.ru', '12/19/2020', null,  ARRAY ['Heart Failure']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (8, 'Kerwin', 'Bole', 'kbole7@ameblo.jp', '12/18/2020', null,  ARRAY ['Covid-19']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (9, 'Rakel', 'Sterrie', 'rsterrie8@github.com', '12/11/2020', null, ARRAY ['Cancer Treatment']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (10, 'Guillaume', 'D''Acth', 'gdacth9@google.es', '12/3/2020', null, ARRAY ['Broken limb']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (11, 'Kliment', 'Follit', 'kfollita@people.com.cn', '12/21/2020', null,  ARRAY ['Broken limb']);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, conditions) values (12, 'Cherilynn', 'Blofeld', 'cblofeldb@xrea.com', '12/13/2020', null, ARRAY ['Covid-19']);
