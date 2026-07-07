'use client';

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Cake, 
  Heart 
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Queques Especiales', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Historia', href: '#' },
    { name: 'Preguntas Frecuentes', href: '#' },
  ];

const premiumCakes = [
    {
      id: 1,
      name: "Delicia de Cereza",
      desc: "Bizcocho suave con crema chantilly y cerezas frescas.",
      price: "₡15,000",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "Red Velvet Premium",
      desc: "El clásico americano con nuestro toque secreto de la casa.",
      price: "₡18,500",
      img: "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      name: "Fantasía de Frutas",
      desc: "Explosión cítrica y dulce con frutas de temporada.",
      price: "₡16,000",
      img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600"
    }
];

export default function BakeryProposalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffafa] text-slate-800 selection:bg-pink-100 selection:text-pink-600">
      
      {/* Barra de Contacto Superior */}
      <div className="hidden lg:flex bg-pink-600 text-white py-2 px-8 justify-between text-sm font-medium">
        <div className="flex gap-6">
          <a href="tel:+50624300522" className="flex items-center gap-2 hover:text-pink-100 transition-colors">
            <Phone size={14} /> +(506) 2430-0522
          </a>
          <a href="https://wa.me/50684126664" className="flex items-center gap-2 hover:text-pink-100 transition-colors">
            <MessageCircle size={14} /> +(506) 8412-6664
          </a>
        </div>
        <a href="mailto:pasteleriainglesacr@gmail.com" className="flex items-center gap-2 hover:text-pink-100 transition-colors">
          <Mail size={14} /> pasteleriainglesacr@gmail.com
        </a>
      </div>

      {/* Navegación */}
      <nav className={cn('sticky top-0 z-50 transition-all duration-300', scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5')}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <Cake size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-pink-600 leading-none">Pastelería</h1>
              <span className="text-sm font-serif italic text-slate-500">Inglesa</span>
            </div>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-pink-700 transition-all shadow-lg shadow-pink-200">
              PEDIR AHORA
            </button>
          </div>

          {/* Botón Móvil */}
          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-medium text-slate-700 hover:text-pink-600">
                  {link.name}
                </a>
              ))}
              <button className="bg-pink-600 text-white w-full py-3 rounded-xl font-bold mt-2">
                Realizar Pedido
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1600" 
            alt="Hero Cake" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Tradición desde hace 30 años
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Momentos Dulces, <br />
              <span className="text-pink-600">Recetas Únicas.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Creamos arte comestible para tus celebraciones más especiales. Cada pastel es una historia de dedicación y amor por la repostería fina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-bold hover:bg-pink-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-pink-200">
                Ver Menú <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white text-pink-600 border-2 border-pink-100 rounded-2xl font-bold hover:border-pink-300 transition-all flex items-center justify-center gap-2">
                Conoce nuestra historia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios / Historia Corta */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Más de 30 Años</h3>
              <p className="text-slate-500 leading-relaxed">
                Tres décadas perfeccionando el arte de la repostería para llevar el mejor sabor a tu mesa.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Hecho con Amor</h3>
              <p className="text-slate-500 leading-relaxed">
                Utilizamos ingredientes frescos y técnicas artesanales para garantizar una experiencia inigualable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pedidos Personalizados</h3>
              <p className="text-slate-500 leading-relaxed">
                Si buscas algo único, somos tu mejor opción. Cuéntanos tu idea y nosotros la convertimos en pastel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Línea Premium */}
      <section className="py-24 bg-pink-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Línea Premium</h2>
              <p className="text-slate-600 max-w-xl">
                Nuestra selección exclusiva de queques de venta inmediata. Calidad insuperable y diseños listos para impresionar.
              </p>
            </div>
            <a href="#" className="text-pink-600 font-bold flex items-center gap-1 hover:underline">
              Ver todos los productos <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumCakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={cake.img} 
                    alt={cake.name}
                    fill 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-pink-600 text-sm">
                    {cake.price}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2">{cake.name}</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {cake.desc}
                  </p>
                  <button className="w-full py-3 bg-slate-50 text-slate-800 rounded-xl font-bold hover:bg-pink-600 hover:text-white transition-colors">
                    Hacer Pedido
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horario y Contacto */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decoración Fondo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-serif font-bold mb-8">Horario de Atención</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Lunes a Sábado</p>
                    <p className="text-slate-400">6:00 A.M. – 6:00 P.M.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Domingos</p>
                    <p className="text-slate-400">6:00 A.M. – 12:00 P.M.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">¿Deseas hablar con nosotros?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Utiliza nuestro botón de WhatsApp para consultas rápidas o llámanos directamente para pedidos especiales.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] py-4 rounded-xl font-bold transition-all">
                  <MessageCircle size={20} /> WhatsApp
                </button>
                <button className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 py-4 rounded-xl font-bold transition-all">
                  <Phone size={20} /> Llamar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fffafa] border-t border-slate-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
              <Cake size={16} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-pink-600">Pastelería Inglesa</h1>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-pink-600 hover:shadow-lg transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-pink-600 hover:shadow-lg transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-pink-600 hover:shadow-lg transition-all">
              <MessageCircle size={20} />
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            © 2024 Pastelería Inglesa. Todos los derechos reservados. <br className="sm:hidden" />
            Hecho con amor en Costa Rica.
          </p>
        </div>
      </footer>

      {/* Botón WhatsApp Flotante */}
      <a 
        href="https://wa.me/50684126664"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[100]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
