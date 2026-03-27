import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import AISection from './components/AISection';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import WhyAventa from './components/WhyAventa';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  if (isAdmin) {
    return <AdminDashboard onBack={() => setIsAdmin(false)} />;
  }

  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900 dark:bg-slate-950">
      <Navbar onJoinClick={toggleModal} />
      
      <main>
        <Hero onJoinClick={toggleModal} />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <AISection />
        <Testimonials />
        <WhyAventa />
        <CTASection onJoinClick={toggleModal} />
      </main>

      <Footer onAdminClick={() => setIsAdmin(true)} />

      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
