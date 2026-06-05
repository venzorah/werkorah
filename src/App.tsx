import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PhoneLayout } from './components/Layout';
import { Splash } from './pages/Splash';
import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { ArtisanProfile } from './pages/ArtisanProfile';
import { Booking } from './pages/Booking';
import { Quote } from './pages/Quote';
import { Payment } from './pages/Payment';
import { LiveJob } from './pages/LiveJob';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { ArtisanRegister } from './pages/artisan/Register';
import { ArtisanKyc } from './pages/artisan/Kyc';
import { ArtisanDashboard } from './pages/artisan/Dashboard';
import { ArtisanServices } from './pages/artisan/Services';
import { CreateService } from './pages/artisan/CreateService';
import { ArtisanPortfolio } from './pages/artisan/Portfolio';
import { ArtisanRequests } from './pages/artisan/Requests';
import { ArtisanEarnings } from './pages/artisan/Earnings';
import { ArtisanProfile as ProProfile } from './pages/artisan/Profile';
import { JobHistory } from './pages/artisan/JobHistory';
import { BusinessDetails } from './pages/artisan/BusinessDetails';
import { Support } from './pages/artisan/Support';
import { EditProfile } from './pages/artisan/EditProfile';
// Placeholders for remaining bottom nav tabs
const Wallet = () =>
<div className="p-6 h-full flex items-center justify-center text-slate-500">
    Wallet Screen (Coming Soon)
  </div>;

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/artisan/:id" element={<ArtisanProfile />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/quote/:id" element={<Quote />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/live-job" element={<LiveJob />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />

          {/* Artisan App Routes */}
          <Route path="/pro/register" element={<ArtisanRegister />} />
          <Route path="/pro/kyc" element={<ArtisanKyc />} />
          <Route path="/pro/dashboard" element={<ArtisanDashboard />} />
          <Route path="/pro/services" element={<ArtisanServices />} />
          <Route path="/pro/create-service" element={<CreateService />} />
          <Route path="/pro/portfolio" element={<ArtisanPortfolio />} />
          <Route path="/pro/requests" element={<ArtisanRequests />} />
          <Route path="/pro/earnings" element={<ArtisanEarnings />} />
          <Route path="/pro/profile" element={<ProProfile />} />
          <Route path="/pro/edit-profile" element={<EditProfile />} />
          <Route path="/pro/business" element={<BusinessDetails />} />
          <Route path="/pro/history" element={<JobHistory />} />
          <Route path="/pro/support" element={<Support />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}