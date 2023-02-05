import { getCategories } from "../../lib/queries";
import Categories from "./Categories";

export default async function Page() {
  const categories = await getCategories();
  return (
    <div className="mx-10 mt-6 flex flex-1 flex-col">
      <Categories categories={categories.categories} />
    </div>
  );
}
