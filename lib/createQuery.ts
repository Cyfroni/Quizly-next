"server-only";

import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { cache } from "react";
import { graphQLClient } from "./graphql-client";

export const createQuery = <TResult, TVariables>(
  QGL: TypedDocumentNode<TResult, TVariables>
) => {
  return cache(
    async (params?: TVariables): Promise<TResult> =>
      graphQLClient.request(QGL, params)
  );
  // return async (params?: TVariables): Promise<TResult> =>
  //   graphQLClient.request(QGL, params);
};
