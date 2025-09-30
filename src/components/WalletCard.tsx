type Transaction = {
  id: number;
  type: string;
  amount: number;
  date: string;
};

const WalletCard = ({
  balance,
  transactions,
}: {
  balance: number;
  transactions: Transaction[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Current Balance</h2>
        <p className="text-3xl font-bold text-indigo-600">₹{balance}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{tx.type}</td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-semibold ${
                      tx.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
