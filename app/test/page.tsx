import { createQuery } from "../../lib/createQuery";
import { graphql } from "../../src/gql";
import Categories from "./Categories";

const getCategories = createQuery(
  graphql(`
    query getCategories {
      categories {
        id
        name
      }
    }
  `)
);

export default async function Page() {
  const categories = await getCategories();
  return (
    <div className="mx-10 mt-6 flex flex-1 flex-col">
      <Categories categories={categories.categories} />
    </div>
  );
}
