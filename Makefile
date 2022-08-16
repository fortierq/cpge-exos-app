container_node=exos-app-node-1
container_db=exos-app-db-1
image=qfortier/exos

up:
	docker container rm $(container_db) || true # to rebuild db each time
	docker compose up
build:
	docker build --no-cache -t $(image) app
exec:
	docker exec -it $(container_node) bash
start:
	docker start $(container_node)
run:
	docker run -it --name $(container_node) $(image)

prisma:
	docker exec -it $(container_node) npx prisma db pull && npx prisma generate

dev:
	npm --prefix app/ run dev
