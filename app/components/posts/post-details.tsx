import Image from "next/image";
import React from "react";
import Tag from "../tags/tags";

const PostDetails = ({ post }) => {
  return (
    <article>
      <Image
        className="rounded-lg"
        width={500}
        height={500}
        alt={post.title}
        src={post?.coverImage?.url}
      />
      <h1 className="text-4xl font-bold pt-5">{post.title}</h1>
      <h1 className="text-xl pt-3 pb-3">{post.subtitle}</h1>
      <div className="flex mb-4">
        {post.tags.map((tag) => (
          <Tag tag={tag} key={tag.id} />
        ))}
      </div>
      <div
        className="post-details"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </article>
  );
};
export default PostDetails;
