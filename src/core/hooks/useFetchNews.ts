import { getCards } from "../core/services/api/Blog";
import { useEffect, useState } from "react";
import { INews } from "../core/services/types/news.type";

const useFetchNews = ()=>{
    const [newsCards, setNewsCards] = useState<{news: INews[],totalCount:number}|null>();

    useEffect(() => {

      
      getCards().then((result)=>{

        setNewsCards(result)
        console.log(result);
      });

    }, []);
    return {newsCards}
}
export default useFetchNews