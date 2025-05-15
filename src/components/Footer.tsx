
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TicketGo</h3>
            <p className="text-sm text-gray-600 mb-4">
              Nền tảng mua vé sự kiện hàng đầu Việt Nam
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-ticketgo-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-ticketgo-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-ticketgo-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-ticketgo-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Hỗ trợ khách hàng
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Danh mục</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Âm nhạc
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Thể thao
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Hội thảo
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-ticketgo-primary">
                  Triển lãm
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  support@ticketgo.vn
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  1900 6969
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} TicketGo Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
