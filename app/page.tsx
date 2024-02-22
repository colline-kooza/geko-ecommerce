import Categories from "@/components/frontend/Categories";
import CategoryHead from "@/components/frontend/CategoryHead";
import ContentBlock from "@/components/frontend/ContentBlock";
import PopularCategories from "@/components/frontend/PopularCategories";
import RecentlyViewed from "@/components/frontend/RecentlyViewed";
import getData from "@/utils/getData";

export default async function Home() {
  const [categories, products ] = await Promise.all([
    getData("category"),
    getData("products")
  ]);
const allCategories = await getData("category")
  return (
    <main className='flex w-full min-h-screen bg-black flex-col'>
      <CategoryHead categories={categories} title="Make it personal—shop custom gifts, decor, and on-sale finds now!"/>
      <RecentlyViewed title="Recently viewed & more"  products={ products }/>
      <Categories categories={allCategories}/>
      <PopularCategories products={products}/>
      <ContentBlock />
    </main>
  );
}
