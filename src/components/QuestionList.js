import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions,setQuestions] = useState(null);
  useEffect (() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => {
      setQuestions(questions);
    });
  },[]);

  const questionItems = questions.map((q) => (
    <QuestionItem
    key={q.id}
    question = {q}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
