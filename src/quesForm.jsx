import React, { useState } from "react";

function QuestionForm({ setDataArr, dataarr }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const newQuestion = {
      id: Date.now(),
      question,
      answer: "",
      vote: 0,
      time: new Date().toISOString() 
    };

    setDataArr([...dataarr, newQuestion]);
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;
