# 📒 Notes API - Express Backend Task

This is a simple Notes API built using **Node.js** and **Express.js**.  
It supports basic CRUD operations and stores notes in memory (no database required).

---

## 🚀 Features

- Add new notes
- Get all notes
- Get note by ID
- Update a note
- Delete a note

---

## 📦 Tech Stack

- Node.js
- Express.js
- In-memory data storage

---

## 🔧 Setup Instructions

1. Clone this repository:
git clone https://github.com/your-username/notes-api.git
cd notes-api

2. Install dependencies:
npm install

3. Start the server:
node index.js

4. API will run on:
http://localhost:3000

📮 API Endpoints
| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /notes      | Get all notes     |
| GET    | /notes/\:id | Get note by ID    |
| POST   | /notes      | Add new note      |
| PUT    | /notes/\:id | Update note by ID |
| DELETE | /notes/\:id | Delete note by ID |

📌 Sample JSON Body for POST & PUT
{
  "title": "Sample Note",
  "content": "This is the note content."
}


