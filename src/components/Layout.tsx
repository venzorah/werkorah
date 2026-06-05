import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Search,
  CalendarCheck,
  Wallet,
  User,
  LayoutDashboard,
  Inbox,
  Briefcase } from
'lucide-react';
import { motion } from 'framer-motion';
export function PhoneLayout() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-slate-200 p-4 sm:p-8">
      <div className="relative w-full max-w-[420px] h-[850px] max-h-[95vh] bg-background rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-slate-800 flex flex-col">
        {/* Status Bar Mock */}
        <div className="h-7 w-full bg-transparent absolute top-0 z-50 flex justify-between items-center px-6 pointer-events-none">
          <span className="text-[11px] font-medium text-slate-800">9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-2.5 bg-slate-800 rounded-sm"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-slate-800"></div>
            <div className="w-5 h-2.5 bg-slate-800 rounded-sm"></div>
          </div>
        </div>

        {/* Dynamic Island Mock */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-black rounded-full z-50 pointer-events-none"></div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden relative pt-10 pb-20 scrollbar-hide">
          <Outlet />
        </div>

        <BottomNav />
      </div>
    </div>);

}
function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  // Hide bottom nav on auth/onboarding/splash screens
  const hiddenRoutes = [
  '/',
  '/onboarding',
  '/login',
  '/register',
  '/pro/register',
  '/pro/kyc'];

  if (hiddenRoutes.includes(location.pathname)) return null;
  // Also hide on specific flow screens where we want full focus
  if (
  location.pathname.includes('/booking') ||
  location.pathname.includes('/payment') ||
  location.pathname.includes('/live-job') ||
  location.pathname.includes('/pro/create-service'))
  {
    return null;
  }
  const isPro = location.pathname.startsWith('/pro');
  const customerTabs = [
  {
    id: 'home',
    path: '/home',
    icon: Home,
    label: 'Home'
  },
  {
    id: 'search',
    path: '/search',
    icon: Search,
    label: 'Search'
  },
  {
    id: 'bookings',
    path: '/dashboard',
    icon: CalendarCheck,
    label: 'Bookings'
  },
  {
    id: 'wallet',
    path: '/wallet',
    icon: Wallet,
    label: 'Wallet'
  },
  {
    id: 'profile',
    path: '/profile',
    icon: User,
    label: 'Profile'
  }];

  const artisanTabs = [
  {
    id: 'dashboard',
    path: '/pro/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard'
  },
  {
    id: 'requests',
    path: '/pro/requests',
    icon: Inbox,
    label: 'Requests'
  },
  {
    id: 'services',
    path: '/pro/services',
    icon: Briefcase,
    label: 'Services'
  },
  {
    id: 'earnings',
    path: '/pro/earnings',
    icon: Wallet,
    label: 'Earnings'
  },
  {
    id: 'profile',
    path: '/pro/profile',
    icon: User,
    label: 'Profile'
  }];

  const tabs = isPro ? artisanTabs : customerTabs;
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-surface border-t border-border px-6 py-4 pb-8 z-40">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => {
          const isActive = location.pathname.startsWith(tab.path);
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-1 relative w-12">
              
              <div
                className={`relative p-1.5 rounded-full transition-colors ${isActive ? 'text-primary' : 'text-text-muted'}`}>
                
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {isActive &&
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }} />

                }
              </div>
              <span
                className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-text-muted'}`}>
                
                {tab.label}
              </span>
            </button>);

        })}
      </div>
    </div>);

}