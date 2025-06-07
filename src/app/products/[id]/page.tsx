import { products } from "@/app/lib/product";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={800}
        height={500}
        className="rounded-md w-full h-64 object-cover mb-4"
      />
      <p className="text-lg font-medium text-gray-700">{product.description}</p>
      <p className="mt-4 text-gray-600">{product.details}</p>
    </main>
  );
}
