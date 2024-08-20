import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetail({params}){
  const slug = params.id;
  const newsDetail = DUMMY_NEWS.find(news=>news.slug === slug);
  if(!newsDetail) {
    notFound();
  };
  return <article className="news-article">
    <header>
      <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
      <h1>{newsDetail.title}</h1>
      <time datetime={newsDetail.date}>{newsDetail.date}</time>
    </header>
    <p>{newsDetail.content}</p>
  </article>
}