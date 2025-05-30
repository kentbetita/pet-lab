import React from "react";
import { formatPrice } from "../../../utils";

const desktop = ({ products }) => {
  return (
    <div className="hidden md:block rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="p-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Image
            </th>
            <th className="p-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Product
            </th>
            <th className="p-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Tags
            </th>
            <th className="p-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Price
            </th>
            <th className="p-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Subscription
            </th>
            <th className="p-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              SKU
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 border-b border-gray-200">
                <img
                  loading="lazy"
                  src={product.image_src}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </td>
              <td className="p-4 border-b border-gray-200">
                <div className="font-semibold text-gray-900 mb-1">
                  {product.title}
                </div>
                <div className="text-gray-600 text-sm mb-1">
                  {product.vendor}
                </div>
                <div className="text-gray-500 text-xs">
                  {product.option_value}
                </div>
              </td>
              <td className="p-4 border-b border-gray-200">
                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4 border-b border-gray-200">
                <div className="font-semibold text-green-700 text-lg">
                  {formatPrice(product.price)}
                </div>
                {product.subscription && product.subscription_discount && (
                  <div className="text-orange-600 text-xs mt-1">
                    {product.subscription_discount}% off with subscription
                  </div>
                )}
              </td>
              <td className="p-4 border-b border-gray-200">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.subscription ? "badge-success" : "badge-warning"
                  }`}
                >
                  {product.subscription ? "Available" : "Not Available"}
                </span>
              </td>
              <td className="p-4 border-b border-gray-200 text-gray-600">
                {product.sku}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default desktop;
