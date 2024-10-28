function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
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
