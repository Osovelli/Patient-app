import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { BiLike, BiComment, BiShareAlt } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { HiOutlineReply } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { mockPost } from '@/lib/mockpost'
import { FaGoogle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'


const TableOfContents = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <span className="text-emerald-500">⬡</span>
      <span className="text-emerald-500">Content</span>
    </div>
    {['Introduction', 'Tools', 'Resources', 'Credits'].map((item) => (
      <div key={item} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <span>⬢</span>
        <a href={`#${item.toLowerCase()}`}>{item}</a>
      </div>
    ))}
  </div>
)

const SocialShare = () => (
  <div className="flex gap-2">
    {[
      { icon: <FaGoogle />, alt: 'Google' },
      { icon: <FaTwitter />, alt: 'Twitter' },
      { icon: <FaFacebook />, alt: 'Facebook' },
      { icon: <FaLinkedin />, alt: 'LinkedIn' }
    ].map((platform) => (
      <a
        key={platform.alt}
        href="#"
        className="w-8 h-8 flex items-center justify-center rounded-full border hover:border-gray-400"
      >
        {platform.icon}
      </a>
    ))}
  </div>
)

const CommentForm = () => (
  <div className="flex gap-4">
    <Avatar className="h-8 w-8">
      <AvatarImage src="/avatar-placeholder.png" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <Textarea 
        placeholder="Write your comment here..." 
        className="mb-2 min-h-[100px] resize-none"
      />
    </div>
  </div>
)

const Comment = ({ comment }) => (
  <div className="space-y-4">
    <div className="flex items-start gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={comment.avatar} />
        <AvatarFallback>{comment.author[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">{comment.author}</span>
          <span className="text-sm text-gray-500">{comment.timeAgo}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{comment.content}</p>
        <div className="flex gap-4 mt-2">
          <button className="text-gray-500 hover:text-emerald-500 text-xs flex items-center gap-1">
            <BiLike className="h-4 w-4" />
            Like
          </button>
          <button className="text-gray-500 hover:text-emerald-500 text-xs flex items-center gap-1">
            <HiOutlineReply className="h-4 w-4" />
            Reply
          </button>
        </div>
      </div>
    </div>
    {comment.replies && comment.replies.length > 0 && (
      <div className="ml-12 space-y-4">
        {comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} />
        ))}
      </div>
    )}
  </div>
)

export default function BlogPostContent() {
  const [likes, setLikes] = useState(20)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setHasLiked(!hasLiked)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-[200px_1fr] gap-12">
        {/* Sidebar */}
        <aside className="space-y-8">
          <TableOfContents />
          <SocialShare />
        </aside>

        {/* Main Content */}
        <article className="prose prose-gray max-w-none">
          <div className="flex items-center gap-4 text-sm text-emerald-500 mb-4">
            <span>20k</span>
            <span>15k</span>
          </div>

          <div 
            dangerouslySetInnerHTML={{ __html: mockPost.content }}
            className="mb-8"
          />

          <img
            src={mockPost.image}
            alt="Modern workspace"
            className="w-full rounded-lg mb-2"
          />
          <p className="text-sm text-gray-500 text-center">[image owner]</p>

          {/* Engagement Section */}
          <div className="border-t border-b py-6 my-8">
            <h3 className="font-medium mb-2">Like what you have read?</h3>
            <p className="text-sm text-gray-600 mb-4">Like or share your thoughts</p>
            <div className="flex gap-4">
              <button 
                onClick={handleLike}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500"
              >
                <BiLike className="h-5 w-5" />
                Like ({likes})
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                <FaRegComment className="h-5 w-5" />
                Comment
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                <BiShareAlt className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium">
              Comments ({mockPost.comments.length})
            </h3>
            
            {mockPost.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}

            <CommentForm />
          </div>

          {/* Related Article */}
          <div className="mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <span className="text-red-500 text-sm font-medium">Hot</span>
              <h3 className="text-xl font-medium mt-2">
                Gestalt psychology in UI/UX design and beyond.
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Working from home requires self-discipline to stay focused amidst potential distractions. Setting boundaries between work and personal life is crucial to maintain a healthy work-life balance and prevent burnout.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                  <AiOutlineHeart className="h-4 w-4" />
                  Like
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                  <FaRegComment className="h-4 w-4" />
                  Comment
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                  <BiShareAlt className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}