// import React, { useState } from "react";
// import "./Custom.css";

// function QuestionAnswerDisplay({ question, setQuestion, dataarr, setDataArr, bookmarks, setBookmarks }) {
//   const [answer, setAnswer] = useState("");
//   const [voteCount, setVoteCount] = useState(0);
//   const [editingId, setEditingId] = useState(null);

//   const handleAnswerInput = (e) => {
//     setAnswer(e.target.value);
//   };

//   const handleAnswerSubmit = (e) => {
//     e.preventDefault();
//     const time = new Date();
//     if (editingId) {
//       const updatedData = dataarr.map((item) =>
//         item.id === editingId ? { ...item, question, answer, vote: voteCount } : item
//       );
//       setDataArr(updatedData);
//       setEditingId(null);
//     } else {
//       setDataArr([
//         ...dataarr,
//         { question: question, answer: answer, id: dataarr.length + 1, vote: voteCount, time: time },
//       ]);
//     }
//     setAnswer("");
//     setVoteCount(0);
//     setQuestion(""); 
//   };

//   const handleVoteUp = () => {
//     setVoteCount((prevCount) => prevCount + 1);
//   };

//   const handleVoteDown = () => {
//     setVoteCount((prevCount) => prevCount - 1);
//   };

//   const handleEdit = (item) => {
//     setQuestion(item.question);
//     setAnswer(item.answer);
//     setVoteCount(item.vote);
//     setEditingId(item.id);
//   };

//   const handleBookmark = (id) => {
//     if (bookmarks.includes(id)) {
//       setBookmarks(bookmarks.filter((bookmarkId) => bookmarkId !== id));
//     } else {
//       setBookmarks([...bookmarks, id]);
//     }
//   };

//   return (
//     <div className="question-answer-display">
//       {question && (      
//         <div className="answer-wrapper">
//             <p>{question}</p>
//           <div className="vote">
//             Vote
//             <button className="up-btn" onClick={handleVoteUp}>
//               &#x25B2;
//             </button>
//             <button className="down-btn" onClick={handleVoteDown}>
//               &#x25BC;
//             </button>
//           </div>
//           <form onSubmit={handleAnswerSubmit}>
//             <input
//               type="text"
//               id="ans"
//               name="ans"
//               value={answer}
//               onChange={handleAnswerInput}
//               placeholder="Your Answer"
//             />
//             <button type="submit">Submit Answer</button>
//           </form>
//         </div>
//       )}

//       <div>
//         <ul>
//           {dataarr.map((item) => (
//             <li key={item.id}>
//               <strong>Question:</strong> {item.question} <br />
//               <strong>Answer:</strong> {item.answer} <br />
//               <strong>Votes:</strong> {item.vote} <br />
//               <button onClick={() => handleEdit(item)}>Edit</button>
//               <button onClick={() => handleBookmark(item.id)}>
//                 {bookmarks.includes(item.id) ? "Unbookmark" : "Bookmark"}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default QuestionAnswerDisplay;





// import React, { useState } from "react";
// import "./Custom.css";

// function QuestionAnswerDisplay({ question, setQuestion, dataarr, setDataArr, bookmarks, setBookmarks }) {
//   const [answer, setAnswer] = useState("");

//   const handleAnswerInput = (e) => {
//     setAnswer(e.target.value);
//   };

//   const handleAnswerSubmit = (e) => {
//     e.preventDefault();
//     if (!question.trim() || !answer.trim()) return;

//     const existingIndex = dataarr.findIndex((item) => item.question === question);

//     if (existingIndex !== -1) {
//       // If the question already exists, update its answer in place
//       const updatedData = [...dataarr];
//       updatedData[existingIndex].answer = answer;
//       setDataArr(updatedData);
//     } else {
//       // If it's a new question, add a new entry
//       const newEntry = {
//         id: dataarr.length + 1,
//         question: question,
//         answer: answer,
//         vote: 0,
//       };
//       setDataArr([...dataarr, newEntry]);
//     }

//     setAnswer("");
//     setQuestion("");
//   };

//   const handleVoteUp = (id) => {
//     setDataArr(
//       dataarr.map((item) =>
//         item.id === id ? { ...item, vote: item.vote + 1 } : item
//       )
//     );
//   };

//   const handleVoteDown = (id) => {
//     setDataArr(
//       dataarr.map((item) =>
//         item.id === id ? { ...item, vote: item.vote - 1 } : item
//       )
//     );
//   };

