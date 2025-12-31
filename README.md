# 🚀 Pipeline Builder – Frontend & Backend Technical Assessment

This project is a **visual pipeline builder application** that allows users to create workflows by dragging and connecting nodes. The frontend provides an interactive node-based editor, while the backend analyzes the pipeline to determine its structure and validity.

The system checks whether the created pipeline forms a **Directed Acyclic Graph (DAG)** and reports useful statistics such as node and edge counts.

---

## 🧠 Project Overview

- **Frontend:** React + React Flow  
- **Backend:** FastAPI (Python)  
- **State Management:** Zustand  
- **Purpose:** Build, visualize, and validate pipelines using a clean and reusable architecture

---

## ✨ Features

### Frontend
- Drag-and-drop node-based editor
- Multiple node types (Input, Output, LLM, Text, Math, Filter, etc.)
- Reusable **BaseNode abstraction** for scalable node creation
- Dynamic Text node with:
  - Auto-resizing based on content
  - Variable detection using `{{variable}}`
  - Automatic creation of input handles
- Clean, modern dark-themed UI
- Submit pipeline for backend analysis

### Backend
- Receives pipeline graph (nodes & edges)
- Counts number of nodes and edges
- Validates whether the pipeline is a **DAG**
- Returns structured analysis response

---

## 📁 Project Structure

├── frontend/
│ ├── src/
│ │ ├── nodes/ # All node components
│ │ │ ├── baseNode.js # Shared node abstraction
│ │ │ ├── inputNode.js
│ │ │ ├── textNode.js
│ │ │ └── and many more
│ │ ├── store.js # Global state (Zustand)
│ │ ├── ui.js # React Flow canvas
│ │ ├── toolbar.js # Draggable node toolbar
│ │ ├── submit.js # Pipeline submission logic
│ │ └── App.js
│ └── index.css
│
├── backend/
│ └── main.py # FastAPI backend
│
└── README.md




## ⚙️ How to Run the Project


### 1️⃣ Start the Backend
```bash
cd backend
uvicorn main:app --reload
Backend runs at:    http://127.0.0.1:8000


### 2️⃣ Start the Frontend 
cd frontend
npm install
npm start
Frontend runs at:   http://localhost:3000



🧪 How to Use the App

1.  Drag nodes from the toolbar onto the canvas
2.  Connect nodes using handles to form a pipeline
3.  Use the Text node to define variables like {{input}}
4.  Click Submit Pipeline
5.  View the backend analysis in the alert popup:
    ->Number of nodes
    ->Number of edges
    ->DAG validity



