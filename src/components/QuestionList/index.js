import React, { useEffect, useState } from "react";

const QUESTIONS_API_BASE_URL = "https://api.frontendexpert.io/api/fe/questions";
const SUBMISSIONS_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/submissions";

function useQuestionsAndSubmissions() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [questionsResponse, submissionsResponse] = await Promise.all([
        fetch(QUESTIONS_API_BASE_URL),
        fetch(SUBMISSIONS_API_BASE_URL),
      ]);
      const [question, submission] = await Promise.all([
        questionsResponse.json(),
        submissionsResponse.json(),
      ]);
      setQuestions(question);
      setSubmissions(submission);
    };
    fetchData();
  }, []);

  return [questions, submissions];
}

function getQuestionsByCategory(questions) {
  const questionsByCategory = {};
  questions.forEach(({ category, ...question }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!questionsByCategory.hasOwnProperty(category))
      questionsByCategory[category] = [];
    questionsByCategory[category].push(question);
  });
  return questionsByCategory;
}

function getSubmissionsByQuestion(submissions) {
  const submissionsByQuestion = [];
  submissions.forEach(({ questionId, status }) => {
    submissionsByQuestion[questionId] = status;
  });
  return submissionsByQuestion;
}

function QuestionList() {
  const [questions, submissions] = useQuestionsAndSubmissions();
  const questionsByCategory = getQuestionsByCategory(questions);
  const submissionsByQuestion = getSubmissionsByQuestion(submissions);
  const categories = Object.keys(questionsByCategory);
  return (
    <>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          questions={questionsByCategory[category]}
          submissions={submissionsByQuestion}
        />
      ))}
    </>
  );
}

function Category({ category, questions, submissions }) {
  const totalQuestions = questions.length;
  const numQuestionsCorrect = questions.reduce(
    (sum, question) => (submissions[question.id] === "CORRECT" ? sum + 1 : sum),
    0
  );
  return (
    <div className="category">
      <h2>
        {category} - {numQuestionsCorrect} / {totalQuestions}
      </h2>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          submission={submissions}
        />
      ))}
    </div>
  );
}

function Question({ question, submission }) {
  const submissionStatus = submission[question.id];
  const statusClass =
    submissionStatus == null
      ? "unattempted"
      : submissionStatus.toLowerCase().replace("_", "-");

  return (
    <div className="question">
      <div className={`status ${statusClass}`} />
      <h3>{question.name}</h3>
    </div>
  );
}

export default QuestionList;
