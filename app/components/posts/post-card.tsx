import Link from 'next/link'
import React from 'react'
import {getFormattedDate} from "../../utils/index"
import Image from "next/image";

export const PostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blog/${post?.slug}`}>
        <Image
          className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:1/2 2xl:w-1/3 h-auto"
          width={500}
          height={500}
          alt={post.title}
          src={post?.coverImage?.url}
        />
        <h3 className="text-xl font-semibold p-4">{post.title}</h3>
        <p className="text-gray-500">
          Posted on {getFormattedDate(post?.publishedAt)}
        </p>
        <p className="mt-2 text-gray-700 p-4">{post.brief}</p>
      </Link>
    </div>
  );
}
