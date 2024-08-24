import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsImage({params}){
  const slug = params.id;
  const newsDetail = DUMMY_NEWS.find(news=>news.slug === slug);
  if(!newsDetail) {
    notFound();
  };

  return <div className="fullscreen-image">
    <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
  </div>
}