'use client';

//imports
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <div>
      <ArticleCard article={{
        title: "Website is finaly out!",
        description: "After months of procrastination, I finally decided to create my website. I hope I'll be able to add plenty of exciting content as often as possible!",
        date: "2023-10-01",
        link: "/news/new_website",
        image: "/articles_main/website_news.png"
      }} />
    </div>
  );
}
