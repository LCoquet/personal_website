'use client';

//imports
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <div>
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
