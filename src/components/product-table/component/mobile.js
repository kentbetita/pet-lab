import React from "react";
import { formatPrice } from "../../../utils";

const mobile = ({ products }) => {
  return (
    <div className="block md:hidden space-y-6 mb-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="card hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
        >
          <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={product.image_src}
              alt={product.title}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                if (!e.target.dataset.fallbackUsed) {
                  e.target.dataset.fallbackUsed = "true";
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='10' fill='%23999' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
                }
              }}
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-2">
                {product.title}
              </h3>
              <div className="font-semibold text-green-700 text-lg whitespace-nowrap">
                {formatPrice(product.price)}
              </div>
            </div>

            <div className="mb-3">
              <div className="text-gray-600 text-sm mb-1">{product.vendor}</div>
              <div className="text-gray-500 text-sm mb-1">
                {product.option_value}
              </div>
              <div className="text-gray-500 text-sm">SKU: {product.sku}</div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-3">
              <span
                className={`badge ${
                  product.subscription ? "badge-success" : "badge-warning"
                }`}
              >
                {product.subscription
                  ? "Subscription Available"
                  : "No Subscription"}
              </span>
              {product.subscription && product.subscription_discount && (
                <div className="text-orange-600 text-sm mt-2">
                  {product.subscription_discount}% off with subscription
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default mobile;
