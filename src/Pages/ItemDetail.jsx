import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';// Adjust path if your teammate places it elsewhere

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      // Query the single row matching the ID parameter from the URL
      const { data, error } = await supabase
        .from('LostFound')              //change tablename accordingly
        .select('*')
        .eq('id', id)
        .single();

      if (!error && data) {
        setItem(data);
      }
      setLoading(false);
    }

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <main className="max-w-xl mx-auto text-center py-20 px-4 text-gray-500">
        <p>Loading details...</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="max-w-xl mx-auto text-center py-20 px-4">
        <h2 className="text-xl font-bold text-gray-900">Item Not Found</h2>
        <p className="text-gray-500 text-sm mt-1">No matching product was located.</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            <Tag className="w-3.5 h-3.5" />
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-amber-500 text-sm font-bold">
            <Star className="w-4 h-4 fill-amber-500" />
            {item.rating} / 5.0
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mt-4">{item.name}</h1>
        <p className="text-2xl font-extrabold text-gray-900 mt-2">{item.price}</p>
        <p className="text-gray-600 text-base leading-relaxed mt-4">{item.description}</p>

        <button
          type="button"
          className="mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}