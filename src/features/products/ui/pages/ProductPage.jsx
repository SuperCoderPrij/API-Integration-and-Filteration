import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const ProductPage = () => {
  let { data, isPending, search, setSearch } = useAllProduct();
  let {
    data: productsByCategory,
    category,
    setCategory,
  } = useProductByCategory();
  console.log("product category-->", productsByCategory);
  if (isPending) {
    return <h1>Loading products...</h1>;
  }
  return (
    <div>
      <ProductFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 py-10">
        {productsByCategory?.products.length
          ? productsByCategory?.products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : data.products?.map((val) => {
              return <ProductCard key={val.id} product={val} />;
            })}
      </div>
    </div>
  );
};

export default ProductPage;
