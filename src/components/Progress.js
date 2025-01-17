import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <b>{index + 1}</b> / {numQuestions}
      </p>
      <p>
        <b>{points}</b> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
