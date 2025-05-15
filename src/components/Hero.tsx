
import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Sự kiện âm nhạc 2024',
    description: 'Đón chờ những màn trình diễn sôi động từ các ca sĩ hàng đầu',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Giải chạy Marathon',
    description: 'Tham gia cùng hàng ngàn người tại sự kiện thể thao lớn nhất năm',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Triển lãm Công nghệ',
    description: 'Khám phá những công nghệ mới nhất trong thế giới số',
  },
];

export const Hero = () => {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{slide.title}</h2>
                    <p className="text-sm md:text-base text-gray-200 mb-4 max-w-xl">{slide.description}</p>
                    <div>
                      <Button className="bg-skqt-primary hover:bg-skqt-primary/90">
                        Xem chi tiết
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
