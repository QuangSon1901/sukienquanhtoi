
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  id: string | number;
  name: string;
  icon: string;
  href: string;
}

const categories: CategoryProps[] = [
  { id: 1, name: 'Âm nhạc', icon: 'https://via.placeholder.com/80?text=Music', href: '#' },
  { id: 2, name: 'Thể thao', icon: 'https://via.placeholder.com/80?text=Sports', href: '#' },
  { id: 3, name: 'Hội thảo', icon: 'https://via.placeholder.com/80?text=Conference', href: '#' },
  { id: 4, name: 'Triển lãm', icon: 'https://via.placeholder.com/80?text=Exhibition', href: '#' },
  { id: 5, name: 'Du lịch', icon: 'https://via.placeholder.com/80?text=Travel', href: '#' },
  { id: 6, name: 'Giảm giá', icon: 'https://via.placeholder.com/80?text=Sale', href: '#' },
];

export const CategorySection = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Danh mục sự kiện</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.href}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              <img 
                src={category.icon} 
                alt={category.name} 
                className="w-16 h-16 rounded-full mb-2"
              />
              <span className="text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
