from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from faster_whisper import WhisperModel
import tempfile
import os

app = FastAPI()

# CRITICAL: Allow your Firebase frontend to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Change this to your Firebase URL later for security
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model (Base or Small is best for free hosting)
model = WhisperModel("tiny", device="cpu", compute_type="int8")

@app.post("/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    # 1. Save the uploaded file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(file.filename)[1]) as temp_audio:
        temp_audio.write(await file.read())
        temp_path = temp_audio.name

    # 2. Run Faster-Whisper
    segments, info = model.transcribe(temp_path, beam_size=5)
    
    # 3. Format the output
    transcription = " ".join([segment.text for segment in segments])
    
    # 4. Clean up the temp file
    os.remove(temp_path)
    
    return {"language": info.language, "text": transcription}