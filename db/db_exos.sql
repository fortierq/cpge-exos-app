CREATE TABLE IF NOT EXISTS exercise (
	name VARCHAR(255) NOT NULL,
	path VARCHAR(255) NOT NULL PRIMARY KEY);
CREATE TABLE IF NOT EXISTS subject (
	name VARCHAR(255) NOT NULL PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS exercise_subject (
	exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
	subject_name VARCHAR(255) NOT NULL REFERENCES subject,
	PRIMARY KEY (exercise_path, subject_name)
);
CREATE TABLE IF NOT EXISTS ds (
	name VARCHAR(255) NOT NULL PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS exercise_ds (
	exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
	ds_name VARCHAR(255) NOT NULL REFERENCES ds,
	PRIMARY KEY (exercise_path, ds_name)
);
CREATE TABLE IF NOT EXISTS language (
	name VARCHAR(255) NOT NULL PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS exercise_language (
	exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
	language_name VARCHAR(255) NOT NULL REFERENCES language,
	PRIMARY KEY (exercise_path, language_name)
);
CREATE TABLE IF NOT EXISTS algorithm (
	name VARCHAR(255) NOT NULL PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS exercise_algorithm (
	exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
	algorithm_name VARCHAR(255) NOT NULL REFERENCES algorithm,
	PRIMARY KEY (exercise_path, algorithm_name)
);
CREATE TABLE IF NOT EXISTS class (
	name VARCHAR(255) NOT NULL PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS exercise_class (
	exercise_path VARCHAR(255) NOT NULL REFERENCES exercise,
	class_name VARCHAR(255) NOT NULL REFERENCES class,
	PRIMARY KEY (exercise_path, class_name)
);
INSERT INTO exercise(name, path) VALUES ('Point fixe dans un tableau', 'array/fixed');
INSERT INTO subject (name) VALUES ('array');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('array/fixed', 'array');
INSERT INTO subject (name) VALUES ('sort');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('array/fixed', 'sort');
INSERT INTO ds (name) VALUES ('array');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('array/fixed', 'array');
INSERT INTO language (name) VALUES ('c');
INSERT INTO exercise_language (exercise_path, language_name) VALUES ('array/fixed', 'c');
INSERT INTO algorithm (name) VALUES ('dichotomy');
INSERT INTO exercise_algorithm (exercise_path, algorithm_name) VALUES ('array/fixed', 'dichotomy');
INSERT INTO class (name) VALUES ('mp2i');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('array/fixed', 'mp2i');
INSERT INTO exercise(name, path) VALUES ('Médiane de deux tableaux triés', 'array/median2');
INSERT INTO subject (name) VALUES ('dichotomy');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('array/median2', 'dichotomy');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('array/median2', 'array');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('array/median2', 'array');
INSERT INTO exercise_algorithm (exercise_path, algorithm_name) VALUES ('array/median2', 'dichotomy');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('array/median2', 'mp2i');
INSERT INTO class (name) VALUES ('mp');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('array/median2', 'mp');
INSERT INTO exercise(name, path) VALUES ('Problème de flot maximum', 'graph/flow');
INSERT INTO subject (name) VALUES ('graph');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('graph/flow', 'graph');
INSERT INTO ds (name) VALUES ('graph');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('graph/flow', 'graph');
INSERT INTO language (name) VALUES ('ocaml');
INSERT INTO exercise_language (exercise_path, language_name) VALUES ('graph/flow', 'ocaml');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('graph/flow', 'mp2i');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('graph/flow', 'mp');
INSERT INTO exercise(name, path) VALUES ('Minimum sur une fenêtre glissante', 'deque/min_sliding_window');
INSERT INTO subject (name) VALUES ('minimum');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('deque/min_sliding_window', 'minimum');
INSERT INTO subject (name) VALUES ('linkedlist');
INSERT INTO exercise_subject (exercise_path, subject_name) VALUES ('deque/min_sliding_window', 'linkedlist');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('deque/min_sliding_window', 'array');
INSERT INTO ds (name) VALUES ('deque');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('deque/min_sliding_window', 'deque');
INSERT INTO ds (name) VALUES ('heap');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('deque/min_sliding_window', 'heap');
INSERT INTO ds (name) VALUES ('linkedlist');
INSERT INTO exercise_ds (exercise_path, ds_name) VALUES ('deque/min_sliding_window', 'linkedlist');
INSERT INTO exercise_language (exercise_path, language_name) VALUES ('deque/min_sliding_window', 'c');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('deque/min_sliding_window', 'mp2i');
INSERT INTO exercise_class (exercise_path, class_name) VALUES ('deque/min_sliding_window', 'mp');