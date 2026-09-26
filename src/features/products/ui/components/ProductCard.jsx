const ProductCard = ({ product }) => {
    console.log("card rendered")
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full w-full object-contain p-4"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm font-medium text-gray-500">{product?.brand}</p>

        {/* Title */}
        <h2 className="mt-1 truncate text-lg font-semibold text-gray-800">
          {product?.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">{product?.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${product?.price}
          </span>

          <span className="text-sm font-medium text-green-600">
            {product?.discountPercentage}% off
          </span>
        </div>

        {/* Add to Cart */}
        <button className="mt-4 w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
