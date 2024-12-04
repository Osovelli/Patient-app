import React from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RegisterPage from './pages/_Auth/SignUpPage';
import VerifyAccount from './pages/_Auth/VerifyCode';
import PersonalizeProfile from './pages/_Auth/PersonalizePage';
import LoginPage from './pages/_Auth/LoginPage';
import ResetPassword from './pages/_Auth/ResetPassword';
import VerifyPassword from './pages/_Auth/VerifyPassword';
import BlogHome from './pages/_Blog/BlogPage';
import { BlogPost } from './pages/_Blog/BlogPost';
import CustomerStoriesPage from './pages/_CustomerStory/CustomerStoriesPage';
import CustomerStoryPost from './pages/_CustomerStory/CustomerStoryPost';
import CrowdfundingPage from './pages/_Crowdfunding/CrowdfundingPage';
import AllCampaigns from './pages/_Crowdfunding/AllCampaignPage';
import CampaignDetails from './pages/_Crowdfunding/CampaignDetailsPage';
import WebinarPage from './pages/_Webinar/WebinarPage';
import WebinarDetailsPage from './pages/_Webinar/WebinarDetailsPage';
import CreateFundraiser from './pages/_Crowdfunding/CreateCrowdFundingPage';
import PodcastPage from './pages/_Podcast/PodcastPage';
import SingleEpisode from './pages/_Podcast/SinglePodcastEpisode';
import ReviewPage from './pages/_Review/ReviewPage';
import ReviewFacility from './pages/_Review/FacilityReview';
import AccountPage from './pages/Account';
import Advocacy from './pages/Advocacy';
import AwardsPage from './pages/AwardPage';
import CookieConsent from './components/cookies/CookieConsent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='/verify' element={<VerifyAccount />} />
        <Route path='/personalize' element={<PersonalizeProfile />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify-password' element={<VerifyPassword />} />
        <Route path='/blog' element={<BlogHome />} />
        <Route path='/blog/:id' element={<BlogPost />}/>
        <Route path='/stories' element={<CustomerStoriesPage />}/>
        <Route path='/stories/:id' element={<CustomerStoryPost />}/>
        <Route path='/crowdfunding' element={<CrowdfundingPage />}/>
        <Route path='/crowdfunding/create' element={<CreateFundraiser />}/>
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />
        <Route path="/webinars" element={<WebinarPage />} />
        <Route path="/webinars/:id" element={<WebinarDetailsPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:id" element={<SingleEpisode />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/review/:id" element={<ReviewFacility/>} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/advocacy" element={<Advocacy/>} />
        <Route path="/awards" element={<AwardsPage />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
