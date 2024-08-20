import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news"

export default function LatestSlot(){
  const latestNews = getLatestNews();
  return <>
    <h2>Latest News Slot</h2>
    <NewsList news={latestNews}/>
  </>
}