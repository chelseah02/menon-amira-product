.PHONY: all
all: backend frontend

.PHONY: backend
backend:
	cd backend && pip3 install -r requirements.txt && python3 server.py

.PHONY: frontend
frontend:
	cd frontend && npm start