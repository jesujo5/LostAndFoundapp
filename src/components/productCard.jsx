import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">

      {/* IMAGE */}
      <div className="h-48 bg-gray-100">
        <img
          src={item.img_url}
          alt={item.product_name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600">
            Product #{item.product_id}
          </span>

          <Star
            size={18}
            className="text-orange-500 fill-orange-500"
          />
        </div>

        <h2 className="text-lg font-bold text-gray-900">
          {item.product_name}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Contact: {item.user_phno}
        </p>

        <Link
          to={`/item/${item.product_id}`}
          className="mt-4 flex items-center justify-end gap-2 text-blue-600 font-medium"
        >
          View
          <ArrowRight size={18} />
        </Link>

      </div>
    </div>
  );
}