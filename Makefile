run:
	docker container rm exos-app-db-1 || true
	docker compose up
build:
	docker build --no-cache -t qfortier/cpge-exos-sql sql
start:
	cd server && npm start server