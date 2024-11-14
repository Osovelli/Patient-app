import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const StoryCard = ({ title, content, author, avatar }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{content}</p>
    <div className="flex items-center">
      <img src={avatar} alt={author} className="w-10 h-10 rounded-full mr-4" />
      <span className="font-medium">{author}</span>
    </div>
  </div>
)

const ImpactStories = () => {
    const stories = [
        {
          title: "Cancer Survivor",
          content: "Sarah Johnson, diagnosed with stage II cancer, received vital support from our community. Together, we funded her life-saving treatment and inspired countless others.",
          author: "Akinyemi Oluwu",
          avatar: "/Avatar/avatar 1.png"
        },
        {
          title: "Rebuilding Lives After Natural Disasters",
          content: "After the devastating floods in Lagos, our community came together to provide shelter and resources for affected families. This is the story of the Johnson family, who found hope and support in their darkest hour.",
          author: "Chinonso Eze",
          avatar: "/Avatar/avatar 2.png"
        },
        {
          title: "Empowering Young Entrepreneurs",
          content: "Through our initiative, we helped young entrepreneurs like Tunde launch their businesses. Tunde's bakery is now thriving, and he is giving back to the community by mentoring others.",
          author: "Fatima Bello",
          avatar: "/Avatar/avatar 3.png"
        }
      ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Impact Stories</h2>
          <div className="sm:flex space-x-2 hidden">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-gray-600 mb-8">
          See how your contributions have made a difference
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStories