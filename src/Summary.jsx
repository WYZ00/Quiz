import React from "react";

const Summary = ({ quizCount, summary }) => {
  const { wrong, correct } = summary;
  return (
    <div className="text-center">
      {quizCount === correct && (
        <>
          <span>😸</span>
          <br />
          <span className="text-success">Good Job!!!!!!</span>
        </>
      )}
      {wrong > 0 && (
        <>
          <span>😔</span>
          <br />
          <span className="text-danger">
            {correct} right,{wrong} wrong
          </span>
        </>
      )}

      <br />
      <a href="http://localhost:3000" className="mt-5 btn btn-success">
        Restart
      </a>
    </div>
  );
};

export default Summary;
