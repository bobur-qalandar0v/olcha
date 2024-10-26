import Compare from "../assets/icons/Compare";
import LikeButton from "../assets/icons/LikeButton";
import ShopCart from "../assets/icons/ShopCart";
import { ProductData } from "../constants/data";

function Product() {
  return (
    <section className="products">
      <div className="container">
        <section className="product">
          <div className="product__titles">
            <div className="product__left">
              <img
                src="https://olcha.uz/image/original/homePage/cdn_1/2024-09-25/yPK9ZG9IOHyOWK1RNBBOEzDxr4IRu1a2MVTTqkXpD11TQ0Revj6MM6ZN1fKO.png"
                alt="img"
              />
            </div>
            <div className="product__right">
              <img
                src="https://olcha.uz/image/original/homePage/cdn_1/2024-09-25/3Ho4d58DkZw7j04MGWqVuaGJTumtdn4mmxrBs2L0OggtjvsZMR8eWHe2VDRG.png"
                alt="img"
              />
            </div>
          </div>

          {/* PRODUCT CARDS */}
          <div className="product__cards">
            <div className="product__left-img">
              <img
                src="https://olcha.uz/image/original/homePage/cdn_1/2024-09-26/3ccqwvDB3AkPf2jYawsQ2GaVAXvLqbIZB1c70DlslVqGI3jYIDyg8xTsPi81.png"
                alt="img"
              />
            </div>
            <div className="product__card-right">
              <div className="product__card">
                {ProductData.map((item) => (
                  <div className="product__card-sale" key={item.id}>
                    <div className="product__card-img">
                      <img src={item.image} alt="img" />
                      <div className="product__card-buttons">
                        <button>
                          <LikeButton />
                        </button>
                        <button>
                          <Compare />
                        </button>
                      </div>
                    </div>
                    <div className="product__card-content">
                      <p className="content__title">{item.title}</p>
                      <div className="money">
                        <span className="first-child">{item.firstChild}</span>
                        <span className="other">{item.other}</span>
                      </div>
                      <div className="product__buttons">
                        <button className="shopcart">
                          <ShopCart />
                        </button>
                        <button className="payment">Muddatli to'lov</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Product;
