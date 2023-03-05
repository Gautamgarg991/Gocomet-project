import React from 'react';
import myntraImage from './homeImage.jpeg';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
       <img className='homeImage' src={myntraImage}></img>
       <div className='home__row'>
            <Product
            id="121"
            title="Highlanderr Man TShirt"
            price="499"
            rating={5}
            image="https://a.storyblok.com/f/165154/800x800/70e8f9cf61/sell-shirts.jpeg/m/filters:format(webp)"
            />
            <Product
            id="131"
            title="HRXX Man TShirt"
            price="799"
            rating={3}
            image="https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/engineer_doze_t-shirts_for_men_base_700x933.jpg"
            />
            <Product
            id="141"
            title="Man TShirt"
            price="1240"
            rating={1}
            image="https://m.media-amazon.com/images/I/71d+U6jwSCL._UX569_.jpg"
            />
            <Product
            id="151"
            title="Man TShirt"
            price="870"
            rating={2}
            image="https://img3.junaroad.com/uiproducts/17383344/pri_175_p-1604493918.jpg"
            />
            <Product
            id="121"
            title="Man TShirt"
            price="999"
            rating={5}
            image="https://getmahadevproducts.in/wp-content/webp-express/webp-images/uploads/2021/07/Trendy-Designer-Men-Tshirts-Tshirt-for-Men-Mahakal-Shiv-T-Shirt-2.jpg.webp"
            />
            <Product
            id="121"
            title="Man TShirt"
            price="1299"
            rating={3}
            image="https://n1.sdlcdn.com/imgs/k/h/i/230X258_sharpened/The-Million-Club-Cotton-Blend-SDL871246825-1-89fd4.jpg"
            />
            <Product
            id="121"
            title="Man TShirt"
            price="1100"
            rating={4}
            image="https://sslimages.shoppersstop.com/sys-master/images/h77/h62/28154387431454/AW22LFGRATEE142_RUST.jpg_230Wx334H"
            />
            <Product
            id="121"
            title="Man TShirt"
            price="1099"
            rating={5}
            image="https://assets.ajio.com/medias/sys_master/root/20220901/ARH5/6310ee67f997dd1f8dd3e3ee/eyebogler_teal_colour-blocked_polo_t-shirt.jpg"
            />
       </div>
    </div>
  );
}

export default Home;
