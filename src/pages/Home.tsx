import { ProductCard } from "../components";

export const products = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: "assets/1001.png",
    description: "It is a website of Video Game Discovery that can insert , update delete and also modify contents(cards) by using React JS framework."
  },
  { 
    id: 2, 
    name: "boAt Rockerz 450", 
    price: 49, 
    image: "assets/1002.png",
    description: "It is a website of Video Game Discovery that can insert , update delete and also modify contents(cards) by using React JS framework." 
  },
  { 
    id: 3, 
    name: "JBL Tune 760NC", 
    price: 179, 
    image: "assets/1003.png",
    description: "It is a website of Video Game Discovery that can insert , update delete and also modify contents(cards) by using React JS framework." 
  },
  { 
    id: 4, 
    name: "Logitech H111 Wired", 
    price: 39, 
    image: "assets/1004.png",
    description: "It is a website of Video Game Discovery that can insert , update delete and also modify contents(cards) by using React JS framework." 
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: "assets/1005.png",
    description: "It is a website of Video Game Discovery that can insert , update delete and also modify contents(cards) by using React JS framework."
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
    image: "assets/1006.png",
    description: "It is a website of Video Game Discovery that can insert , update delete and also modify contents(cards) by using React JS framework."
  },
];
export const Home = () => {
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
