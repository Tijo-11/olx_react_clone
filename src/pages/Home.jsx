import Banner from '../components/Banner';
import SellCard from '../components/SellCard';
import PromoCard from '../components/PromoCard';

function Home() {
  const getRandomIndex = () => Math.floor(Math.random() * 12);
  const promoIndex = getRandomIndex();

  const cards = Array.from({ length: 12 }).map((_, index) =>
    index === promoIndex ? <PromoCard key="promo" /> : <SellCard key={index} />
  );

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <Banner />
      <h1 className="text-2xl font-bold mt-6">Welcome to OLX India</h1>
      <p className="mt-4 text-gray-600">Browse listings for bikes, properties, jobs, and cars.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {cards.slice(0, promoIndex - (promoIndex % 4) + 1)}
        {cards.slice(promoIndex - (promoIndex % 4) + 1)}
        {promoIndex % 4 !== 3 && <div className="col-span-3 lg:col-span-3"></div>}
        
      </div>
    </div>
  );
}

export default Home;