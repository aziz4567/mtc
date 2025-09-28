import React from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees?: number;
  imageUrl?: string;
  shortLink?: string;
  status: 'upcoming' | 'ongoing' | 'passed';
  category: string;
  organizer: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  imageUrl,
  shortLink,
  status,
  category,
  organizer
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'upcoming': return 'text-green-600 bg-green-50';
      case 'ongoing': return 'text-blue-600 bg-blue-50';
      case 'passed': return 'text-gray-500 bg-gray-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Event Image */}
      {imageUrl && (
        <div className="h-48 bg-gradient-to-r from-base-3 to-base-2 relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient background if image fails
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Status Badge */}
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {/* Category & Organizer */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-base-3 text-sm font-medium bg-base-1 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-gray-500 text-sm">
            by {organizer}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {/* Date & Time */}
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="line-clamp-1">{location}</span>
          </div>

          {/* Attendees */}
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-2" />
            <span>
              {attendees} {maxAttendees ? `/ ${maxAttendees}` : ''} attendees
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          {/* Main Action Button */}
          <button 
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
              status === 'passed' 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : status === 'ongoing'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-base-3 hover:bg-base-4 text-white'
            }`}
            disabled={status === 'passed'}
          >
            {status === 'passed' ? 'Event Ended' : 
             status === 'ongoing' ? 'Join Now' : 'Register'}
          </button>

          {/* Short Link */}
          {shortLink && (
            <button 
              onClick={() => window.open(shortLink, '_blank')}
              className="flex items-center text-base-3 hover:text-base-4 text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Link
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;