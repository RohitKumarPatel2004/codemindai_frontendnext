export const userProfile = {
  name: "Alex Chen",
  username: "@alexchen_dev",
  bio: "Passionate coder | Solved 500+ problems | Full stack developer",
  avatar: "/images/avatar1.png",
  stats: {
    solved: 524,
    contests: 1847,
    accuracy: 87.3,
    streak: 45,
    total: 1247,
  },
};

export const problemCategories = [
  { label: "Easy Problems", value: 180, total: 200, color: "#22C55E" }, // green-500
  { label: "Medium Problems", value: 250, total: 400, color: "#F97316" }, // orange-500
  { label: "Hard Problems", value: 94, total: 300, color: "#EF4444" }, // red-500
];


export const friends = [
  { name: "Sarah Kim", avatar: "/images/avatar2.png" },
  { name: "Mike Johnson", avatar: "/images/avatar3.png" },
  { name: "Emma Davis", avatar: "/images/avatar4.png" },
  { name: "Kevin Lee", avatar: "/images/avatar5.png" },
];

export const leaderboard = [
  { name: "Mike Johnson", points: 1867 },
  { name: "Alex Chen", points: 1820 },
  { name: "Emma Davis", points: 1760 },
  { name: "Sarah Kim", points: 1654 },
];

export const activities = [
  {
    title: "Two Sum",
    category: "Array, Hash Table",
    status: "Accepted",
    time: "2 hours ago",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    category: "Hash Table, Sliding Window",
    status: "Wrong Answer",
    time: "4 hours ago",
  },
  {
    title: "Median of Two Sorted Arrays",
    category: "Binary Search, Divide and Conquer",
    status: "Wrong Answer",
    time: "1 day ago",
  },
  {
    title: "Add Two Numbers",
    category: "Linked List, Math",
    status: "Accepted",
    time: "3 days ago",
  },
];
