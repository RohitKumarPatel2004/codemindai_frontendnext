import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Rohit Sharma", email: "rohit@example.com", role: "User" },
  { id: 2, name: "Anjali Verma", email: "anjali@example.com", role: "User" },
  { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin" },
];

const AdminUsers = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Admin - Users Management | CodemindAI</title>
        <meta name="description" content="Admin Users Management" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Users Management</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminUsers;
