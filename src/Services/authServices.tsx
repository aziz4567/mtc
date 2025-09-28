import { User, mockUsers } from '../Data/mockData';

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  private currentUser: User | null = null;
  private authToken: string | null = null;

  // Simulate API delay
  private async simulateApiDelay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Login method
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await this.simulateApiDelay();

    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // In a real app, you'd verify the password
    this.currentUser = user;
    this.authToken = `mock-token-${user.id}`;
    
    // Store in localStorage for persistence
    localStorage.setItem('authToken', this.authToken);
    localStorage.setItem('currentUser', JSON.stringify(user));

    return { 
      success: true, 
      user, 
      token: this.authToken,
      message: 'Login successful'
    };
  }

  // Register method
  async register(userData: RegisterData): Promise<AuthResponse> {
    await this.simulateApiDelay();

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === userData.email);
    if (existingUser) {
      return { success: false, message: 'User already exists' };
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      role: 'user'
    };

    // In a real app, you'd save to database
    mockUsers.push(newUser);
    
    this.currentUser = newUser;
    this.authToken = `mock-token-${newUser.id}`;

    localStorage.setItem('authToken', this.authToken);
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    return { 
      success: true, 
      user: newUser, 
      token: this.authToken,
      message: 'Registration successful'
    };
  }

  // Logout method
  async logout(): Promise<void> {
    this.currentUser = null;
    this.authToken = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
  }

  // Get current user
  getCurrentUser(): User | null {
    if (this.currentUser) return this.currentUser;

    // Try to restore from localStorage
    const storedUser = localStorage.getItem('currentUser');
    const storedToken = localStorage.getItem('authToken');

    if (storedUser && storedToken) {
      this.currentUser = JSON.parse(storedUser);
      this.authToken = storedToken;
      return this.currentUser;
    }

    return null;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Get auth token
  getToken(): string | null {
    return this.authToken || localStorage.getItem('authToken');
  }

  // Check if user has admin role
  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }
}

export const authService = new AuthService();