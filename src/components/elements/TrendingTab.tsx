import SwiperCore, { Navigation } from 'swiper';
import SingleProduct from '../ecommerce/SingleProduct';

SwiperCore.use([Navigation]);

export interface ITrendingTab {
  products?: any[];
}

const TrendingTab = ({ products }: ITrendingTab) => {
  const showItem = 8;
  return (
    <>
      {products.slice(0, showItem).map((product, i) => (
        <div className='col-lg-3 col-md-4 col-12 col-sm-6' key={i}>
          <SingleProduct product={product} />
        </div>
      ))}
    </>
  );
};

export default TrendingTab;