"use client";

import { UserPost } from "@/types/UserPost";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { HiDotsHorizontal } from "react-icons/hi";
import PostAction from "@/components/posts/PostActions";

type Props = {
  post: UserPost;
};

export default function UserPostComponent({ post }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4 w-full bg-white cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={post.userAvatar}
            alt={post.userName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col items-center justify-center leading-none gap-1">
            <span className="font-bold text-gray-800">{post.userName}</span>
            <span className="text-gray-500">2 hours ago</span>
          </div>
        </div>
        <HiDotsHorizontal className="text-gray-700 cursor-pointer text-3xl" />
      </div>

      <div className="flex items-start gap-4 pb-2">
        <Image
          src={post.cardImage}
          alt={post.cardName}
          width={140}
          height={190}
          className="rounded-xl object-contain"
        />
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm w-34 text-gray-900 font-semibold rounded-4xl bg-blue-100 py-1 flex gap-1 items-center justify-center">
            <SearchIcon />
            In search of
          </span>
          <span className="font-bold text-gray-800 text-xl">
            {post.cardName}
          </span>
        </div>
      </div>

      <PostAction />
    </div>
  );
}
