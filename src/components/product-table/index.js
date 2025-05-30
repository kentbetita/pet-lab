import React from "react";
import Mobile from "./component/mobile";
import Desktop from "./component/desktop";

const ProductTable = ({ products, loading, error }) => {
  if (error) {
    return (
      <div className="w-full overflow-x-auto">
        <div className="text-center p-8 text-red-600 bg-red-50 border border-red-200 rounded-lg my-4">
          <p>Error loading products: {error}</p>
          <p>Please make sure the server is running on http://localhost:3010</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full overflow-x-auto">
        <div className="flex items-center justify-center gap-2 p-12 text-gray-600">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span>Loading products...</span>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full overflow-x-auto">
        <div className="text-center p-12 text-gray-600 text-lg">
          <p>No products found matching your filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      {/* Desktop Table View */}
      <Desktop products={products} />

      {/* Mobile Card View */}
      <Mobile products={products} />
    </div>
  );
};

export default ProductTable;
