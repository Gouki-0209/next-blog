import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post, }) => {
  const searchParams = new URLSearchParams(`title=${post.frontMatter.title}`);
  return (
    <Link href={`/posts/${post.slug}`}>
      <div>
        <>
          <div className="border rounded-lg">
            {post.frontMatter.image ? (
              <Image
                src={`/static/images/${post.frontMatter.image}`}
                width={1200}
                height={700}
                alt={post.frontMatter.title}
              />
            ) : (
              <img src={`https://gouki.munenick.me/api/og?${searchParams.toString()}`} alt="" />
            )}
          </div>
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