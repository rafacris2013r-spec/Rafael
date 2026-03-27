import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Disc, 
  Settings2, 
  Zap, 
  CircleDot, 
  Gauge, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  Star,
  MessageCircle,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black py-3 shadow-lg' : 'bg-brand-black/80 md:bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-brand-yellow p-1 rounded-sm md:p-1.5">
            <Wrench className="text-brand-black w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-2xl font-black tracking-tighter text-white">
            ÁGIL <span className="text-brand-yellow">AUTO CENTER</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-white/90 hover:text-brand-yellow transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5594992072772" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-yellow text-brand-black px-5 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-white hover:text-brand-yellow transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5594992072772" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-brand-yellow text-brand-black text-center py-3 rounded-sm font-bold uppercase"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://loremflickr.com/1920/1080/car,mechanic,workshop" 
          alt="Oficina Mecânica" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
            Especialistas em Marabá
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter">
            Manutenção automotiva com <span className="text-brand-yellow">confiança</span> em Marabá
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-8 md:text-xl md:mb-10 font-medium leading-relaxed">
            Na Ágil Auto Center, seu veículo recebe cuidado profissional com qualidade e segurança. Tecnologia de ponta e equipe qualificada para você rodar tranquilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-brand-yellow text-brand-black px-8 py-4 rounded-sm font-black text-lg uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center group"
            >
              Solicitar orçamento
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5594992072772" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-sm font-black text-lg uppercase tracking-wider hover:bg-white hover:text-brand-black transition-all flex items-center justify-center"
            >
              <MessageCircle className="mr-2" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Settings2 size={40} />,
      title: "Manutenção Geral",
      desc: "Revisão completa de todos os sistemas do seu veículo para prevenir problemas futuros.",
      benefit: "Mais vida útil para seu motor."
    },
    {
      icon: <Disc size={40} />,
      title: "Freios",
      desc: "Troca de pastilhas, discos e fluídos com precisão para garantir sua parada segura.",
      benefit: "Segurança total em frenagens."
    },
    {
      icon: <CircleDot size={40} />,
      title: "Suspensão",
      desc: "Amortecedores e componentes revisados para maior conforto e estabilidade ao dirigir.",
      benefit: "Estabilidade e conforto garantidos."
    },
    {
      icon: <Zap size={40} />,
      title: "Injeção Eletrônica",
      desc: "Diagnóstico computadorizado para otimizar o consumo e desempenho do motor.",
      benefit: "Economia real de combustível."
    },
    {
      icon: <Gauge size={40} />,
      title: "Pneus",
      desc: "Venda e instalação de pneus das melhores marcas com garantia de qualidade.",
      benefit: "Melhor aderência e segurança."
    },
    {
      icon: <CircleDot size={40} />,
      title: "Alinhamento",
      desc: "Alinhamento e balanceamento 3D para evitar o desgaste irregular dos pneus.",
      benefit: "Direção leve e pneus duráveis."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-brand-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tighter">
            Cuidado Profissional em <span className="text-brand-yellow">Cada Detalhe</span>
          </h3>
          <div className="w-16 md:w-20 h-1.5 md:h-2 bg-brand-yellow mx-auto mt-4 md:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 border-b-4 border-transparent hover:border-brand-yellow transition-all shadow-sm group"
            >
              <div className="text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-brand-black mb-4 uppercase tracking-tight">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center text-sm font-bold text-brand-black bg-brand-yellow/10 px-3 py-2 rounded-sm inline-flex">
                <ShieldCheck size={16} className="mr-2 text-brand-yellow" />
                {service.benefit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const differentials = [
    {
      icon: <UserCheck size={32} />,
      title: "Equipe Especializada",
      desc: "Mecânicos certificados e em constante treinamento técnico."
    },
    {
      icon: <Clock size={32} />,
      title: "Atendimento Rápido",
      desc: "Respeitamos seu tempo com agilidade nos processos e entregas."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Transparência",
      desc: "Orçamentos claros e peças com garantia de procedência."
    },
    {
      icon: <Zap size={32} />,
      title: "Qualidade Premium",
      desc: "Utilizamos as melhores ferramentas e peças do mercado."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-brand-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">Diferenciais</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8">
              Por que escolher a <span className="text-brand-yellow">Ágil Auto Center?</span>
            </h3>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Somos referência em Marabá por unir tecnologia automotiva com um atendimento humano e transparente. Nosso compromisso é com a sua segurança e a performance do seu veículo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentials.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-brand-yellow mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 border-brand-yellow z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-brand-yellow z-10"></div>
            <img 
              src="https://loremflickr.com/1000/1000/mechanic,car,engine" 
              alt="Mecânico trabalhando" 
              className="w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-brand-black p-8 rounded-sm shadow-2xl text-center min-w-[200px]">
              <div className="text-5xl font-black mb-1">+10</div>
              <div className="text-xs font-black uppercase tracking-widest">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Carlos Eduardo",
      role: "Cliente há 3 anos",
      text: "O melhor atendimento de Marabá. Transparência total no orçamento e serviço de primeira. Recomendo a todos!",
      rating: 5
    },
    {
      name: "Mariana Souza",
      role: "Proprietária de SUV",
      text: "Levei meu carro para revisão de suspensão e ficou perfeito. Equipe muito educada e ágil como o nome diz.",
      rating: 5
    },
    {
      name: "Ricardo Oliveira",
      role: "Empresário",
      text: "Confiança é tudo quando se trata de mecânica. Na Ágil eu sei que meu carro está em boas mãos.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-brand-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">Prova Social</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tighter">
            Quem conhece, <span className="text-brand-yellow">recomenda</span>
          </h3>
          <div className="w-16 md:w-20 h-1.5 md:h-2 bg-brand-yellow mx-auto mt-4 md:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative">
              <div className="flex text-brand-yellow mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-black text-brand-black mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-black">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://loremflickr.com/800/800/car,tire",
    "https://loremflickr.com/800/800/car,engine",
    "https://loremflickr.com/800/800/car,brakes",
    "https://loremflickr.com/800/800/car,service",
    "https://loremflickr.com/800/800/car,diagnostic",
    "https://loremflickr.com/800/800/car,dashboard"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-brand-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">Nossa Oficina</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tighter">
            Galeria de <span className="text-brand-yellow">Serviços</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden rounded-sm bg-gray-200"
            >
              <img 
                src={img} 
                alt={`Galeria ${idx}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formState.name}. Gostaria de um orçamento para ${formState.service}. Meu telefone é ${formState.phone}.`;
    const whatsappUrl = `https://wa.me/5594992072772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-brand-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">Contato</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8">
              Solicite seu <span className="text-brand-yellow">Orçamento</span>
            </h3>
            <p className="text-white/70 mb-12 text-lg">
              Preencha o formulário ou entre em contato diretamente pelo WhatsApp. Atendemos toda a região de Marabá com rapidez e eficiência.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-yellow/10 p-3 rounded-sm mr-4">
                  <MapPin className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest text-brand-yellow mb-1">Localização</h4>
                  <p className="text-white/80">Marabá, Pará - Atendemos em toda a cidade</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-yellow/10 p-3 rounded-sm mr-4">
                  <Phone className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest text-brand-yellow mb-1">Telefone / WhatsApp</h4>
                  <p className="text-white/80">(94) 99207-2772</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-yellow/10 p-3 rounded-sm mr-4">
                  <Clock className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest text-brand-yellow mb-1">Horário</h4>
                  <p className="text-white/80">Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-sm shadow-2xl">
            <h4 className="text-brand-black text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 tracking-tight">Fale Conosco</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 text-brand-black focus:border-brand-yellow outline-hidden transition-all"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Telefone</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 text-brand-black focus:border-brand-yellow outline-hidden transition-all"
                  placeholder="(94) 00000-0000"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Serviço Desejado</label>
                <select 
                  required
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 text-brand-black focus:border-brand-yellow outline-hidden transition-all"
                  value={formState.service}
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Manutenção Geral">Manutenção Geral</option>
                  <option value="Freios">Freios</option>
                  <option value="Suspensão">Suspensão</option>
                  <option value="Injeção Eletrônica">Injeção Eletrônica</option>
                  <option value="Pneus / Alinhamento">Pneus / Alinhamento</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-yellow text-brand-black p-5 rounded-sm font-black uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all flex items-center justify-center group"
              >
                Enviar Solicitação
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="h-[450px] w-full bg-gray-200 relative">
      {/* Placeholder for Google Maps - In a real app, use Google Maps Embed API */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
        <div className="text-center p-8 bg-white/90 shadow-xl rounded-sm max-w-md mx-4">
          <MapPin className="text-brand-yellow w-12 h-12 mx-auto mb-4" />
          <h4 className="text-xl font-black uppercase mb-2">Estamos em Marabá</h4>
          <p className="text-gray-600 text-sm mb-4">Visite nossa oficina e comprove a qualidade dos nossos serviços.</p>
          <a 
            href="https://www.google.com/maps/search/Ágil+Auto+Center+Marabá" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-yellow font-bold uppercase text-xs tracking-widest hover:underline"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
      {/* Real Embed (Optional/Simulated) */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127116.48866164244!2d-49.1246473!3d-5.3582483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c23724a7374017%3A0x7d6c6e765586666!2sMarab%C3%A1%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1711560000000!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="opacity-60 grayscale"
      ></iframe>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-yellow p-1.5 rounded-sm">
                <Wrench className="text-brand-black w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                ÁGIL <span className="text-brand-yellow">AUTO CENTER</span>
              </span>
            </div>
            <p className="text-white/50 max-w-md mb-8 leading-relaxed">
              Especialistas em manutenção automotiva em Marabá. Oferecemos serviços de alta qualidade para garantir sua segurança e o melhor desempenho do seu veículo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-brand-yellow">Serviços</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#servicos" className="hover:text-brand-yellow transition-colors">Manutenção Geral</a></li>
              <li><a href="#servicos" className="hover:text-brand-yellow transition-colors">Freios e Suspensão</a></li>
              <li><a href="#servicos" className="hover:text-brand-yellow transition-colors">Injeção Eletrônica</a></li>
              <li><a href="#servicos" className="hover:text-brand-yellow transition-colors">Pneus e Alinhamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-brand-yellow">Contato</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center"><Phone size={14} className="mr-2" /> (94) 99207-2772</li>
              <li className="flex items-center"><MapPin size={14} className="mr-2" /> Marabá, PA</li>
              <li className="flex items-center"><Clock size={14} className="mr-2" /> Seg-Sáb</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-bold uppercase tracking-widest">
          <p>© 2026 ÁGIL AUTO CENTER. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="mt-4 md:mt-0">DESENVOLVIDO COM FOCO EM RESULTADOS</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloating = () => {
  return (
    <a 
      href="https://wa.me/5594992072772" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-brand-black px-4 py-2 rounded-sm text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
        Falar no WhatsApp
      </span>
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
