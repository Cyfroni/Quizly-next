import { graphQLClient } from "../../lib/graphql-client";
import { graphql } from "../../src/gql";

const GET_QUESTIONS = graphql(`
  query getQuestions($categoryId: Int!) {
    questions(categoryId: $categoryId) {
      id
      content
      answers
      correctAnswer
    }
  }
`);

export default async function Page() {
  const res = await graphQLClient.request(GET_QUESTIONS, {
    categoryId: 3,
  });
  console.log(res);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
