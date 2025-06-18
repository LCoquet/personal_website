'use client';

//imports
import TopMenu from "./components/TopMenu";
import TempFiller from "./components/TempFiller";

export default function Home() {
  return (
    <div>
      <TopMenu />
      <h1 className="text-7xl font-bold text-center mt-20">Léo COQUET</h1>
      <TempFiller></TempFiller>
    </div>
  );
}
