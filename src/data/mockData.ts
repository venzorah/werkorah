export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Service {
  id: string;
  name: string;
  type: 'fixed' | 'hourly' | 'quote';
  price?: number;
  duration?: string;
}

export interface Artisan {
  id: string;
  name: string;
  category: string;
  rating: number;
  jobsCompleted: number;
  yearsExperience: number;
  distance: string;
  startingPrice: number;
  verified: boolean;
  bio: string;
  photoUrl: string;
  portfolioImages: string[];
  services: Service[];
  reviews: Review[];
}

export const categories = [
{ id: 'plumbing', name: 'Plumbing', icon: 'Droplets' },
{ id: 'electrical', name: 'Electrical', icon: 'Zap' },
{ id: 'carpentry', name: 'Carpentry', icon: 'Hammer' },
{ id: 'painting', name: 'Painting', icon: 'PaintRoller' },
{ id: 'welding', name: 'Welding', icon: 'Flame' },
{ id: 'cleaning', name: 'Cleaning', icon: 'Sparkles' },
{ id: 'mechanic', name: 'Mechanic', icon: 'Wrench' },
{ id: 'ac_repair', name: 'AC Repair', icon: 'Wind' },
{ id: 'generator', name: 'Generator', icon: 'Power' },
{ id: 'tiling', name: 'Tiling', icon: 'Grid' },
{ id: 'roofing', name: 'Roofing', icon: 'Home' },
{ id: 'fashion', name: 'Fashion', icon: 'Scissors' },
{ id: 'makeup', name: 'Makeup', icon: 'Brush' },
{ id: 'photo', name: 'Photography', icon: 'Camera' },
{ id: 'mason', name: 'Mason', icon: 'BrickWall' },
{ id: 'web_design', name: 'Web Design', icon: 'Monitor' },
{ id: 'graphics', name: 'Graphics', icon: 'Palette' },
{ id: 'app_dev', name: 'App Dev', icon: 'Smartphone' },
{ id: 'ui_ux', name: 'UI/UX', icon: 'PenTool' }];


