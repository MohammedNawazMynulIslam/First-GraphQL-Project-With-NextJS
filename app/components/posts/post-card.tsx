import Image from 'next/image';
import Link from 'next/link';

import { getFormattedDate } from '../../utils/index';

export const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post?.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <Image
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={1200}
            height={800}
            alt={post.title}
            src={post?.coverImage?.url}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Blog post
            </p>
            <h3 className="text-lg font-semibold leading-7 text-slate-900 transition-colors group-hover:text-sky-700">
              {post.title}
            </h3>
            <p className="text-sm text-slate-500">
              Posted on {getFormattedDate(post?.publishedAt)}
            </p>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-slate-600">
            {post.brief}
          </p>

          <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition-transform group-hover:translate-x-0.5">
            <span>Read article</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
