import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase
        .from("LostFound")
        .select("*");

      console.log("Supabase data:", data);
      console.log("Supabase error:", error);

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setItems(data || []);
      }

      setLoading(false);
    }

    fetchItems();
  }, []);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto p-6 text-center text-gray-400">
        <p>Loading products...</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">
          Available Products
        </h1>

        <p className="text-sm text-gray-400">
          Browse all gear and components.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {items.map((item) => (
          <div
            key={item.product_id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between"
          >

            {/* IMAGE */}
            <div className="h-48 bg-gray-100">
              <img
                src={item.img_url}
                alt={item.product_name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* PRODUCT INFO */}
            <div className="p-4">

              <p className="text-xs text-blue-600 font-medium mb-2">
                Product ID: {item.product_id}
              </p>

              <h2 className="font-semibold text-gray-900 text-lg">
                {item.product_name}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Contact: {item.user_phno}
              </p>

              {/* VIEW BUTTON */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to={`/item/${item.product_id}`}
                  className="flex items-center justify-end gap-1 text-sm font-medium text-blue-600 hover:underline"
                >
                  View
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* NO PRODUCTS */}
      {items.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No products found.
        </div>
      )}

    </main>
  );
}