"server-only";

import { cache } from "react";
import { graphql } from "../src/gql";
import { createQuery } from "./createQuery";
import { graphQLClient } from "./graphql-client";

// export const getQuestionsByCategory = createQuery(
//   graphql(`
//     query getQuestions($categoryId: Int!) {
//       questions(categoryId: $categoryId) {
//         id
//         content
//         answers
//         correctAnswer
//       }
//     }
//   `)
// );

export const getQuestionsByCategory = cache((categoryId: number) =>
  graphQLClient.request(
    graphql(`
      query getQuestions($categoryId: Int!) {
        questions(categoryId: $categoryId) {
          id
          content
          answers
          correctAnswer
        }
      }
    `),
    { categoryId }
  )
);
