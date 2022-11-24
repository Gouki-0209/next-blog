import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../../components/PostCard';

export const getServerSideProps = ({ params }) => {
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

  const category = params.category;

  const filteredPosts = posts.filter((post) => {
    return post.frontMatter.categories.includes(category);
  });

  const sortedPosts = filteredPosts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

// export const getStaticPaths = () => {
//   const categories = ['react', 'laravel'];
//   const paths = categories.map((category) => ({ params: { category } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

const Category = ({ posts }) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Category;