import React, { useState, useEffect } from 'react';
import Loading from './components/LoadingPage';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Branding from './components/Branding';
import Message from './components/Message';
import Product from './components/WhyOurProduct';
import BestSellers from './components/BestSellingProducts';
import BrandMessage from './components/BrandMessage';
import ProductGrid from './components/ProductGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); // start fade-out
      setTimeout(() => {
        setShowLoading(false); // fully remove after fade
      }, 600); // match transition duration
    }, 4300); // when loading count finishes

    return () => clearTimeout(timer);
  }, []);

  return showLoading ? (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
<Loading onFinish={() => setShowLoading(false)} />
     </div>
  ) : (
    <>
      <Navbar />
      <LandingPage />
      <Branding />
      <Message />
      <Product />
      <BestSellers />
      <BrandMessage />
      <ProductGrid />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
