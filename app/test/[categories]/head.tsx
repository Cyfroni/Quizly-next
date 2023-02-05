import { getQuestionsByCategory } from "../../../lib/queries";

export default async function Head({
  params,
}: {
  params: { categories: string };
}) {
  const categories = params.categories.split("-");
  // TODO: should filter by all categories
  const categoryId = parseInt(categories[0]);
  // const questions = await getQuestionsByCategory({
  //   categoryId,
  // });
  const questions = await getQuestionsByCategory(categoryId);

  return (
    <>
      <title>Quizly</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Learn exam questions with ease" />
      <link rel="icon" href="/quizly-logo-small.svg" />
    </>
  );
}
