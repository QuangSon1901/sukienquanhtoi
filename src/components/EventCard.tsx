
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface EventProps {
  id: string | number;
  image: string;
  title: string;
  date: string;
  location: string;
  price: string;
  category?: string;
  className?: string;
}

export const EventCard: React.FC<EventProps> = ({
  id,
  image,
  title,
  date,
  location,
  price,
  category,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden event-card-shadow",
      className
    )}>
      <div className="relative aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {category && (
          <div className="absolute top-3 left-3 bg-skqt-primary text-white text-xs px-2 py-1 rounded">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 h-12 mb-2">{title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        
        <div className="text-sm text-gray-500 mb-3">
          {location}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-skqt-primary font-medium">
            {price}
          </div>
          <Link to={`/event/${id}`}>
            <Button size="sm" variant="outline" className="text-xs border-skqt-primary text-skqt-primary hover:bg-skqt-primary/10">
              Đặt vé
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
