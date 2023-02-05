import { useQuestionsByCategory } from "../../../../lib/queries";

export default async function Layout({
  params,
  children,
}: {
  params: { categories: string; question: string };
  children: React.ReactNode;
}) {
  const categories = params.categories.split("-");
  const categoryId = parseInt(categories[0]);
  const questions = await useQuestionsByCategory({
    categoryId,
  });

  // console.log(questions);
  console.log("layout");

  return (
    <div>
      <h1 className="block border-b p-2 text-3xl">
        Question: {params.question}/{questions.questions.length}
      </h1>
      {children}
    </div>
  );
}
