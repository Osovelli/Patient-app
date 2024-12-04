import { AppLayout } from '@/components/AppLayout'
import Footer from '@/components/Footer'
import HeroSection from '@/components/podcast/HeroSection'
import PodcastEpisodes from '@/components/podcast/PodcastEpisodes'

export default function PodcastPage() {
  return (
    <AppLayout showHeader={true}>
      <HeroSection />
      <PodcastEpisodes />
      <Footer />
    </AppLayout>
  )
}