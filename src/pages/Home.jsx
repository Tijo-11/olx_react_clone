import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import SellCard from '../components/SellCard';
import PromoCard from '../components/PromoCard';
import LoadMore from '../components/LoadMore';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';


function Home() {
  const [cardSets, setCardSets] = useState([generateCardSet()]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  function generateCardSet() {
    const getRandomIndex = () => Math.floor(Math.random() * 12);
    const promoIndex = getRandomIndex();
    return Array.from({ length: 12 }).map((_, index) =>
      index === promoIndex ? <PromoCard key={`promo-${Math.random()}`} /> : <SellCard key={index} />
    );
  }

  const handleLoadMore = () => {
    setCardSets([...cardSets, generateCardSet()]);
    setShowBackToTop(true);
  };

  const handleBackToTopClick = () => {
    setShowBackToTop(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <Banner />
      <h1 className="text-2xl font-bold mt-6">Welcome to OLX India</h1>
      <p className="mt-4 text-gray-600">Browse listings for bikes, properties, jobs, and cars.</p>
      {cardSets.map((cards, setIndex) => (
        <div key={setIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {cards}
        </div>
      ))}
      <BackToTop isVisible={showBackToTop && cardSets.length > 1} onClick={handleBackToTopClick} />
      <br/>
      <LoadMore onLoadMore={handleLoadMore} />
      <br/>
      <br/>
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;