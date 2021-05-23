import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request and fetch the items for the news Id

  return <h1>Detail Page</h1>;
};

export default DetailPage;
