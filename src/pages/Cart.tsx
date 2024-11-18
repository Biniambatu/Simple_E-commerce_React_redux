import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"
export const Cart = () => {
  useTitle("Cart")
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "assets/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "assets/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "assets/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "assets/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "assets/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "assets/1006.png"}
  ]
  return (
    <main>
      <section className="cartcard">
        <h1>Cart Items: {products.length} </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}

