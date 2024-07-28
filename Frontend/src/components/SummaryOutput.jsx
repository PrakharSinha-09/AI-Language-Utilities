const SummaryOutput = ({ summary }) => {
    return (
      <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <h2 className="text-lg font-bold mb-2">Summary:</h2>
        <p>{summary}</p>
      </div>
    );
  };
  
  export default SummaryOutput;
  