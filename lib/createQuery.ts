import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { graphQLClient } from "./graphql-client";

export const createQuery = <TResult, TVariables>(
  QGL: TypedDocumentNode<TResult, TVariables>
) => {
  return async (params?: TVariables): Promise<TResult> =>
    graphQLClient.request(QGL, params);
};
