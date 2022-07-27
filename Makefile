run:
	docker-compose up --build
build:
	docker build --no-cache -t qfortier/cpge-exos-sql sql
start:
	cd server && npm start server