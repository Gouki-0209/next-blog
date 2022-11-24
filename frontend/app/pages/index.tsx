import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';

const DEFAULT_POSTCARD = 'CreatePostImage'

export const getServerSideProps = () => {
  const files = fs.readdirSync('data/blog');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`data/blog/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
