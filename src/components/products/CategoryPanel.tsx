import React from "react";

interface CategoryPanelProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategoryPanel: React.FC<CategoryPanelProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="w-[35%] bg-white border-r p-2 overflow-y-auto">
      {/* Header */}

      {/* Categories Grid - 2 columns */}
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`p-3 text-sm font-bold uppercase rounded border-2 transition-all
            ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-700 shadow-md"
                : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
            }
            flex items-center justify-center text-center h-16`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
