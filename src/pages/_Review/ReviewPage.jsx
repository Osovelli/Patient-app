import { AppLayout } from "@/Components/AppLayout"
import { CustomButton } from "@/Components/CustomButton"
import FacilityCard from "@/Components/Review/FacilityCard"
import FilterSidebar from "@/Components/Review/FilterSideMenu"
import { HeroSection } from "@/Components/Review/HeroSection"
import { SheetDrawer } from "@/Components/SheetDrawer"
import { Button } from "@/Components/ui/button"
import { facilities } from "@/lib/reviews"
import { Filter } from "lucide-react"
import { useState } from "react"

export default function ReviewPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
  
    return (
      <AppLayout showHeader={true}>
        {/* Hero Section */}
        <HeroSection />
  
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar for larger screens */}
            <div className="hidden lg:block sticky top-8 self-start min-w-64">
              <FilterSidebar />
            </div>
  
            {/* Filter button and sheet for mobile */}
            <div className="lg:hidden mb-4">
                <SheetDrawer
                    trigger={
                   <CustomButton icon={Filter} variant="outline" className="w-full gap-1 ">
                    Filters
                    </CustomButton> 
                }
                title="Filters"
                side="left"
                >
                <FilterSidebar />
                </SheetDrawer>
            </div>
  
            {/* Facilities List */}
            <div className="flex-1 space-y-4">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
  
              {/* Pagination */}
              <div className="flex items-center justify-between pt-4">
                <Button variant="outline">
                  Prev
                </Button>
                <span className="text-sm text-gray-500">Page 1 to 8</span>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    )
  }