import React from "react";
import appwriteService from "../appwrite/database";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl p-4 bg-gray-100">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
