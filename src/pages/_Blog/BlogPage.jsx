import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import { mockPosts } from '@/lib/mockposts'
import Header from '@/components/header'
import Footer from '@/components/Footer'


const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]

function ArticleCard({ post, featured = false, recent = false }) {
  return (
    <article className={`group ${featured ? 'md:grid md:grid-cols-2 gap-8 items-center' : ''}`}>
      <Link to={`/blog/${post.id}`} className="block bg-[#F2F4F6]">
        <img
          src={post.image}
          alt={post.title}
          width={featured ? 600 : 400}
          height={featured ? 400 : 300}
          className="rounded-lg object-cover w-full aspect-[4/3]"
        />
      </Link>
      <div className={`${featured ? '' : 'mt-4'} ${recent ? 'flex-1' : ''}`}>
        {!recent && (
          <div className="text-emerald-500 text-sm mb-2">[{post.category}]</div>
        )}
        <Link to={`/blog/${post.id}`}>
          <h3 className={`font-semibold ${featured ? 'text-2xl' : 'text-lg'} hover:text-emerald-600`}>
            {post.title}
          </h3>
        </Link>
        {!recent && (
          <>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
            <Link 
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-emerald-500 hover:text-emerald-600 mt-4"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </>
        )}
      </div>
    </article>
  )
}

function RecentArticle({ post }) {
  return (
    <article className="flex gap-4 items-start py-4">
      <img
        src={post.image}
        alt={post.title}
        width={80}
        height={80}
        className="rounded-lg object-cover w-20 h-20 bg-[#F2F4F6]"
      />
      <div className="flex-1">
        <span className="text-sm text-gray-600">{post.date}</span>
        <Link to={`/blog/${post.id}`}>
          <h3 className="font-medium hover:text-emerald-600 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {post.excerpt}
        </p>
      </div>
    </article>
  )
}

export default function BlogHome() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <div>
    <Header />
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="text-emerald-500 text-sm font-medium mb-4">
          1% OF THE INDUSTRY
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Our Latest Articles<br />and Blog Posts.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We've been told it is possible to revolutionize the payment industry. We
          have not reinvented the wheel, we decided to build upon it - successfully.
        </p>
      </div>

      {/* Categories and Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium">Tags:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm px-3 py-1 rounded-full ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">
            Search
          </Button>
        </form>
      </div>

      {/* Featured and Recent Articles */}
      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <ArticleCard post={mockPosts[0]} featured />
        </div>
        <div className="space-y-2 divide-y">
          {mockPosts.slice(1, 4).map((post) => (
            <RecentArticle key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Latest Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 shadow-sm">
          {mockPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </div>
  )
}