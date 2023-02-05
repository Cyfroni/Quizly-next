import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  process.env.GRAPHQL_API_URL as string,
  {
    responseMiddleware: (res) => {
      console.log(">> Backend Call");
      if (res instanceof Error) {
        console.error(res.message);
        return;
      }
    },
  }
);
