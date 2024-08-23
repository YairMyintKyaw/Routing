import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilterPage({params}){
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    
    let news;  
    const links = getAvailableNewsYears();
    
    if(selectedYear && !selectedMonth){ 
      news = getNewsForYear(selectedYear);
    }

    let newsContent = <p>No news found for the selected period.</p>

    if(news && news.length > 0){
      newsContent = <NewsList news={news}/>
      console.log(newsContent);
      
    }

    return <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link=><li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>)}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
}