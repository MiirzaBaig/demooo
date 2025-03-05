import React from 'react';
import { Monitor, Rocket, Users, Phone, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const glowVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 glass-card z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            whileHover="hover"
            variants={glowVariants}
            className="text-2xl font-bold text-accent glow-effect"
          >
            MT.
          </motion.div>
          <div className="flex gap-8">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
          <div className="flex gap-4">
            <motion.button 
              whileHover="hover"
              variants={glowVariants}
              className="px-4 py-2 text-accent border border-accent rounded-lg hover:bg-accent hover:text-background transition-colors duration-300 glow-effect"
            >
              Log In
            </motion.button>
            <motion.button 
              whileHover="hover"
              variants={glowVariants}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl font-bold text-white mb-6 animate-float"
          >
            Build Websites Effortlessly
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 mb-8"
          >
            From Idea to Live Website - We Make It Seamless
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover="hover"
            variants={glowVariants}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            Start Building <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-white animate-float"
          >
            What We Offer
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Monitor, title: "AI Powered Builder", desc: "Generate layouts tailored to your needs" },
              { icon: Users, title: "Custom UI/UX", desc: "Crafted by expert designers" },
              { icon: Rocket, title: "Fast Deployment", desc: "Get your site live in 6 weeks" },
              { icon: Phone, title: "24/7 Support", desc: "We're here whenever you need help" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                variants={glowVariants}
                className="feature-card group"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:animate-float" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-6 text-white animate-float">Get Started Today</h2>
            <p className="text-gray-400 mb-8">
              Join 1000+ businesses using minimalistic technology to build their dream website
            </p>
            <div className="flex flex-col gap-4">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glow-effect"
              >
                <Mail className="w-6 h-6 text-accent" />
                <span className="text-gray-300">Hi@minimalisticTechnology.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glow-effect"
              >
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-gray-300">+44-000-000-0000</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <motion.img 
              whileHover="hover"
              variants={glowVariants}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-2xl glow-effect"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-white">Minimalistic Learning</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors glow-effect">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors glow-effect">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors glow-effect">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors glow-effect">Book a Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors glow-effect">Domain Name</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors glow-effect">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-sm text-gray-400">
          © 2025 Minimalistic Technology. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;