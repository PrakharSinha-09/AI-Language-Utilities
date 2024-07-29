import { useState, useEffect } from 'react';

const SpeechInput = ({ setText }) => {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        setText(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      alert('Speech recognition not supported');
    }
  }, [setText]);

  const handleSpeech = () => {
    if (recognition) {
      if (listening) {
        recognition.stop();
      } else {
        recognition.start();
      }
      setListening(!listening);
    }
  };

  return (
    <button
      onClick={handleSpeech}
      className="p-2 bg-blue-600 dark:bg-blue-500 text-white rounded"
    >
      {listening ? 'Stop Listening' : '🎤 Start Speaking'}
    </button>
  );
};

export default SpeechInput;