export const mockArtisans: Artisan[] = [
{
  id: 'a1',
  name: 'Chinedu Okafor',
  category: 'Plumbing',
  rating: 4.9,
  jobsCompleted: 142,
  yearsExperience: 8,
  distance: '2.4 km',
  startingPrice: 7000,
  verified: true,
  bio: 'Professional plumber with over 8 years of experience in residential and commercial plumbing. Specialized in leak detection, pipe installation, and emergency repairs. I pride myself on clean, efficient work.',
  photoUrl:
  'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=250&auto=format&fit=crop',
  portfolioImages: [
  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607472586893-edb57cb31328?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400&auto=format&fit=crop'],

  services: [
  {
    id: 's1',
    name: 'Pipe Installation',
    type: 'fixed',
    price: 25000,
    duration: '1 Day'
  },
  {
    id: 's2',
    name: 'Emergency Repair',
    type: 'hourly',
    price: 7000,
    duration: '1 hr min'
  },
  { id: 's3', name: 'Custom Plumbing Project', type: 'quote' }],

  reviews: [
  {
    id: 'r1',
    customerName: 'Amina Bello',
    rating: 5,
    comment:
    'Very professional and arrived on time. Fixed my leaking sink in under an hour.',
    date: '2 days ago'
  },
  {
    id: 'r2',
    customerName: 'Tunde Bakare',
    rating: 4,
    comment:
    'Good work, but had to go buy a part which delayed the job a bit. Overall satisfied.',
    date: '1 week ago'
  }]

},
{
  id: 'a2',
  name: 'Samuel Adeyemi',
  category: 'Electrical',
  rating: 4.7,
  jobsCompleted: 89,
  yearsExperience: 5,
  distance: '3.1 km',
  startingPrice: 5000,
  verified: true,
  bio: 'Certified electrician handling wiring, fault finding, and appliance installation. Safety is my number one priority.',
  photoUrl:
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop',
  portfolioImages: [
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop'],

  services: [
  {
    id: 's4',
    name: 'House Wiring Inspection',
    type: 'fixed',
    price: 15000
  },
  { id: 's5', name: 'Fault Tracing', type: 'hourly', price: 5000 }],

  reviews: [
  {
    id: 'r3',
    customerName: 'Ngozi Eze',
    rating: 5,
    comment: 'Sorted out my power issues quickly. Highly recommended!',
    date: '3 weeks ago'
  }]

},
{
  id: 'a3',
  name: 'Ibrahim Musa',
  category: 'Carpentry',
  rating: 4.5,
  jobsCompleted: 56,
  yearsExperience: 12,
  distance: '5.0 km',
  startingPrice: 10000,
  verified: false,
  bio: 'Expert furniture maker and carpenter. I build custom wardrobes, kitchen cabinets, and repair wooden structures.',
  photoUrl:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
  portfolioImages: [
  'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=400&auto=format&fit=crop'],

  services: [
  { id: 's6', name: 'Door Hanging', type: 'fixed', price: 10000 },
  { id: 's7', name: 'Custom Wardrobe', type: 'quote' }],

  reviews: []
}];


export interface JobRequest {
  id: string;
  customerName: string;
  customerPhoto: string;
  serviceName: string;
  type: 'fixed' | 'hourly' | 'quote';
  proposedAmount?: number;
  date: string;
  location: string;
  description: string;
  status: 'pending' | 'accepted' | 'declined' | 'countered';
}

export const mockJobRequests: JobRequest[] = [
{
  id: 'req1',
  customerName: 'Amina Bello',
  customerPhoto:
  'https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop',
  serviceName: 'Pipe Installation',
  type: 'fixed',
  proposedAmount: 25000,
  date: 'Tomorrow, 10:00 AM',
  location: 'Lekki Phase 1, Lagos',
  description: 'Need complete piping for a new 2-bedroom apartment.',
  status: 'pending'
},
{
  id: 'req2',
  customerName: 'Tunde Bakare',
  customerPhoto:
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
  serviceName: 'Custom Wardrobe',
  type: 'quote',
  proposedAmount: 60000,
  date: 'Flexible',
  location: 'Ikeja, Lagos',
  description:
  'Looking for a 6-door custom wardrobe. I have reference images.',
  status: 'pending'
},
{
  id: 'req3',
  customerName: 'Ngozi Eze',
  customerPhoto:
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  serviceName: 'Emergency Repair',
  type: 'hourly',
  proposedAmount: 7000,
  date: 'Today, ASAP',
  location: 'Victoria Island, Lagos',
  description: 'Burst pipe in the kitchen, flooding everywhere!',
  status: 'pending'
}];


export interface Transaction {
  id: string;
  type: 'credit' | 'debit' | 'withdrawal';
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export const mockTransactions: Transaction[] = [
{
  id: 'tx1',
  type: 'credit',
  description: 'Payment for Pipe Installation (Amina B.)',
  amount: 23750,
  date: 'Oct 12, 2023',
  status: 'completed'
}, // 25000 - 5% commission
{
  id: 'tx2',
  type: 'withdrawal',
  description: 'Withdrawal to GTBank ****1234',
  amount: 50000,
  date: 'Oct 10, 2023',
  status: 'completed'
},
{
  id: 'tx3',
  type: 'credit',
  description: 'Payment for Emergency Repair (Ngozi E.)',
  amount: 6650,
  date: 'Oct 08, 2023',
  status: 'completed'
},
{
  id: 'tx4',
  type: 'credit',
  description: 'Payment for Custom Wardrobe (Tunde B.)',
  amount: 57000,
  date: 'Oct 05, 2023',
  status: 'pending'
} // In escrow
];

export const mockEarningsSummary = {
  availableBalance: 145000,
  pendingBalance: 57000, // In escrow
  totalEarnings: 850000,
  jobsCompleted: 142,
  rating: 4.9,
  activeJobs: 3
};

export interface JobActivity {
  id: string;
  customerName: string;
  customerPhoto: string;
  serviceName: string;
  amount: number;
  date: string;
  rating?: number;
  status: 'completed' | 'cancelled';
}

// Immutable record of job activities — artisans cannot delete these
export const mockJobHistory: JobActivity[] = [
{
  id: 'job1',
  customerName: 'Amina Bello',
  customerPhoto:
  'https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop',
  serviceName: 'Pipe Installation',
  amount: 25000,
  date: 'Oct 12, 2023',
  rating: 5,
  status: 'completed'
},
{
  id: 'job2',
  customerName: 'Ngozi Eze',
  customerPhoto:
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  serviceName: 'Emergency Repair',
  amount: 7000,
  date: 'Oct 08, 2023',
  rating: 4,
  status: 'completed'
},
{
  id: 'job3',
  customerName: 'Tunde Bakare',
  customerPhoto:
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
  serviceName: 'Custom Wardrobe',
  amount: 60000,
  date: 'Oct 05, 2023',
  status: 'cancelled'
},
{
  id: 'job4',
  customerName: 'Chidi Okeke',
  customerPhoto:
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
  serviceName: 'House Wiring Inspection',
  amount: 15000,
  date: 'Sep 28, 2023',
  rating: 5,
  status: 'completed'
}];