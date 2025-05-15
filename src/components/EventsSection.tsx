
import React from 'react';
import { EventCard, EventProps } from './EventCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface EventsSectionProps {
  title: string;
  viewAllLink?: string;
  events: EventProps[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  title,
  viewAllLink = "#",
  events
}) => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {viewAllLink && (
            <Button variant="ghost" className="text-skqt-secondary flex items-center text-sm">
              Xem thêm <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};
