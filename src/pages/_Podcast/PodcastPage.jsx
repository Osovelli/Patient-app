import { AppLayout } from '@/Components/AppLayout'
import HeroSection from '@/Components/Podcast/HeroSection'
import PodcastEpisodes from '@/Components/Podcast/PodcastEpisodes'

export default function PodcastPage() {
  return (
    <AppLayout showHeader={true}>
      <HeroSection />
      <PodcastEpisodes />
    </AppLayout>
  )
}