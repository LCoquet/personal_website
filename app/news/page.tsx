'use client';

//imports
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ArticleCard article={{
        title: "Website is finally out!",
        description: "After months of procrastination, I finally decided to create my website. I hope I'll be able to add plenty of exciting content as often as possible!",
        date: "2025-06-21",
        link: "/news/new_website",
        image: "/articles_main/placeholder.png"
      }} />
      <ArticleCard article={{
        title: "ICDL 2025 - SMILES Workshop participation",
        description: "My first participation in an internation conference! I present my work at the SMILES workshop of ICDL 2025.",
        date: "2025-09-09",
        link: "/thesis/ICDL-2025-SMILES",
        image: "/ICDL-2025/ICDL-2025_logo.png"
      }} />
    </div>
  );
}
