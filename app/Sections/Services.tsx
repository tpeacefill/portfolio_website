'use client'
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Code2, 
  Paintbrush, 
  Smartphone, 
  RefreshCw, 
  Sparkles,
} from "lucide-react";

const Services = () => {
  const { scrollYProgress } = useScroll();
  
  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  
  const orbScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 1.5]),
    springConfig
  );
  
  const orbOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.2, 0.4]),
    springConfig
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      Icon: Code2,
      number: "01",
      title: "Web Application Development",
      description: "I can get your website or web application up and running with code. Maintaining usability and aesthetics.",
      skills: ["React", "Next.js", "TypeScript"]
    },
    {
      Icon: Paintbrush,
      number: "02",
      title: "UI/UX Design & Prototype",
      description: "Let me put your thoughts together in a design that looks visually appealing and solves a problem while creating a slick experience.",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      Icon: Smartphone,
      number: "03",
      title: "Mobile Application Development",
      description: "As part of the services I provide, I'm well vested into developing mobile app development with simple back-end integration.",
      skills: ["React Native", "Firebase", "UI Design"]
    },
    {
      Icon: RefreshCw,
      number: "04",
      title: "Web Design Refactoring",
      description: "Elevate the web experience for your users when they visit your website or web application. Let's make the old new.",
      skills: ["Performance", "SEO", "Analytics"]
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center bg-black relative overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-0 -left-40 w-96 h-96 bg-[#8A74FF] rounded-full filter blur-[128px]"
        style={{ 
          scale: orbScale,
          opacity: orbOpacity
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#8A74FF] rounded-full filter blur-[128px]"
        style={{ 
          scale: orbScale,
          opacity: orbOpacity
        }}
      />

      {/* Grid Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div 
        className="w-full max-w-[1400px] flex flex-col px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-[#8A74FF]" />
            <span className="text-sm font-light text-[#8A74FF]">Services</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What I can help you with
          </motion.h1>
          
          <motion.p 
            className="text-lg font-thin text-white/60 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transforming ideas into reality through code and design
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
                            hover:bg-white/10 transition-all duration-300
                            hover:border-[#8A74FF]/30 hover:shadow-lg hover:shadow-[#8A74FF]/5">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#8A74FF]/30 transition-all duration-300">
                    <service.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/30 text-sm font-light">{service.number}</span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-white/60 font-thin mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs text-white/80 bg-white/5 rounded-full border border-white/10
                                group-hover:border-[#8A74FF]/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;