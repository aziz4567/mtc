import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import { useAuth } from '../../Context/AuthContext';
import { BarChart3, Users, TrendingUp, Activity, Calendar, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
            <p className="text-gray-600 mb-8">Please log in to access the dashboard.</p>
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Go to Login
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  const stats = [
    {
      name: 'Total Projects',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: BarChart3
    },
    {
      name: 'Active Users',
      value: '1,247',
      change: '+8%',
      changeType: 'positive',
      icon: Users
    },
    {
      name: 'Revenue',
      value: '$48,291',
      change: '+18%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      name: 'Performance',
      value: '98.2%',
      change: '+2%',
      changeType: 'positive',
      icon: Activity
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Project deployed', time: '15 minutes ago', type: 'deployment' },
    { id: 3, action: 'Database backup completed', time: '1 hour ago', type: 'system' },
    { id: 4, action: 'Payment processed', time: '2 hours ago', type: 'payment' },
    { id: 5, action: 'New feature released', time: '4 hours ago', type: 'feature' }
  ];

  return (
    <Layout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600 mt-2">
                Here's what's happening with your projects today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                <Calendar className="h-4 w-4" />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className={`text-sm mt-2 flex items-center ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'user' ? 'bg-green-500' :
                    activity.type === 'deployment' ? 'bg-blue-500' :
                    activity.type === 'system' ? 'bg-yellow-500' :
                    activity.type === 'payment' ? 'bg-purple-500' :
                    'bg-indigo-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                <div className="font-medium text-gray-900">Create New Project</div>
                <div className="text-sm text-gray-500">Start a new project from scratch</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                <div className="font-medium text-gray-900">Invite Team Member</div>
                <div className="text-sm text-gray-500">Add someone to your workspace</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                <div className="font-medium text-gray-900">View Analytics</div>
                <div className="text-sm text-gray-500">Check your project metrics</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                <div className="font-medium text-gray-900">Upgrade Plan</div>
                <div className="text-sm text-gray-500">Access premium features</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;