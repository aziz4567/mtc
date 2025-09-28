export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  public: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  backgroundImage?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  imageUrl: string;
  shortLink?: string;
  status: 'upcoming' | 'ongoing' | 'passed';
  category: string;
  organizer: string;
}

// Mock user data
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'user'
  }
];

// Navigation items
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: 'home', public: true },
  { id: 'about', label: 'About', href: '/about', icon: 'info', public: true },
  { id: 'contact', label: 'Contact', href: '/contact', icon: 'mail', public: true },
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard', public: false },
  { id: 'profile', label: 'Profile', href: '/profile', icon: 'user', public: false }
];

// Homepage hero section data
export const heroData: HeroSection = {
  title: 'Welcome to Our Platform',
  subtitle: 'Build Something Amazing',
  description: 'Create beautiful, responsive applications with our modern React template. Perfect for startups and enterprises alike.',
  ctaText: 'Get Started',
  backgroundImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAABlBMVEUAAAAORKmU5gWIAAAA3klEQVR4nO3PAQEAAAjDoNu/tEEYDdjN1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W39bf1t/W34b/H769AMf5McvaAAAAAElFTkSuQmCC'
};
export const eventsData: Event[] = [
  {
    id: '1',
    title: 'Microsoft Azure Fundamentals Workshop',
    description: 'Learn the basics of Microsoft Azure cloud services, including compute, storage, and networking. Perfect for beginners looking to start their cloud journey.',
    date: '2025-10-15',
    time: '2:00 PM - 5:00 PM',
    location: 'ISIMM Campus - Room A101',
    attendees: 45,
    maxAttendees: 60,
    imageUrl: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    shortLink: 'https://bit.ly/mtc-azure-workshop',
    status: 'upcoming',
    category: 'Cloud Computing',
    organizer: 'MTC ISIMM'
  },
  {
    id: '2', 
    title: 'AI & Machine Learning Bootcamp',
    description: 'Hands-on experience with Microsoft Cognitive Services and Azure ML. Build your first AI application using real-world datasets.',
    date: '2025-10-22',
    time: '9:00 AM - 4:00 PM',
    location: 'Online via Microsoft Teams',
    attendees: 78,
    maxAttendees: 100,
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    shortLink: 'https://bit.ly/mtc-ai-bootcamp',
    status: 'upcoming',
    category: 'Artificial Intelligence',
    organizer: 'MTC ISIMM'
  },
  {
    id: '3',
    title: 'Power Platform Developer Session',
    description: 'Currently happening! Join us to explore Power Apps, Power Automate, and Power BI. Create business solutions without traditional coding.',
    date: '2025-09-22',
    time: '3:00 PM - 6:00 PM', 
    location: 'ISIMM Campus - Lab B205',
    attendees: 32,
    maxAttendees: 40,
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    shortLink: 'https://bit.ly/mtc-powerplatform',
    status: 'ongoing',
    category: 'Low-Code Development',
    organizer: 'MTC ISIMM'
  },
  {
    id: '4',
    title: 'Microsoft 365 Security Best Practices',
    description: 'Learn how to secure your organization with Microsoft 365 security tools including Defender, Intune, and compliance features.',
    date: '2025-08-15',
    time: '10:00 AM - 1:00 PM',
    location: 'ISIMM Campus - Amphitheater',
    attendees: 95,
    maxAttendees: 120,
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    status: 'passed',
    category: 'Cybersecurity',
    organizer: 'MTC ISIMM'
  },
  {
    id: '5',
    title: 'DevOps with GitHub and Azure DevOps',
    description: 'Master continuous integration and deployment using GitHub Actions and Azure DevOps. Build robust CI/CD pipelines.',
    date: '2025-07-20',
    time: '1:00 PM - 5:00 PM',
    location: 'ISIMM Campus - Computer Lab',
    attendees: 67,
    maxAttendees: 80,
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    status: 'passed',
    category: 'DevOps',
    organizer: 'MTC ISIMM'
  },
  {
    id: '6',
    title: 'Microsoft Teams App Development',
    description: 'Build custom applications for Microsoft Teams using the Teams Toolkit. Create bots, tabs, and messaging extensions.',
    date: '2025-11-05',
    time: '2:30 PM - 6:30 PM',
    location: 'Hybrid - ISIMM & Online',
    attendees: 23,
    maxAttendees: 50,
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    shortLink: 'https://bit.ly/mtc-teams-dev',
    status: 'upcoming',
    category: 'App Development',
    organizer: 'MTC ISIMM'
  }
];
// Features data
export const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Modern Design',
    description: 'Beautiful, responsive design that works on all devices',
    icon: 'palette'
  },
  {
    id: '2',
    title: 'TypeScript',
    description: 'Full TypeScript support for better development experience',
    icon: 'code'
  },
  {
    id: '3',
    title: 'Performance',
    description: 'Optimized for speed and performance',
    icon: 'zap'
  },
  {
    id: '4',
    title: 'Secure',
    description: 'Built with security best practices in mind',
    icon: 'shield'
  }
];