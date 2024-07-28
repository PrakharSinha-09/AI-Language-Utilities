const LanguageSelector = ({ label, selectedLanguage, onChange }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'hn', name: 'Hindi' },
    { code: 'ko', name: 'Korean' },
    { code: 'ru', name: 'Russian' },
    { code: 'ar', name: 'Arabic' },
  ];

  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200 ">{label}</label>
      <select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
