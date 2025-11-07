import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const MyCarts = () => {
  const cartItems = [
    {
      id: 1,
      title: "Rock Night Festival Ticket",
      image:
        "https://i.pinimg.com/1200x/d3/ef/ce/d3efcef6e3aadf055dec62b50ac34f60.jpg",
      quantity: 2,
      price: 50,
    },
    {
      id: 2,
      title: "Jazz Evening VIP Pass",
      image:
        "https://i.pinimg.com/736x/64/4c/c4/644cc46b1456435a9cd79de0141ab304.jpg",
      quantity: 1,
      price: 80,
    },
    {
      id: 3,
      title: "Electronic Music Carnival",
      image:
        "https://i.pinimg.com/1200x/c2/0a/c2/c20ac2aec259641629bdd2e1722af158.jpg",
      quantity: 3,
      price: 40,
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8">My Cart</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-error btn-sm">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="flex justify-end mt-6">
          <h2 className="text-xl font-bold">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
