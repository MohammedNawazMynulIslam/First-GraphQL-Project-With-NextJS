import Image from 'next/image';

const PostDetails = ({ post }) => {
  const tags = post?.tags ?? [];

  return (
    <article className="mx-auto max-w-4xl">
      {post?.coverImage?.url ? (
        <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
          <Image
            className="h-full w-full object-cover"
            width={1600}
            height={900}
            alt={post.title}
            src={post.coverImage.url}
          />
        </div>
      ) : null}

      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-medium text-sky-700">
          Article
        </span>
        {post?.subtitle ? <span>{post.subtitle}</span> : null}
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {post.title}
      </h1>

      {post?.subtitle ? (
        <p className="mt-4 text-xl leading-8 text-slate-600">{post.subtitle}</p>
      ) : null}

      {tags.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div
          className="space-y-6 text-[17px] leading-8 text-slate-700 [&_a]:font-medium [&_a]:text-sky-700 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_img]:rounded-2xl"
          dangerouslySetInnerHTML={{
            __html: post?.content?.html ?? '',
          }}
        />
      </div>
    </article>
  );
};

export default PostDetails;
