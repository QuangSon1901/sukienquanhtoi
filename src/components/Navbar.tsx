
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = [
  { name: "Âm nhạc", href: "#" },
  { name: "Thể thao", href: "#" },
  { name: "Triển lãm", href: "#" },
  { name: "Hội thảo", href: "#" },
  { name: "Xe & Du lịch", href: "#" },
  { name: "Giảm giá", href: "#" },
];

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-ticketgo-primary">TicketGo</div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              {categories.map((category) => (
                <Link 
                  key={category.name}
                  to={category.href}
                  className="text-sm font-medium text-gray-700 hover:text-ticketgo-primary transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Search Bar - Desktop */}
          {!isMobile && (
            <div className="hidden md:flex w-1/3 relative">
              <Input
                type="text"
                placeholder="Tìm kiếm sự kiện..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="ghost" className="absolute right-0 top-0 h-full" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
            
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Đăng nhập</DropdownMenuItem>
                <DropdownMenuItem>Đăng ký</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Tìm kiếm sự kiện..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="ghost" className="absolute right-4" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Link 
                  key={category.name}
                  to={category.href}
                  className="text-sm font-medium text-gray-700 hover:text-ticketgo-primary transition-colors px-2 py-1"
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
