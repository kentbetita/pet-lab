import { useState, useEffect, useCallback } from "react";

const DEBOUNCE_TIME = 500;
const DEFAULT_FILTERS = {
  tags: "",
  price: "",
  subscription: "",
};

const useProducts = (page = 1, limit = 4) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [debouncedFilters, setDebouncedFilters] = useState(DEFAULT_FILTERS);

  const fetchProducts = useCallback(
    async (searchFilters, currentPage, itemsPerPage) => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        params.append("_page", currentPage.toString());
        params.append("_limit", itemsPerPage.toString());

        if (searchFilters.tags && searchFilters.tags.trim()) {
          params.append("tags_like", searchFilters.tags.trim());
        }

        if (searchFilters.price && searchFilters.price.trim()) {
          params.append("price_lte", searchFilters.price.trim());
        }

        if (searchFilters.subscription && searchFilters.subscription.trim()) {
          const subscriptionValue =
            searchFilters.subscription.toLowerCase() === "yes";
          params.append("subscription", subscriptionValue);
        }

        const url = `http://localhost:3010/products?${params.toString()}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const totalCountHeader = response.headers.get("X-Total-Count");
        const total = totalCountHeader
          ? parseInt(totalCountHeader, 10)
          : data.length;

        setProducts(data);
        setTotalCount(total);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
        setProducts([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(filters);
    }, DEBOUNCE_TIME);

    return () => clearTimeout(timer);
  }, [filters]);

  useEffect(() => {
    fetchProducts(debouncedFilters, page, limit);
  }, [debouncedFilters, page, limit, fetchProducts]);

  return {
    products,
    loading,
    error,
    totalCount,
    totalPages: Math.ceil(totalCount / limit),
    filters,
    handleFilterChange,
    clearFilters,
    refetch: fetchProducts,
  };
};

export default useProducts;
