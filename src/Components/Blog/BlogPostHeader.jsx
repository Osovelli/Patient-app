import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BlogPostHeader() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gray-50">
      {/* Forest Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/BG.png"
          alt="Forest pattern"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-medium text-emerald-500 tracking-wide">
              1% OF THE INDUSTRY
            </span>
            <h1 className="text-[2.75rem] leading-[1.2] font-bold text-gray-900">
              Faster ways to reach your customers and their needs.
            </h1>
            <div className="flex items-center gap-3 pt-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-avatar.png" alt="Abayomi Olowu" />
                <AvatarFallback>AO</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">Abayomi Olowu</span>
                <span className="text-sm text-gray-500">Published 05 Dec 2023</span>
              </div>
            </div>
          </div>

          {/* 3D Bottle Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72">
              <img
                src="/medicine bottle.png"
                alt="3D Green Bottle"
                className="object-contain drop-shadow-xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}