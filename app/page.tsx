import Image from "next/image";
import ContentBlock from "@/components/frontend/ContentBlock";
import PopularCategories from "@/components/frontend/PopularCategories";

export default function Home() {
  return (
    <main className='flex w-full min-h-screen bg-black flex-col'>
      <PopularCategories />
      <ContentBlock />
    </main>
  );
}
