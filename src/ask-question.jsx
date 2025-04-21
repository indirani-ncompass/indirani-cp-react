
// import "./App.css";
// import "./Custom.css"
// import React, { useState } from "react";
// import Answer from "./answer";
// import Display from "./display";
// import Sort from "./sort";
// import ItemManager from "./item";

// function AskQuestion() {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [dataarr, setDataArr] = useState([]);
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [sortData, setSortData] = useState([]);
//     const [editingId, setEditingId] = useState(null);
//     const [bookmarks, setBookmarks] = useState([]);

//     function handleInput(e) {
//         setQuestion(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (editingId) {
//             const updatedData = dataarr.map((item) =>
//                 item.id === editingId ? { ...item, question, answer } : item
//             );
//             setDataArr(updatedData);
//             setEditingId(null);
//         } else {
//             setIsSubmitted(true);
//         }

//     };
  
//     //for displaying
//     const handleSort = (e) => {
//         setSortData([...e]);
//     }

//     const handleEdit = (item) => {
//         setQuestion(item.question);
//         setAnswer(item.answer);
//         setIsSubmitted(true);
//         setEditingId(item.id);
//     };

//     const handleBookmark = (id) => {
//         if (bookmarks.includes(id)) {
//             setBookmarks(bookmarks.filter((bookmarkId) => bookmarkId !== id));
//         } else {
//             setBookmarks([...bookmarks, id]);
//         }
//     };
//     return (
//         <div id="main">
//             <div id="ask-question">
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="ques">Ask Question</label>
//                     <input
//                         type="text"
//                         id="ques"
//                         value={question}
//                         onChange={handleInput}
//                         required
//                     />
//                     <button className="ask-btn" type="submit">Submit</button>
//                 </form>
//             </div>

//             <div>
//                 <Sort dataarr={dataarr} onSortChange={handleSort}
//                     bookmarks={bookmarks} />
//             </div>

//             <div>
//                 {isSubmitted && (
//                     <p>
//                         <strong>{question}</strong>
//                     </p>
//                 )}
//                 <Answer
//                     question={question}
//                     setQuestion={setQuestion}
//                     answer={answer}
//                     setAnswer={setAnswer}
//                     dataarr={dataarr}
//                     setDataArr={setDataArr}
//                     setIsSubmitted={setIsSubmitted}
//                 />
//                 {/* <ItemManager  dataarr={dataarr} setDataArr={setDataArr} onBookmark={handleBookmark} bookmarks={bookmarks}  /> */}
                    

//             </div>

//             <div>
//                 <Display dataarr={sortData.length > 0 ? sortData : dataarr}
//                     onEdit={handleEdit}
//                     onBookmark={handleBookmark}
//                     bookmarks={bookmarks} />
//             </div>

//         </div>
//     );

// }




// export default AskQuestion




// import "./App.css";
// import "./Custom.css";
// import React, { useState } from "react";
// import Sort from "./sort";
// import QuestionAnswerDisplay from "./item"; 

// function AskQuestion() {
//   const [question, setQuestion] = useState("");
//   const [dataarr, setDataArr] = useState([]);
//   const [sortData, setSortData] = useState([]);
//   const [bookmarks, setBookmarks] = useState([]);

//   function handleInput(e) {
//     setQuestion(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleSort = (e) => {
//     setSortData([...e]);
//   };

//   return (
//     <div id="main">
//       <div id="ask-question">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="ques">Ask Question</label>
//           <input
//             type="text"
//             id="ques"
//             value={question}
//             onChange={handleInput}
//             required
//           />
//           <button className="ask-btn" type="submit">
//             Submit Question
//           </button>
//         </form>
//       </div>

//       <div>
//         <Sort dataarr={dataarr} onSortChange={handleSort} bookmarks={bookmarks} />
//       </div>

//       <div>
//         <QuestionAnswerDisplay
//           question={question}
//           setQuestion={setQuestion}
//           dataarr={sortData.length > 0 ? sortData : dataarr}
//           setDataArr={setDataArr}
//           bookmarks={bookmarks}
//           setBookmarks={setBookmarks}
//         />
//       </div>
//     </div>
//   );
// }

// export default AskQuestion;




import React, { useState ,useEffect } from "react";
import QuestionForm from "./quesForm";
import QuestionList from "./quesList";
import Sort from "./sort";

function AskQuestion() {
  const [dataarr, setDataArr] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [apiData, setApiData] = useState(null); 
  const [apiError, setApiError] = useState(null); 

  useEffect(() => {

    const fetchApiData = async () => {
      try {
        const response = await fetch(
          "https://rij5ei2vqe.execute-api.ap-south-1.amazonaws.com/test1/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
        console.log("data"+data);
      } catch (error) {
        setApiError(error);
      }
    };

    fetchApiData(); 
  }, []);

  return (
    <div className="app-container">
   
      <QuestionForm setDataArr={setDataArr} dataarr={dataarr} />
 
      <Sort dataarr={dataarr} onSortChange={setSortedData} bookmarks={bookmarks} />
   
      <QuestionList
        dataarr={sortedData.length ? sortedData : dataarr}
        setDataArr={setDataArr}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        sortedData={sortedData}
      />
    </div>
  );
}

export default AskQuestion;