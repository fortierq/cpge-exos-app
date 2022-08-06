run:
	docker container rm exos-app-db-1 || true
	docker compose up
build:
	docker build --no-cache -t qfortier/exos server
start:
	cd server && npm start server