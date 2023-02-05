import { useQuestionsByCategory } from "../../../lib/queries";
import { QuestionProvider } from "./QuestionContext";

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

  return (
    <QuestionProvider value={questions.questions}>{children}</QuestionProvider>
  );
}
