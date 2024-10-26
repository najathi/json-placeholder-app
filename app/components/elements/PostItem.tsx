import Link from "next/link";

type PostItemProps = {
  [key: string]: any;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link href={`/posts`}>
          <p className="text-pretty font-semibold tracking-tight text-gray-900 group-hover:text-gray-600 cursor-pointer my-0">
            Back
          </p>
        </Link>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.body}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <span className="absolute inset-0"></span>
                  {post.user.name}
                </p>
                <p className="text-gray-600">{post.user.username}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default PostItem;