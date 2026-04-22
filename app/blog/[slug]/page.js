import { notFound } from "next/navigation";
import { getPost } from "../../quaries/blog-data";
import PostDetails from "../../components/posts/post-details";

const BlogDetailsPage = async ({ params }) => {
  // In newer Next.js versions, `params` may be a Promise.
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;

  if (typeof slug !== "string" || slug.length === 0) {
    notFound();
  }

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostDetails post={post} />;
};

export default BlogDetailsPage;