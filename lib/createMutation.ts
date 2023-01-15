import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { graphQLClient } from "./graphql-client";

const useMutation = <TVariables, TResult>(
  fun: (params: TVariables) => TResult
) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  async function mutate(params: TVariables) {
    setIsFetching(true);
    // Mutate external data source
    const result = await fun(params);
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });

    return result;
  }
  return [mutate, { isMutating, isFetching, isPending }] as const;
};

export const createMutation = <TResult, TVariables>(
  QGL: TypedDocumentNode<TResult, TVariables>
) => {
  return () =>
    useMutation(
      async (params?: TVariables): Promise<TResult> =>
        graphQLClient.request(QGL, params)
    );
};
