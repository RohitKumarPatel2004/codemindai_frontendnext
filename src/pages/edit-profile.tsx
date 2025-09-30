import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditProfile = () => {
  const [name, setName] = useState("Rohit Sharma");
  const [email, setEmail] = useState("rohit@example.com");
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to update profile
    console.log("Name:", name, "Email:", email, "Avatar:", avatar);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Edit Profile - CodemindAI</title>
        <meta name="description" content="Edit your profile on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Profile</h2>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Avatar</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="w-full text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            >
              Update Profile
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfile;
