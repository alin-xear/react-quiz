function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, currentOptionIndex) => (
        <button
          className={`btn btn-option ${
            currentOptionIndex === answer ? "answer" : ""
          } ${
            hasAnswered
              ? currentOptionIndex === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: currentOptionIndex });
          }}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
