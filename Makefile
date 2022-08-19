.PHONY: db 

container_node=cpge-exos-app-node-1
container_db=cpge-exos-app-db-1
image=qfortier/exos

up:
	docker container rm $(container_db) || true # to rebuild db each time
	docker compose up
build:
	docker build -t $(image) app # --no-cache 
exec: start
	docker exec -it $(container_node) bash
start:
	docker start $(container_node)
run:
	docker run -it --name $(container_node) $(image)
push:
	docker push $(image)
	
prisma:
	docker exec -it $(container_node) npx prisma db pull && npx prisma generate

dev:
	npm --prefix app/ run dev
prod:
	npm --prefix app/ run build && npm --prefix app/ run start

db:
	docker exec -it $(container_db) psql -U postgres
