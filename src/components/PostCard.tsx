import type React from "react";
import { Link } from "react-router-dom";

interface PostCardProps {
    id: number;
    title: string;
    preview: string;
    author: string;
    date: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, preview, author, date }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">

            <Link to={`/post/${id}`}>
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{preview}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PostCard;
