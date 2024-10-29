import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions[index];
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
