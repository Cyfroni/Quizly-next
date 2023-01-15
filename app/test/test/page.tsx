import { createQuery } from "../../../lib/createQuery";
import { graphql } from "../../../src/gql";

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

export default async function page({
  searchParams,
}: {
  searchParams: { categories: string };
}) {
  const categories = JSON.parse(searchParams.categories);
  const categoryId = categories[0];
  const questions =
    categoryId &&
    (await getQuestionsByCategory({
      categoryId,
    }));

  console.log(questions);

  return <div>page</div>;
}
