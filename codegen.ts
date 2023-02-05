import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_API_URL,
  documents: ["app/**/*.tsx", "lib/queries.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  errorsOnly: true,
};
export default config;
