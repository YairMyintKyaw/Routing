import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPgae({params}){
    const filterNews = getNewsForYear(params.year);
    return <NewsList news={filterNews}/>
}