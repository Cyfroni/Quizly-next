import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  process.env.GRAPHQL_API_URL as string,
  {
    responseMiddleware: (res) => {
      console.log("call");
      if (res instanceof Error) {
        console.error(res.message);
        return;
      }

      console.log(res.data);
    },
  }
);
