import { ProductsGrid } from "./ProductsGrid/ProductsGrid";
import { ShopSidebar } from "./ShopSidebar/ShopSidebar";


export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumb and Results Header */}
      <div className="bg-black max-w-7xl mx-auto px-4 md:px-8 py-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Home</span>
            <span className="text-gray-400">{">"}</span>
            <span className="text-white">Shop</span>
          </div>

          {/* Results and Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-sm text-gray-400">
              Showing 1-12 of 80 results
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition-colors">
                New arrival
              </button>
              <button className="px-4 py-2 border border-gray-600 text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
                Best selling
              </button>
              <button className="px-4 py-2 border border-gray-600 text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
                Featured
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <ShopSidebar />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <ProductsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
