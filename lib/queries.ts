"server-only";

import { graphql } from "../src/gql";
import { createQuery } from "./createQuery";

export const useQuestionsByCategory = createQuery(
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
