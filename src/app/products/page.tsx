import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/product";
import { Product } from "../types";

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="rounded-md w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
