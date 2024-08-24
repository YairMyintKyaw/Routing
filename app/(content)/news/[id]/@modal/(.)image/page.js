"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function NewsImage({params}){
  const router = useRouter();
  const slug = params.id;
  const newsDetail = DUMMY_NEWS.find(news=>news.slug === slug);
  if(!newsDetail) {
    notFound();
  };

  return <>
    <div className="modal-backdrop" onClick={router.back}/>
    <dialog className="modal" open>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
      </div>
    </dialog>
  </>
}