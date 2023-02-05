"use client";

import Link from "next/link";
import { useQuestion } from "./QuestionContext";
import { QuestionComponent } from "./QuestionComponent";

export default function Page({
  params,
  searchParams,
}: {
  params: { categories: string };
  searchParams: { question?: string };
}) {
  const question = parseInt(searchParams?.question || "0");
  const q = useQuestion(question);

  return (
    <div>
      <QuestionComponent
        content={q.content}
        answers={q.answers}
        correctAnswer={q.correctAnswer}
      />
      <div className="mx-2 flex gap-2 text-center">
        <Link
          href={`test/${params.categories}?question=${question - 1}`}
          className="flex-1 overflow-hidden rounded-lg border py-4 aria-disabled:pointer-events-none aria-disabled:text-slate-400"
          aria-disabled={question === 0}
        >
          Back
        </Link>
        <Link
          href={`test/${params.categories}?question=${question + 1}`}
          className="flex-1 rounded-lg border py-4"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
