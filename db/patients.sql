create table IF NOT EXISTS patients (
	patient_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	admission DATE NOT NULL,
	discharge DATE,
	medical_history TEXT [],
	care_level INT NOT NULL,
	CHECK (patient_id <= 25)
);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (1, 'Korella', 'Charrett', 'kcharrett0@tinyurl.com', '12/2/2020', null, ARRAY ['Stroke', 'Cancer Treatment'], 4);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (2, 'Britteny', 'Selland', 'bselland1@cornell.edu', '12/8/2020', null, ARRAY ['General Pain'], 1);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (3, 'Emelia', 'Grogan', 'egrogan2@hud.gov', '12/4/2020', null, ARRAY ['Cancer Treatment'], 4);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (4, 'Freda', 'Wakes', 'fwakes3@hao123.com', '12/13/2020', null, ARRAY ['Heart Failure'], 5);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (5, 'Berrie', 'Ryal', 'bryal4@digg.com', '12/27/2020', null,  ARRAY ['Broken limb'], 1);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (6, 'Emogene', 'Kelsall', 'ekelsall5@histats.com', '12/21/2020', null,  ARRAY ['Covid-19'], 5);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (7, 'Rozanne', 'Madine', 'rmadine6@yandex.ru', '12/19/2020', null,  ARRAY ['Heart Failure'], 5);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (8, 'Kerwin', 'Bole', 'kbole7@ameblo.jp', '12/18/2020', null,  ARRAY ['Covid-19'], 3);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (9, 'Rakel', 'Sterrie', 'rsterrie8@github.com', '12/11/2020', null, ARRAY ['Cancer Treatment'], 4);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (10, 'Guillaume', 'D''Acth', 'gdacth9@google.es', '12/3/2020', null, ARRAY ['Broken limb'], 1);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (11, 'Kliment', 'Follit', 'kfollita@people.com.cn', '12/21/2020', null,  ARRAY ['Broken limb'], 1);
insert into patients (patient_id, first_name, last_name, email, admission, discharge, medical_history) values (12, 'Cherilynn', 'Blofeld', 'cblofeldb@xrea.com', '12/13/2020', null, ARRAY ['Covid-19'], 5);
