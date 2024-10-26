type CommentItemProps = {
  [key: string]: any;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className="text-sm leading-6">
      <p className="font-semibold text-gray-900">
        <span className="absolute inset-0" />
        {comment.name}
      </p>
      <p className="text-gray-500 text-sm font-bold">{comment.email}</p>
      <p className="text-gray-600">{comment.body}</p>
    </div>
  )
}

export default CommentItem;
