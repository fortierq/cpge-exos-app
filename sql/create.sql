GRANT ALL PRIVILEGES ON DATABASE cpge TO postgres;
    
CREATE TABLE exercise (
    path VARCHAR(255) NOT NULL,
	PRIMARY KEY(path)
);

CREATE TABLE subject (
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY(name)
);

CREATE TABLE exercise_subject (
	exercise_path VARCHAR(255) NOT NULL,
	subject_name VARCHAR(255) NOT NULL
	-- FOREIGN KEY(exercise_path) REFERENCES exercise(path),
	-- FOREIGN KEY(subject_name) REFERENCES subject(name)
);

INSERT INTO exercise(path) VALUES ('graph/flow');
INSERT INTO subject(name) VALUES ('graph');
INSERT INTO subject(name) VALUES ('stack');
INSERT INTO exercise_subject(exercise_path, subject_name) VALUES ('graph/flow', 'graph');
