import  Link  from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>Return News Page</h1>
      <ul>
        <li><Link href='/news/nexsdsd'>NextJS is Awesome</Link></li>
        <li><a>React is Awesome</a></li>
      </ul>
    </>
  );
};

export default NewsPage;
