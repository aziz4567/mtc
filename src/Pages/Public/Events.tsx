import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import EventCard from '../../Components/Cards/Card';
import { eventsData } from '../../Data/mockData';
import { Calendar, Filter } from 'lucide-react';
import CustomNav from '../../Components/CustomNav';
const Events: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'passed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(eventsData.map(event => event.category)))];

  // Filter events based on selected filters
  const filteredEvents = eventsData.filter(event => {
    const statusMatch = statusFilter === 'all' || event.status === statusFilter;
    const categoryMatch = categoryFilter === 'all' || event.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  // Sort events: ongoing first, then upcoming, then passed
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const statusOrder = { ongoing: 0, upcoming: 1, passed: 2 };
    if (statusOrder[a.status] !== statusOrder[b.status]) {
      return statusOrder[a.status] - statusOrder[b.status];
    }
    // Within same status, sort by date
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const getEventCounts = () => {
    return {
      all: eventsData.length,
      upcoming: eventsData.filter(e => e.status === 'upcoming').length,
      ongoing: eventsData.filter(e => e.status === 'ongoing').length,
      passed: eventsData.filter(e => e.status === 'passed').length
    };
  };

  const counts = getEventCounts();

  return (
    <div>
      <CustomNav></CustomNav>
      <div className="min-h-screen bg-gray-50 py-8">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Calendar className="w-8 h-8 text-base-3 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">MTC Events</h1>
            </div>
            
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'All Events', count: counts.all, color: 'bg-base-1' },
              { label: 'Upcoming', count: counts.upcoming, color: 'bg-green-50' },
              { label: 'Ongoing', count: counts.ongoing, color: 'bg-blue-50' },
              { label: 'Past Events', count: counts.passed, color: 'bg-gray-50' }
            ].map((stat, index) => (
              <div key={index} className={`${stat.color} p-6 rounded-lg text-center`}>
                <div className="text-3xl font-bold text-gray-900">{stat.count}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Filter Events</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-base-3 focus:border-base-3"
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="passed">Past Events</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-base-3 focus:border-base-3"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(statusFilter !== 'all' || categoryFilter !== 'all') && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  {statusFilter !== 'all' && (
                    <span className="bg-base-1 text-base-3 px-2 py-1 rounded text-sm">
                      Status: {statusFilter}
                    </span>
                  )}
                  {categoryFilter !== 'all' && (
                    <span className="bg-base-1 text-base-3 px-2 py-1 rounded text-sm">
                      Category: {categoryFilter}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setStatusFilter('all');
                      setCategoryFilter('all');
                    }}
                    className="text-base-3 hover:text-base-4 text-sm font-medium"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Events Grid */}
          {sortedEvents.length > 0 ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {statusFilter === 'all' ? 'All Events' : 
                   statusFilter === 'upcoming' ? 'Upcoming Events' :
                   statusFilter === 'ongoing' ? 'Ongoing Events' : 'Past Events'}
                  <span className="text-base-3 ml-2">({sortedEvents.length})</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more events.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-base-3 to-base-2 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Want to organize an event?</h3>
              <p className="text-base-1 mb-6">
                Join the MTC community and help organize amazing tech events for everyone!
              </p>
              <button className="bg-white text-base-3 hover:bg-base-1 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;