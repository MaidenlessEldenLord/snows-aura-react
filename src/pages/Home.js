import { ProductCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Home = () => {
    useTitle("Home"); 

    const products = [
    {"id": 1, "name": "Blueberry Cheesecake Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Blueberry-Cheesecake-Large-3-Wick-Candle.webp"},
    {"id": 2, "name": "Honeysuckle & Green Apple Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Honeysuckle-Green-Apple-Large-3-Wick-Candle.webp"},
    {"id": 3, "name": "Lavender Twilight Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Lavender-Twilight-Large-3-Wick-Candle.webp"},
    {"id": 4, "name": "Lemon Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Lemon-Large-3-Wick-Candle_1445x.webp"},
    {"id": 5, "name": "Maple Butter Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Maple-Butter-Large-3-Wick-Candle.webp"},
    {"id": 6, "name": "Minted Eucalyptus Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Minted-Eucalyptus-Large-3-Wick-Candle.webp"},
    {"id": 7, "name": "Orange Blossom Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Orange-Blossom-Large-3-Wick-Candle.webp"},
    {"id": 8, "name": "Pineapple Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Pineapple-Large-3-Wick-Candle_1445x.webp"},
    {"id": 9, "name": "Vanilla Bean Large 3 Wick Candle", "price": 13.99, "image": "/assets/images/Vanilla-Bean-Large-3-Wick-Candle.webp"}
    ]

  return (
    <main>
        <section className="scale-90 flex justify-start flex-wrap other:justify-evenly ml-10">
            { products.map((product) => (
                <ProductCard key={product.id} product={product} />
            )) }
        </section>
    </main>
  )
}