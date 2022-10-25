import Link from '../components/Link'
import Category from '../components/Categories'
import siteMetadata from '../data/siteMetadata'
import { getAllCategories } from '../lib/categories'
import kebabCase from '../lib/utils/kebabCase'

export async function getStaticProps() {
  const categories = await getAllCategories('blog')

  return { props: { categories } }
}

export default function Categories({ categories }) {
  const sortedCategories = Object.keys(categories).sort((a, b) => categories[b] - categories[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Category
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(categories).length === 0 && 'No tags found.'}
          {sortedCategories.map((category) => {
            return (
              <div key={category} className="mt-2 mb-2 mr-5">
                <Category text={category} />
                <Link
                  href={`/categories/${kebabCase(category)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  {` (${categories[category]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
