import { createQuery } from "../../../lib/createQuery";
import { graphql } from "../../../src/gql";
import { QuestionProvider } from "./QuestionContext";

const getQuestionsByCategory = createQuery(
  graphql(`
    query getQuestions($categoryId: Int!) {
      questions(categoryId: $categoryId) {
        id
        content
        answers
        correctAnswer
      }
    }
  `)
);

export default async function Layout({
  params,
  children,
}: {
  params: { categories: string };
  children: React.ReactNode;
}) {
  const categories = params.categories.split("-");
  const categoryId = parseInt(categories[0]);
  const questions = await getQuestionsByCategory({
    categoryId,
  });

  // console.log(questions);
  console.log("layout");

  return (
    <div>
      layout
      {/* {questions.questions.length} */}
      <QuestionProvider value={questions.questions}>
        {children}
      </QuestionProvider>
    </div>
  );
}
