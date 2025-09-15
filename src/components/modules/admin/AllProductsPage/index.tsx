"use client";

import Link from "next/link";

export default function AllProductsPage() {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: "$60.00",
      image:
        "https://i0.wp.com/thetechnologyexpress.com/wp-content/uploads/2025/07/apple-iphone-17-design-leaks.jpg?fit=850%2C500&ssl=1",
      isSelected: false,
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      price: "$60.00",
      image:
        "https://i0.wp.com/thetechnologyexpress.com/wp-content/uploads/2025/07/apple-iphone-17-design-leaks.jpg?fit=850%2C500&ssl=1",
      isSelected: false,
    },
    {
      id: 3,
      name: "iPhone 14 Pro",
      price: "$60.00",
      image:
        "https://i0.wp.com/thetechnologyexpress.com/wp-content/uploads/2025/07/apple-iphone-17-design-leaks.jpg?fit=850%2C500&ssl=1",
      isSelected: true,
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      price: "$60.00",
      image:
        "https://i0.wp.com/thetechnologyexpress.com/wp-content/uploads/2025/07/apple-iphone-17-design-leaks.jpg?fit=850%2C500&ssl=1",
      isSelected: false,
    },
    {
      id: 5,
      name: "iPhone 14 Pro",
      price: "$60.00",
      image:
        "https://i0.wp.com/thetechnologyexpress.com/wp-content/uploads/2025/07/apple-iphone-17-design-leaks.jpg?fit=850%2C500&ssl=1",
      isSelected: false,
    },
    {
      id: 6,
      name: "iPhone 14 Pro",
      price: "$60.00",
      image:
        "https://i0.wp.com/thetechnologyexpress.com/wp-content/uploads/2025/07/apple-iphone-17-design-leaks.jpg?fit=850%2C500&ssl=1",
      isSelected: false,
    },
  ];

  const handleEdit = (id: number) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete product:", id);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/admin/products/create">
            <button className="flex items-center gap-2 px-4 py-2 bg-core-gradient text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Add Product
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white shadow-lg rounded-lg p-4`}
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product?.image || "/placeholder.svg"}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">{product?.name}</h3>
                <p className="text-gray-600">{product?.price}</p>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="px-4 py-2 bg-core-gradient text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-4 py-2 bg-sec-gradient text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
