import { useState } from "react";

const TranslationOutput = ({ translatedText }) => {
 
  return (
    <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded relative">
      <h2 className="text-lg font-bold mb-2">Translation:</h2>
      <p>{translatedText}</p>  
    </div>
  );
};

export default TranslationOutput;
