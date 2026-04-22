import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts } from "@/app/quaries/blog-data";
import { PostList } from "@/app/components/posts/post-list";

export default async function PostByTagPage({ params }: { params: { id: string } }) {
  // In newer Next.js versions, `params` may be a Promise.
  const resolvedParams = await Promise.resolve(params);
  const tagId = resolvedParams?.id;

  if (typeof tagId !== "string" || tagId.length === 0) {
    notFound();
  }

  const posts = await getAllPosts([tagId]);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const tags = posts[0]?.node?.tags ?? [];
  const foundTag = tags.find((tag) => tag.id === tagId);

  return (
    <div className="flex flex-col">
      <div className="flex pt-4 pl-4 mb-8 text-2xl">
        <p className="mr-2">
          {posts.length} posts found for the tag {foundTag?.name ?? "selected tag"}
        </p>
        <span className="mr-2"></span>
        <Link href="/blog" className="underline">
          See All Posts
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
