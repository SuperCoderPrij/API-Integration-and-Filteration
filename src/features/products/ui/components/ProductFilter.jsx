import { useAllCategories } from "../../hooks/useProductHooks";

const ProductFilter = ({ search, setSearch, category, setCategory }) => {
  let { data, isPending } = useAllCategories();
  console.log(data);
  if (isPending) return <h1>Loading Categories...</h1>;

  return (
    <div className="mb-6 flex items-center justify-between text-white gap-4">
      {/* Search */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border-2 border-white px-4 py-2.5 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category */}
      <div>
        <select
        //   value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg bg-yellow-600 text-white font-semibold px-4 py-2.5 outline-none cursor-pointer"
        >
          <option value="all">All Categories</option>

          {data.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
