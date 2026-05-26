import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setTranscription("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      // ⚠️ REPLACE THIS LINK WITH YOUR ACTUAL RENDER URL
      const response = await fetch("https://YOUR-RENDER-LINK.onrender.com/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setTranscription(data.text);
    } catch (error) {
      console.error("Error transcribing audio:", error);
      setTranscription("Failed to transcribe audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>🎙️ Audio Transcriber</h1>
      <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="file" 
          accept="audio/*" 
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <button 
          type="submit" 
          disabled={!file || loading}
          style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
        >
          {loading ? "Transcribing..." : "Upload and Transcribe"}
        </button>
      </form>

      {transcription && (
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px' }}>
          <h3>Transcription:</h3>
          <p style={{ lineHeight: '1.6' }}>{transcription}</p>
        </div>
      )}
    </div>
  );
}

export default App;