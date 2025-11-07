import React from "react";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      date: "Nov 1, 2025",
      transactionId: "TXN123456",
      amount: 150,
      method: "Credit Card",
      status: "Completed",
    },
    {
      id: 2,
      date: "Nov 5, 2025",
      transactionId: "TXN123457",
      amount: 80,
      method: "PayPal",
      status: "Pending",
    },
    {
      id: 3,
      date: "Nov 10, 2025",
      transactionId: "TXN123458",
      amount: 200,
      method: "Stripe",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-8 font-sans">
      <Helmet>
        <title>User | Payment History</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Payment History</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <th>{index + 1}</th>
                <td>{payment.date}</td>
                <td>{payment.transactionId}</td>
                <td>${payment.amount}</td>
                <td>{payment.method}</td>
                <td>
                  <span
                    className={`${
                      payment.status === "Completed"
                        ? "text-green-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
