import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetail({params}){
  const slug = params.id;
  const newsDetail = DUMMY_NEWS.find(news=>news.slug === slug);
  if(!newsDetail) {
    notFound();
  };
  return <article className="news-article">
    <header>
      <Link href={`/news/${newsDetail.slug}/image`}>
        <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
      </Link>
      <h1>{newsDetail.title}</h1>
      <time datetime={newsDetail.date}>{newsDetail.date}</time>
    </header>
    <p>{newsDetail.content}</p>
  </article>
}