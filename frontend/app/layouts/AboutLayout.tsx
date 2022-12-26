import SocialIcon from '../components/social-icons'
import siteMetadata from '../data/siteMetadata'
import Image from 'next/image'

export default function AboutLayout({ children, frontMatter }) {
  const name = siteMetadata.author
  const twitter = siteMetadata.twitter
  const github = siteMetadata.github
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 pb-8"> 
          <div className="flex flex-col items-center col-span-full md:col-span-1">
            <Image
              src={`/static/images/${frontMatter.image}`}
              width={180}
              height={180}
              className="border-solid border-2 border-black rounded-full"
              alt="avator"
            />
            <h3 className="text-2xl font-bold leading-8 tracking-tight mt-2 mb-2">{name}</h3>
            <div className="flex space-x-4 mt-2 mb-2">
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
            <h3 className="text-1xl font-bold mt-2 mb-2">近況</h3>
            <div className="border-solid border-1 border-black"> 
              {frontMatter.RecentEvents}
            </div>
          </div>
          <div className="col-span-full md:col-span-3">{children}</div>
        </div>
      </div>
    </>
  )
}
