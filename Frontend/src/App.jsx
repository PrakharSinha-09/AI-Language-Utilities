import { useState, useEffect } from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import TextInput from './components/TextInput';
import TranslationOutput from './components/TranslationOutput';
import SpeechInput from './components/SpeechInput';
import SummaryOutput from './components/SummaryOutput';
import axios from 'axios';
import Loader from './components/Loader';

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [summary, setSummary] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

const handleTranslate = async () => {
  setLoading1(true);
  try {
    const response = await axios.post('https://ai-language-utilities.el.r.appspot.com/translate', {
      text,
      sourceLanguage,
      targetLanguage,
    });
    console.log(response);
    setTranslatedText(response.data.ans);
  } catch (error) {
    console.error('Translation failed:', error);
    setTranslatedText('Translation error');
  }
  finally{
    setLoading1(false)
  }
};

const handleSummarize = async () => {
  setLoading2(true)
  try {
    const response = await axios.post('https://ai-language-utilities.el.r.appspot.com/summarize', {
      text,
    });
    setSummary(response.data.ans);
  } catch (error) {
    console.error('Summarization failed:', error);
    setSummary('please try again!');
  }
  finally{
    setLoading2(false)
  }
};

const handleClear = async () => {
  setSummary('')
  setText('')
  setTranslatedText('')
};


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="w-full max-w-2xl p-4">
        <LanguageSelector
          label="Source Language"
          selectedLanguage={sourceLanguage}
          onChange={setSourceLanguage}
        />
        <LanguageSelector
          label="Target Language"
          selectedLanguage={targetLanguage}
          onChange={setTargetLanguage}
        />
        <TextInput value={text} onChange={setText} />
        <button onClick={handleTranslate} disabled={loading1} className="font-semibold mb-4 p-2 bg-blue-600 dark:bg-blue-500 text-white rounded">
          Translate
        </button>
        <button onClick={handleSummarize} disabled={loading2} className="font-semibold mb-4 ml-3 p-2 bg-red-600 dark:bg-red-500 text-white rounded">
          Summarize
        </button>
        <button onClick={handleClear}  className="font-semibold mb-4 ml-3 p-2 bg-red-600 dark:bg-red-500 text-white rounded">
          Clear All
        </button>
        {loading1 ? (<Loader />):(
          <TranslationOutput translatedText={translatedText} />
        )}

        {loading2 ? (<Loader />):(
          <SummaryOutput summary={summary} />
        )}
        <SpeechInput setText={setText}/>
      </div>
    </div>
  );
};

export default App;
