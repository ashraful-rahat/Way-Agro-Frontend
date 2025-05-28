import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../product";
import ClientWrapper from "./ClientWrapper";
import Link from "next/link";

interface Params {
  params: {
    productDetails: string;
  };
}

export default async function ProductDetailsPage({ params }: Params) {
  // Debug logging
  console.log("Params:", params);
  console.log("Products:", products);

  const product = products.find((p) => p.id === params.productDetails);

  if (!product) return notFound();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-[400px] sm:h-[500px] rounded-2xl bg-gray-200 animate-pulse mb-10" />
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="h-8 w-1/2 bg-gray-200 rounded-lg animate-pulse mb-4" />
                  <div className="h-24 w-full bg-gray-200 rounded-lg animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
                </div>
              </div>
              <div className="mt-4 w-full max-w-xs h-12 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-10">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h1 className="absolute bottom-6 left-6 text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              {product.title}
            </h1>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Details */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Product Details
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.details}
                </p>
              </div>

              {/* Actions */}
              <ClientWrapper productId={product.id} />
            </div>
            {/* Back Button */}
            <Link
              href="/products"
              className="mt-4 flex items-center justify-center w-full max-w-xs py-3 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}