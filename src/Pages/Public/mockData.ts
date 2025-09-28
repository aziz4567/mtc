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