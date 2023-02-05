"use client";

import React, { useContext } from "react";
import { Question } from "../../../../src/gql/graphql";

const QuestionContext = React.createContext<Question[]>([]);

export function QuestionProvider({
  value,
  children,
}: {
  value: Question[];
  children: React.ReactNode;
}) {
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export const useQuestion = (ind: number) => {
  return useContext(QuestionContext)[ind];
};
