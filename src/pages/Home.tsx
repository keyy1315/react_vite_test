import type React from "react";
import PostCard from "../components/PostCard";

const dummyPosts = [
  {
    id: 1,
    title: "First Post",
    preview: "This is the first post",
    author: "John Doe",
    date: "2024-01-01",
  },
  {
    id: 2,
    title: "Second Post",
    preview: "This is the second post",
    author: "Jane Doe",
    date: "2024-01-02",
  },
  {
    id: 3,
    title: "Third Post",
    preview: "This is the third post",
    author: "John Doe",
    date: "2024-01-03",
  },
];

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} {...post} />
          //   key = {post.id} 각 포스트의 고유 id를 키로 사용
          //   post 객체의 모든 속성을 postcard 컴포넌트에 props로 전달 -> 객체 분해
        ))}
      </div>
    </div>
  );
};

export default Home;
