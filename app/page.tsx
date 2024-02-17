import Categories from "@/components/frontend/Categories";
import ContentBlock from "@/components/frontend/ContentBlock";
import PopularCategories from "@/components/frontend/PopularCategories";
import RecentlyViewed from "@/components/frontend/RecentlyViewed";

export default function Home() {
  return (
    <main className='flex w-full min-h-screen bg-black flex-col'>
      <RecentlyViewed />
      <Categories />
      <PopularCategories />
      <ContentBlock />
    </main>
  );
}