//   const handleBookmark = (id) => {
//     setBookmarks(
//       bookmarks.includes(id)
//         ? bookmarks.filter((bookmarkId) => bookmarkId !== id)
//         : [...bookmarks, id]
//     );
//   };

//   return (
//     <div className="question-answer-display">
//       {question && (
//         <div className="answer-wrapper">
//           <p><strong>Question:</strong> {question}</p>
//           <form onSubmit={handleAnswerSubmit}>
//             <input
//               type="text"
//               id="ans"
//               name="ans"
//               value={answer}
//               onChange={handleAnswerInput}
//               placeholder="Your Answer"
              
//             />
//             <button type="submit">Submit Answer</button>
//           </form>
//         </div>
//       )}

//       <ul>
//         {dataarr.map((item) => (
//           <li key={item.id}>
//             <strong>Question:</strong> {item.question} <br />
//             <strong>Answer:</strong> {item.answer} <br />
//             <strong>Votes:</strong> {item.vote}
//             <button className="up-btn" onClick={() => handleVoteUp(item.id)}>
//               &#x25B2;
//             </button>
//             <button className="down-btn" onClick={() => handleVoteDown(item.id)}>
//               &#x25BC;
//             </button>
//             <button onClick={() => handleBookmark(item.id)}>
//               {bookmarks.includes(item.id) ? "Unbookmark" : "Bookmark"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuestionAnswerDisplay;






import React, { useState } from "react";
import "./Custom.css";

function QuestionAnswerDisplay({ question, setQuestion, dataarr, setDataArr, bookmarks, setBookmarks }) {
  const [answer, setAnswer] = useState("");
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [editedAnswer, setEditedAnswer] = useState("");

  const handleAnswerInput = (e) => {
    setAnswer(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    const existingIndex = dataarr.findIndex((item) => item.question === question);

    if (existingIndex !== -1) {
      const updatedData = [...dataarr];
      updatedData[existingIndex].answer = answer;
      setDataArr(updatedData);
    } else {
      const newEntry = {
        id: dataarr.length + 1,
        question: question,
        answer: answer.trim()? answer:"",
        vote: 0,
      };
      setDataArr([...dataarr, newEntry]);
    }

    setAnswer("");
    setQuestion("");
  };

  const handleVoteUp = (id) => {
    setDataArr(dataarr.map((item) => item.id === id ? { ...item, vote: item.vote + 1 } : item));
  };

  const handleVoteDown = (id) => {
    setDataArr(dataarr.map((item) => item.id === id ? { ...item, vote: item.vote - 1 } : item));
  };

  const handleBookmark = (id) => {
    setBookmarks(bookmarks.includes(id) ? bookmarks.filter((bookmarkId) => bookmarkId !== id) : [...bookmarks, id]);
  };

  const handleEditAnswer = (id, currentAnswer) => {
    setEditingAnswerId(id);
    setEditedAnswer(currentAnswer);
  };

  const handleSaveEditedAnswer = (id) => {
    setDataArr(dataarr.map((item) => item.id === id ? { ...item, answer: editedAnswer } : item));
    setEditingAnswerId(null); // Exit editing mode
  };

  return (
    <div className="question-answer-display">
      {question && (
        <div className="answer-wrapper">
          <p><strong>Question:</strong> {question}</p>
          <form onSubmit={handleAnswerSubmit}>
            <input
              type="text"
              value={answer}
              onChange={handleAnswerInput}
              placeholder="Your Answer"
             
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <ul>
        {dataarr.map((item) => (
          <li key={item.id}>
            <strong>Question:</strong> {item.question} <br />
            <strong>Answer:</strong>
            {editingAnswerId === item.id ? (
              <>
                <input
                  type="text"
                  value={editedAnswer}
                  onChange={(e) => setEditedAnswer(e.target.value)}
                />
                <button onClick={() => handleSaveEditedAnswer(item.id)}>Submit</button>
              </>
            ) : (
              <span onClick={() => handleEditAnswer(item.id, item.answer)}>
                {item.answer}
              </span>
            )}
            <br />
            <strong>Votes:</strong> {item.vote}
            <button className="up-btn" onClick={() => handleVoteUp(item.id)}>&#x25B2;</button>
            <button className="down-btn" onClick={() => handleVoteDown(item.id)}>&#x25BC;</button>
            <button onClick={() => handleBookmark(item.id)}>
              {bookmarks.includes(item.id) ? "Unbookmark" : "Bookmark"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionAnswerDisplay;
