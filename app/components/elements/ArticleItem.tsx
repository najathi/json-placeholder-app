import Link from 'next/link'

type ArticleItemProps = {
  [key: string]: any;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ post }) => {
  return (
    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        <Link href={`/posts/${post.id}`}>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <span className="absolute inset-0" />
            {post.title}
          </h3>
        </Link>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.body}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {post.user.name}
          </p>
          <p className="text-gray-600">{post.user.username}</p>
        </div>
      </div>
    </article>
  )
}

export default ArticleItem;
