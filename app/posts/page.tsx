import axios from "../api/index";
import ArticleList from "../components/groups/ArticleList";

export default async function Page() {
  const { data: posts } = await axios.get('/posts?_limit=10');
  const { data: users } = await axios.get('/users');

  if (!posts) {
    return {
      notFound: true,
    };
  }
  
  posts.forEach((post: any) => {
    post.user = users.find((user: any) => user.id === post.userId);
  });

  return (
    <>
      <ArticleList posts={posts} />
    </>
  );
}