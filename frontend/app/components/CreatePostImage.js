import TailwindColor from '../lib/TailwindColor';

const CreatePostImage = ({ post }) => {
  const options = {
    range: [1,2],// Between 100 and 400,
    prefix: 'bg' // Can be 'bg', 'text', etc.
  };
  const selectColor = new TailwindColor(options).pick(); 
  return (
    <div className={`flex justify-center items-center h-screen border-solid border rounded-lg max-w-[1200px] h-[180px] ${selectColor}`}>
      <p className='text-xl font-bold'>{post.frontMatter.title}</p>
    </div>
  )
}
  
export default CreatePostImage