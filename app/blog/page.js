
import { PostList } from '../components/posts/post-list'
import { getAllPosts } from '../quaries/blog-data'
export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <div>
        <PostList posts={posts} />
    </div>
  )
}
