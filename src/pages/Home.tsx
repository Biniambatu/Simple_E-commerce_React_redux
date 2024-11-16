import { ProductCard } from "../components"
export const Home = () => {
  const products = [
      {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "assets/apple.jpg"},
      {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "assets/dell.jpg"},
      {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "assets/toshiba.jpg"},
      {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "assets/images/sony.jpg"},
      {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "assets/samsung.jpg"},
      {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "assets/images/lg.jpg"}
    ]
  return (
    
    <main>
      <section className="products">
        { products.map((product) => (
           <ProductCard key={product.id} product={product} />
        )) }   
      </section>
    </main>
  )
}

