# 🎙️ Audio Transcription System

**Live Demo:** [Insert your Firebase link here]

## 📖 About The Project
This is a fast and easy-to-use web application that converts spoken audio into written text. Users can upload audio files (like MP3, WAV, or M4A), and the app uses an advanced AI model to automatically type out what was said. 

The project is split into two parts: a user-friendly website (frontend) and a powerful AI server (backend).

## ✨ Features
* **Multi-Format Support:** Accepts popular audio formats like `.mp3`, `.wav`, and `.m4a`.
* **Fast AI Processing:** Uses `Faster-Whisper` to transcribe audio quickly without needing a heavy or expensive server.
* **Modern Web Interface:** A clean, responsive website built with React.
* **Fully Deployed:** The frontend is hosted on Firebase, and the backend API is hosted on Render.

## 🛠️ Tech Stack
* **Frontend:** React.js, HTML, CSS
* **Backend:** Python, FastAPI
* **Machine Learning Model:** Faster-Whisper (by Systran)
* **Deployment:** Firebase Hosting (Frontend), Render (Backend)

## 🚀 How It Works
1. The user visits the website and uploads an audio file.
2. The React frontend sends the audio file to the Python backend securely.
3. The FastAPI backend saves the file temporarily and feeds it into the Faster-Whisper AI model.
4. The AI model figures out the text, and the backend sends that text back to the website.
5. The user sees the transcribed text on their screen!

---

## 💻 How to Run It Locally (On Your Computer)

If you want to download this code and run it on your own computer, follow these steps.

### 1. Set Up the Backend (Python/FastAPI)
Open your terminal, go to the `backend` folder, and run these commands:

```bash
# Move into the backend folder
cd backend

# Install the required Python tools
pip install -r requirements.txt

# Start the local server
uvicorn main:app --reload
