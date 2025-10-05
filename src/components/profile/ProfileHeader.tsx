"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProfileHeader({ user }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-[#6A5AE0] to-[#8B5CF6] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-lg"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <Image
          src={user.avatar}
          alt={user.name}
          width={80}
          height={80}
          className="rounded-full border-4 border-white"
        />
        <div>
          <h2 className="text-2xl font-semibold text-white">{user.name}</h2>
          <p className="text-white/80">{user.username}</p>
          <p className="text-white/90 mt-1">{user.bio}</p>
        </div>
      </div>

      <div className="flex gap-3 mt-4 md:mt-0">
        <Button className="bg-white text-[#6A5AE0] hover:bg-gray-100 font-semibold transition-all">
          Edit Profile
        </Button>
        <Button className="bg-[#5B4EE4] hover:bg-[#5143d9] text-white font-semibold transition-all">
          Settings
        </Button>
      </div>
    </motion.div>
  );
}
