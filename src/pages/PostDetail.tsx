import type React from "react";
import { useParams } from "react-router-dom";

const dummyPosts = [
    {
        id: 1,
        title: "First Post",
        content : "This is the first post, let's see how it looks like",
        author: "John Doe",
        date: "2024-01-01",
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the second post, let's see how it looks like",
        author: "Jane Doe",
        date: "2024-01-02",
    },
    {
        id: 3,
        title: "Third Post",
        content: "This is the third post, let's see how it looks like",
        author: "John Doe",
        date: "2024-01-03",
    },
];

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = dummyPosts.find((post) => post.id === Number(id));

    if (!post) {
        return <div className="text-center mt-8">Post not found</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-between text-sm text-gray-500 mb-8">
                <span>{post.author}</span>
                <span>{post.date}</span>
            </div>
            <div className="prose max-w-none">
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default PostDetail;
