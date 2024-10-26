import CommentList from "@/app/components/groups/CommentList";
import axios from "@/app/api/index";
import PostItem from '@/app/components/elements/PostItem';

export default async function Page({ params }: { params: { id: number } }) {
  const { data: post } = await axios.get('/posts/' + params.id);
  const { data: users } = await axios.get('/users');
  const { data: comments } = await axios.get(`posts/${params.id}/comments?_limit=10`);

  post.user = users.find((user: any) => user.id === post.userId);

  return (
    <>
      <PostItem post={post} />
      <CommentList comments={comments} />
    </>
  );
}