import React, { useEffect, useState } from "react";
import Product from "./product";

function FilteredProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // ada görə filter
  const [sort, setSort] = useState(""); // qiymət sort
  const [category, setCategory] = useState("all"); // kateqoriya filter

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || data);
      });
  }, []);

  // Unikal kateqoriyalar (dropdown üçün)
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  // Filtrasiya edilmiş məhsullar
  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "all" ? true : p.category === category
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto p-6">
      {/* Filtrləmə paneli */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        {/* Ada görə filter */}
        <input
          type="text"
          placeholder="Məhsul adına görə axtar..."
          className="border px-4 py-2 rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Qiymətə görə sıralama */}
        <select
          className="price-filter border px-4 py-2 rounded w-full md:w-1/4"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option className="option" value="">Qiymət seç</option>
          <option className="option" value="asc">Ucuzdan bahalıya</option>
          <option className="option" value="desc">Bahalıdan ucuza</option>
        </select>

        {/* Kateqoriya seçimi */}
        <select
          className="category border px-4 py-2 rounded w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option className="category-option" key={idx} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Məhsul siyahısı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((pro) => (
            <Product key={pro.id} pro={pro} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Heç bir məhsul tapılmadı
          </p>
        )}
      </div>
    </div>
  );
}

export default FilteredProducts;