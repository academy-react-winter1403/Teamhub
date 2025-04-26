import { INews } from "../../../../core/services/types/news.type"
import BlogCard from "../BlogCard"
interface BlogCardWrapperProps {
  blogState: {
    news: INews[];
  };
}

const BlogCardWrapper = ({blogState}: BlogCardWrapperProps) => {
  return (
    <div className="flex justify-around flex-row flex-wrap gap-8 py-10">
      {
        blogState.news.map((newsItem, index) => (
          <BlogCard 
            key = {index}
            title = {newsItem.title}
            currentView = {newsItem.currentView}
            insertDate = {newsItem.insertDate}
            miniDescribe = {newsItem.miniDescribe}
            currentImageAddressTumb = {newsItem.currentImageAddressTumb}
            id = {newsItem.id}
          />
        ))
      }


    </div>  
  )
}

export {BlogCardWrapper}