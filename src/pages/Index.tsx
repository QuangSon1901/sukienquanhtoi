
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategorySection } from '@/components/CategorySection';
import { EventsSection } from '@/components/EventsSection';
import { Footer } from '@/components/Footer';
import { EventProps } from '@/components/EventCard';

// Sample event data
const featuredEvents: EventProps[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Đêm nhạc Trịnh Công Sơn - Diễm Xưa',
    date: '30/05/2024',
    location: 'Nhà hát Hòa Bình, TP. HCM',
    price: '500.000đ - 2.000.000đ',
    category: 'Âm nhạc'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Stand Up Comedy Night - Hài Độc Thoại',
    date: '15/06/2024',
    location: 'The Opera House, Hà Nội',
    price: '350.000đ',
    category: 'Hài kịch'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Music Festival 2024 - Đại nhạc hội mùa hè',
    date: '20-21/07/2024',
    location: 'Sân vận động Mỹ Đình, Hà Nội',
    price: '850.000đ - 3.500.000đ',
    category: 'Âm nhạc'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Hà Nội Marathon 2024',
    date: '08/09/2024',
    location: 'Quanh Hồ Hoàn Kiếm, Hà Nội',
    price: '300.000đ - 800.000đ',
    category: 'Thể thao'
  }
];

const concertEvents: EventProps[] = [
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'BlackPink World Tour - Hà Nội',
    date: '10/08/2024',
    location: 'Sân vận động Mỹ Đình, Hà Nội',
    price: '800.000đ - 4.000.000đ',
    category: 'Âm nhạc'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Westlife Reunion Tour',
    date: '25/07/2024',
    location: 'Sân vận động Quân khu 7, TP. HCM',
    price: '900.000đ - 3.500.000đ',
    category: 'Âm nhạc'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Hòa nhạc Beethoven Symphony',
    date: '14/06/2024',
    location: 'Nhà hát lớn, Hà Nội',
    price: '500.000đ - 1.500.000đ',
    category: 'Âm nhạc'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1578744421428-440a056eda04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    title: 'Music Box - Đêm nhạc acoustic',
    date: '30/05/2024',
    location: 'Soul Live Project, TP. HCM',
    price: '400.000đ',
    category: 'Âm nhạc'
  }
];

const conferenceEvents: EventProps[] = [
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Tech Summit 2024 - Tương lai công nghệ AI',
    date: '22-23/06/2024',
    location: 'GEM Center, TP. HCM',
    price: '1.500.000đ',
    category: 'Hội thảo'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    title: 'Digital Marketing Day 2024',
    date: '15/07/2024',
    location: 'White Palace, TP. HCM',
    price: '900.000đ',
    category: 'Hội thảo'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Ecommerce Vietnam Summit',
    date: '10/08/2024',
    location: 'Sheraton Hotel, Hà Nội',
    price: '1.000.000đ',
    category: 'Hội thảo'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Finance & Investment Forum',
    date: '20/09/2024',
    location: 'Rex Hotel, TP. HCM',
    price: '1.200.000đ',
    category: 'Hội thảo'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <EventsSection 
          title="Sự kiện nổi bật" 
          events={featuredEvents} 
          viewAllLink="#"
        />
        <EventsSection 
          title="Concert & Âm nhạc" 
          events={concertEvents} 
          viewAllLink="#"
        />
        <EventsSection 
          title="Hội thảo & Workshop" 
          events={conferenceEvents} 
          viewAllLink="#"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
