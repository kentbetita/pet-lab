import React from "react";

const Filters = ({ filters, onFilterChange, productCount }) => {
  const handleInputChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      tags: "",
      price: "",
      subscription: "",
    });
  };

  return (
    <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors border border-blue-200"
        >
          Clear All
        </button>
      </div>

      <div className="mb-6">
        <label
          htmlFor="tags-filter"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search Tags
        </label>
        <input
          id="tags-filter"
          type="text"
          placeholder="e.g., Dog, Cat, Chews..."
          value={filters.tags}
          onChange={(e) => handleInputChange("tags", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="price-filter"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Max Price ($)
        </label>
        <input
          id="price-filter"
          type="number"
          placeholder="e.g., 30"
          value={filters.price}
          onChange={(e) => handleInputChange("price", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          min="0"
          step="0.01"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Subscription Available
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="subscription"
              value=""
              checked={filters.subscription === ""}
              onChange={(e) =>
                handleInputChange("subscription", e.target.value)
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700">All</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="subscription"
              value="yes"
              checked={filters.subscription === "yes"}
              onChange={(e) =>
                handleInputChange("subscription", e.target.value)
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="subscription"
              value="no"
              checked={filters.subscription === "no"}
              onChange={(e) =>
                handleInputChange("subscription", e.target.value)
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700">No</span>
          </label>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="text-lg font-semibold text-gray-800">
          {productCount} products found
        </div>
      </div>
    </div>
  );
};

export default Filters;
