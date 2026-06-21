function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category.key}
          className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;