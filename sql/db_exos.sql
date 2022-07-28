GRANT ALL PRIVILEGES ON DATABASE cpge TO postgres;
    
CREATE TABLE exercise (
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL PRIMARY KEY
);

CREATE TABLE subject (
	name VARCHAR(255) NOT NULL PRIMARY KEY
);

CREATE TABLE exercise_subject (
	exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
	subject_name VARCHAR(255) NOT NULL REFERENCES subject
);

CREATE TABLE algorithm (
    name VARCHAR(255) NOT NULL PRIMARY KEY
);

CREATE TABLE exercise_algorithm (
    exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
    algorithm_name VARCHAR(255) NOT NULL REFERENCES algorithm
);

CREATE TABLE ds (
    name VARCHAR(255) NOT NULL PRIMARY KEY
);

CREATE TABLE exercise_ds (
    exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
    ds_name VARCHAR(255) NOT NULL REFERENCES ds
);

INSERT INTO exercise(name, path) VALUES ('Problème de flot maximum', 'graph/flow');
INSERT INTO subject(name) VALUES ('graph');
INSERT INTO exercise_subject(exercise_path, subject_name) VALUES ('graph/flow', 'graph');
