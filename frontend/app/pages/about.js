import { MDXLayoutRenderer } from '../components/MDXComponents'
import { getFileBySlug } from '../lib/mdx'

const DEFAULT_LAYOUT = 'AboutLayout'

export async function getServerSideProps() {
  const authorDetails = await getFileBySlug('author', ['site-about'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
