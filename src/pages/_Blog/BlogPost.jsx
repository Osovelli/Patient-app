import BlogPostContent from '@/Components/Blog/BlogPostContent'
import BlogPostHeader from '@/Components/Blog/BlogPostHeader'
import React from 'react'
import { useParams } from 'react-router-dom'

export const BlogPost = () => {
    const { slug } = useParams()    

    // Fetch the blog post data based on the slug
     /* const blogPost = getBlogPostBySlug(slug); */

    return (
    <div className='w-full container h-screen'>
        {/* <section 
        className="h-[400px] bg-contain bg-no-repeat w-full py-4" 
        style={{ backgroundImage: 'url("/BG.png")' }}
        >
            <div className="max-w-screen-md grid md:grid-cols-2 mx-auto bg-yellow-300 rounded-lg p-4">
                <div className='bg-yellow-300'>
                    <p className='text-xs text-[#05CC7E]'>1% OF THE INDUSTRY</p>
                    <p className='font-bold max-w-sm text-5xl'>Faster ways to reach your customers and their needs.</p>
                    <div>

                    </div>
                </div>
            </div>
         </section> */}
         <BlogPostHeader />
         <BlogPostContent />
    </div>
    )
}
