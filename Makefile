# ARGS
DIR = /${HOME}/data/{postgres}

# CMD
all:
	@mkdir -p $(DIR)
	@docker compose -f docker-compose.yml up --build -d
.PHONY: all

up:
	@mkdir -p $(DIR)
	@docker compose -f docker-compose.yml up -d
.PHONY: up

down:
	@docker compose -f docker-compose.yml down
.PHONY: down

clean:
	@chmod 744 clean.sh
	@./clean.sh
.PHONY: clean

ac:
	@make clean
	rm -rf ./data 2>/dev/null
.PHONY: ac

re:
	@make clean
	@make
.PHONY: re

