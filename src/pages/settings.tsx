import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleUpdateSettings = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to update settings
    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
      emailNotifications,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Settings - CodemindAI</title>
        <meta name="description" content="Update your settings on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Settings</h2>
          <form onSubmit={handleUpdateSettings} className="space-y-4">
            {/* Password Change */}
            <div>
              <label className="block text-gray-700 mb-1">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Current password"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="New password"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Confirm new password"
              />
            </div>

            {/* Notification Preferences */}
            <div className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="text-gray-700">Enable email notifications</label>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium mt-4"
            >
              Update Settings
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;
