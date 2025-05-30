import React, { useState, useEffect } from "react";
import Filters from "./filters";
import ProductTable from "./product-table";
import Pagination from "./pagination";
import useProducts from "../hooks/use-products";

const MAX_PRODUCTS_PER_PAGE = 4;

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    products,
    loading,
    error,
    totalCount,
    totalPages,
    filters,
    handleFilterChange,
  } = useProducts(currentPage, MAX_PRODUCTS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto p-5 font-sans">
      <div className="text-center mb-8 pb-5 border-b-2 border-gray-100">
        <h1 className="text-gray-800 text-4xl mb-3 font-bold">
          Product Collection
        </h1>
        <p className="text-gray-600 text-lg m-0">
          Browse and filter our products
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          productCount={totalCount}
        />

        <div className="flex-1 min-w-0 w-full max-w-md md:max-w-none mx-auto md:mx-0 flex flex-col items-center md:items-stretch">
          <div className="mb-5 p-4 bg-gray-50 rounded-lg w-full text-center md:text-left">
            {totalCount > 0 && (
              <p className="m-0 text-gray-700 font-medium">
                Showing {products.length} of {totalCount} products
                {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
              </p>
            )}
          </div>

          <ProductTable products={products} loading={loading} error={error} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
