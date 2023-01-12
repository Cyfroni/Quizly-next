/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['Int'];
  likes: Scalars['Int'];
  suggestedAnswer?: Maybe<Scalars['Int']>;
  user: User;
};

export type DeleteComment = {
  id: Scalars['Int'];
};

export type LoginForm = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ModifyCommentForm = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  suggestedAnswer?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Comment;
  deleteComment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Tokens;
  modifyComment: Comment;
  refreshTokens: Tokens;
  signup: User;
};


export type MutationAddCommentArgs = {
  input: NewComment;
};


export type MutationDeleteCommentArgs = {
  input: DeleteComment;
};


export type MutationLoginArgs = {
  input: LoginForm;
};


export type MutationModifyCommentArgs = {
  input: ModifyCommentForm;
};


export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignupArgs = {
  input: NewUser;
};

export type NewComment = {
  content: Scalars['String'];
  question: Scalars['Int'];
  suggestedAnswer?: InputMaybe<Scalars['Int']>;
};

export type NewUser = {
  nickname: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  comments: Array<Comment>;
  questions: Array<Question>;
};


export type QueryCommentsArgs = {
  questionId: Scalars['Int'];
};


export type QueryQuestionsArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Scalars['String']>;
  category?: Maybe<Category>;
  content: Scalars['String'];
  correctAnswer?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  /** Not used yet */
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  nickname: Scalars['String'];
  username: Scalars['String'];
};

export type GetQuestionsQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: Array<{ __typename?: 'Question', id: number, content: string, answers: Array<string>, correctAnswer?: number | null }> };


export const GetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"answers"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswer"}}]}}]}}]} as unknown as DocumentNode<GetQuestionsQuery, GetQuestionsQueryVariables>;