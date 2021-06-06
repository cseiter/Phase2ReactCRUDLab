import React,{useEffect,useState} from "react";

function QuestionList() {
  const [getQuestions,setQuestions] = useState(null);
  useEffect (() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((getQuestions) => {
      setQuestions(getQuestions);
    });
  },[]);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
