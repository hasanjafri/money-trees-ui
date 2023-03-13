import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import FeatImage01 from '../images/carousel1.png';
import FeatImage02 from '../images/carousel2.png';
import FeatImage03 from '../images/carousel3.png';
import FeatImage04 from '../images/carousel4.png';

const CarouselComponent = () => {
  return (
    <Carousel
      className="relative"
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      data-aos="fade-up"
    >
      <div className="relative">
        <img src={FeatImage01} alt="Feature 1" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white font-medium text-center">
          <p className="mb-3 text-lg">
            The best cash reward in the market, if not, we match the highest rate you find.
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={FeatImage02} alt="Feature 2" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white font-medium text-center">
          <p className="mb-3 text-lg">Every transaction gets awarded with green points or cash or both.</p>
        </div>
      </div>
      <div className="relative">
        <img src={FeatImage03} alt="Feature 3" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white font-medium text-center">
          <p className="mb-3 text-lg">Redeem your green balance for some personal good and planetary good.</p>
        </div>
      </div>
      <div className="relative">
        <img src={FeatImage04} alt="Feature 4" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white font-medium text-center">
          <p className="mb-3 text-lg">
            Find options that give higher cash and green balance based on location, price and category
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
