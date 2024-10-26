import CommentItem from "../elements/CommentItem";

type CommentListProps = {
  [key: string]: any;
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {comments.length || 0} Comment(s)
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-4 sm:pt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {comments.map((comment: any) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommentList;
