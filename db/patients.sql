create table IF NOT EXISTS patients (
	patient_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	insurance_number INT NOT NULL UNIQUE,
	admission DATE DEFAULT CURRENT_DATE,
	discharge DATE,
	medical_history TEXT [],
	care_level INT NOT NULL,
	CHECK (patient_id <= 25)
);

insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Emelia', 'Grogan', 333, '12/4/2020', null, ARRAY ['Cancer Treatment'], 4);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Britteny', 'Selland', 222, '12/8/2020', null, ARRAY ['General Pain'], 1);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Freda', 'Wakes', 444, '12/13/2020', null, ARRAY ['Heart Failure'], 5);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Korella', 'Charrett', 111, '12/2/2020', null, ARRAY ['Stroke', 'Cancer Treatment'], 4);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Berrie', 'Ryal', 555, '12/27/2020', null,  ARRAY ['Broken limb'], 1);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Emogene', 'Kelsall', 666, '12/21/2020', null,  ARRAY ['Covid-19'], 5);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Rozanne', 'Madine', 777, '12/19/2020', null,  ARRAY ['Heart Failure'], 5);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Kerwin', 'Bole', 888, '12/18/2020', null,  ARRAY ['Covid-19'], 3);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ('Rakel', 'Sterrie', 999, '12/11/2020', null, ARRAY ['Cancer Treatment'], 4);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ( 'Guillaume', 'D''Acth', 1000, '12/3/2020', null, ARRAY ['Broken limb'], 1);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ( 'Kliment', 'Follit', 1001, '12/21/2020', null,  ARRAY ['Broken limb'], 1);
insert into patients (first_name, last_name, insurance_number, admission, discharge, medical_history, care_level) values ( 'Cherilynn', 'Blofeld', 1002, '12/13/2020', null, ARRAY ['Covid-19'], 5);
