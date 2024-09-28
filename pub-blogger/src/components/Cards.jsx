import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();

  function handleDetail(id) {
    navigate(`/detail/${id}`);
  }
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-200 hover:grayscale-0 transition-all duration-300 grayscale p-4">
        <img
          className="w-full h-48 object-cover"
          src={product.imgUrl}
          alt="Laptop"
        />
        <div className="py-4">
          <span className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {product.Category.name}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mt-2">
            {product.title}
          </h3>
          <p className="text-gray-700 text-sm mt-2">{product.content}</p>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full"
              src="https://via.placeholder.com/40"
              alt="User"
            />
            <div className="ml-3 ">
              <p className="text-gray-900 font-semibold text-sm">Jane Doe</p>
              <p className="text-gray-500 text-xs">2h ago</p>
            </div>
          </div>
          <div className="flex justify-end w-1/2">
            <button
              className="btn btn-outline"
              onClick={() => handleDetail(product.id)}>
              Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
