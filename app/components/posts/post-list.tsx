
import { LatestPost } from './latest-post';
import { PostCard } from './post-card';

export const PostList =  ({posts}) => {
    
   

    // posts sorted by time
  const latestPosts = posts[0].node
  
    const restPosts = posts.slice(1);
  return (
    <>
      {" "}
      <div className="mb-8">
        <LatestPost post={latestPosts} />
      </div>
      {restPosts.length > 0 && (
        <div className="mb-8">
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {restPosts.map((post) => (
              <div key={post.node.slug}>
                <PostCard post={post.node} />
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Load More
            </button>
          </div>
        </div>
      )}
    </>
  );
}
