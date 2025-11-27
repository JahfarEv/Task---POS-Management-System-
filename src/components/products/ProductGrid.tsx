import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import type { Product } from "../../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  itemsPerPage?: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  itemsPerPage = 16, 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Calculate visible products using useMemo for better performance
  const visibleProducts = useMemo(() => {
    return products.slice(0, currentPage * itemsPerPage);
  }, [products, currentPage, itemsPerPage]);

  // Check if there are more products to load
  const hasMore = useMemo(() => {
    return visibleProducts.length < products.length;
  }, [visibleProducts.length, products.length]);

  // Load more products
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      setCurrentPage((prev) => prev + 1);
      setIsLoading(false);
    }, 800);
  }, [isLoading, hasMore]);

  // Set up intersection observer
  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    observer.observe(loadMoreRef.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoading, loadMore]);

  // Reset when products change
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  return (
    <div className="w-[75%] bg-white p-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {/* Products Count */}
      {/* <div className="mb-3 px-2 text-sm text-gray-600">
        Showing {visibleProducts.length} of {products.length} products
      </div> */}

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-4 mx-2 my-2">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-8 space-y-3">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          <div className="text-gray-600 text-sm">Loading more products...</div>
          <div className="text-xs text-gray-400">
            {visibleProducts.length} of {products.length} loaded
          </div>
        </div>
      )}

      {/* Load More Trigger */}
      {hasMore && !isLoading && (
        <div
          ref={loadMoreRef}
          className="h-24 flex items-center justify-center border-t border-gray-100"
        >
          <div className="text-center">
            <div className="text-gray-500 text-sm font-medium">
              Scroll to load more
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {products.length - visibleProducts.length} more products available
            </div>
          </div>
        </div>
      )}

      {/* End of catalog */}
      {!hasMore && visibleProducts.length > 0 && (
        <div className="text-center py-8 border-t border-gray-200">
          <div className="text-green-600 font-semibold">
            🎉 All products loaded!
          </div>
          <div className="text-sm text-gray-500 mt-1">
            You've reached the end of the catalog
          </div>
        </div>
      )}

      {/* Empty state */}
      {visibleProducts.length === 0 && !isLoading && (
        <div className="text-center py-16">
          <div className="text-gray-400 text-4xl mb-4">📦</div>
          <div className="text-gray-500 font-medium text-lg">
            No products found
          </div>
          <div className="text-gray-400 text-sm mt-1">
            Try selecting a different category or check back later
          </div>
        </div>
      )}
    </div>
  );
};
