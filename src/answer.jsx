
import "./App.css";
import React, { useState } from "react";
import "./Custom.css"

function Answer({ question, setQuestion, answer, setAnswer, dataarr, setDataArr, setIsSubmitted }) {
    const handleAnswerInput = (e) => {
        setAnswer(e.target.value);
    };

    const handleAnswer = (e) => {
        e.preventDefault();
        const time = new Date()
        setDataArr([...dataarr, { question: question, answer: answer, id: dataarr.length + 1, vote: voteCount, time: time }]);
        setIsSubmitted(false);
        setQuestion(''),
            console.log(dataarr)
        setAnswer("");
        setVoteCount(0);
    }

    const [voteCount, setVoteCount] = useState(0);
    const handleVoteUp = () => { setVoteCount(prevCount => prevCount + 1); };
    const handleVoteDown = () => { setVoteCount(prevCount => prevCount - 1) };
    return (
        <div class="answer-wrapper">
            <div class="vote">Vote
                < button className="up-btn" onClick={handleVoteUp} >
                    &#x25B2;
                </button>
                <button classname="down-btn" onClick={handleVoteDown} >
                    &#x25BC;
                </button>
            </div>

            <form onSubmit={handleAnswer}>
                <input
                    type="text"
                    id="ans"
                    name="ans"
                    value={answer}
                    onChange={handleAnswerInput}
                />
                <button type="submit">Submit</button>


            </form>



        </div>
    );
}

export default Answer