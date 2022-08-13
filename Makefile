up:
	docker container rm exos-app-db-1 || true # to rebuild db each time
	docker compose up
build:
	docker build --no-cache -t qfortier/exos server
exec:
	docker exec -it exos-app-node-1 bash
