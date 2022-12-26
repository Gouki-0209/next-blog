import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../../components/PostCard';
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";

export const getServerSideProps = async ({params}) => {
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
      cateName: category,
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

type Props = {
  posts : any;
  cateName: any;
  baseUrl: string;
};

const Category: NextPage<Props> = ({ posts, cateName }) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold md:text-5xl md:leading-14">
            {cateName}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 pb-8">
          {posts.map((post : any) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;