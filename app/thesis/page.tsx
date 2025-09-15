'use client';

//imports
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <div>
      My thesis work is about the canary's language learning.
      Canary, as for many other oscine birds, learns its song by imitating adult tutors. The young bird has to listen to the tutor's song, memorize it, and then practice to reproduce it. 
      My current work is to take inspiration from this learning process and knowledge on avian brain to develop a language learning model.
      <h2 className='text-5xl font-bold mb-6 mt-6'>Thesis news</h2>
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
