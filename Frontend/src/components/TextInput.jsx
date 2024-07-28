const TextInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows="4"
        className="p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        placeholder="Enter text here..."
      ></textarea>
    </div>
  );
};

export default TextInput;
