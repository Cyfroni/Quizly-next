"use client";

import Link from "next/link";
import { useQuestion } from "./QuestionContext";
import { QuestionComponent } from "./QuestionComponent";

export default function Page({
  params,
  searchParams,
}: {
  params: { categories: string };
  searchParams: { question: string };
}) {
  const question = parseInt(searchParams.question);
  const q = useQuestion(question);

  return (
    <>
      <QuestionComponent
        content={q.content}
        answers={q.answers}
        correctAnswer={q.correctAnswer}
      />
      {question > 0 && (
        <Link href={`test/${params.categories}?question=${question - 1}`}>
          Back
        </Link>
      )}
      {/* {question < questions.questions.length && ( */}
      <Link href={`test/${params.categories}?question=${question + 1}`}>
        Next
      </Link>
      {/* )} */}
      {/* <Link href={"test/test/summary"}>link</Link> */}
    </>
  );
}
