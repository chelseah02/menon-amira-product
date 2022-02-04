.PHONY: all
all: backend frontend

.PHONY: backend
backend:
	cd backend && pip install -r requirements.txt && python server.py

.PHONY: frontend
frontend:
	cd frontend && npm install && npm start