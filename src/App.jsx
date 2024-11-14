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
import CrowdfundingPage from './pages/CrowdfundingPage';


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
