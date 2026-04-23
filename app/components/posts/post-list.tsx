
import { LatestPost } from './latest-post';
import { PostCard } from './post-card';

type PostNode = {
  slug: string;
  title?: string;
  brief?: string;
  publishedAt?: string;
  coverImage?: {
    url?: string;
  };
};

type PostListProps = {
  posts: Array<{ node: PostNode }>;
};

export const PostList = ({ posts }: PostListProps) => {

    // posts sorted by time
  const latestPosts = posts[0].node;

  const restPosts = posts.slice(1);
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-sky-50 shadow-sm">
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.3fr)_320px] lg:p-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
                Latest post
              </span>
              <span className="text-sm text-slate-500">Fresh from the blog</span>
            </div>
            <LatestPost post={latestPosts} />
          </div>

          <aside className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Browse more
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                Discover the rest of the library
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Recent posts are displayed as clean, scannable cards with a more modern
                visual hierarchy.
              </p>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
            >
              Load more posts
            </button>
          </aside>
        </div>
      </section>

      {restPosts.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                All posts
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Recent articles
              </h2>
            </div>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-500">
              {restPosts.length} posts
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {restPosts.map((post) => (
              <div key={post.node.slug} className="h-full">
                <PostCard post={post.node} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
