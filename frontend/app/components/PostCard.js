import Image from 'next/image';
import Link from 'next/link';
import CreatePostImage from './CreatePostImage';

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div>
        <>
          {post.frontMatter.image ? (
            <div className="border rounded-lg">
              <Image
                src={`/static/images/${post.frontMatter.image}`}
                width={1200}
                height={700}
                alt={post.frontMatter.title}
              />
            </div>
          ) : (
            <CreatePostImage post={post} />
          )}
        </>
        <div className="px-2 py-4">
          <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
          <span>{post.frontMatter.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;