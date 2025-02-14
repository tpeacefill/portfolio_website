'use client'

import React from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Layout, Code2, Figma, Palette, Layers, Box, Crop, Code, Globe, Sparkles, AppWindow } from 'lucide-react';

const Expertise = () => {
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, -50]
  );

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  );

  const expertiseCards = [
    {
      number: "01",
      title: "UI/UX Design",
      description: "I specialize in creating intuitive and engaging digital experiences by combining aesthetics with usability.",
      icon: <Layout className="w-6 h-6 text-[#8A74FF]" />,
      gradient: "from-[#8A74FF]/20 to-transparent",
      skills: [
        {
          title: "Interface Design",
          icon: <Layers className="w-5 h-5" />,
          description: "Creating clean, modern user interfaces with attention to detail"
        },
        {
          title: "Design Systems",
          icon: <Box className="w-5 h-5" />,
          description: "Building scalable and consistent design systems"
        },
        {
          title: "Prototyping",
          icon: <Crop className="w-5 h-5" />,
          description: "Interactive prototypes and animations"
        }
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "Principle"],
      experience: "2+ years of experience in creating digital products",
      processSteps: ["Research", "Wireframing", "UI Design", "Prototyping", "Testing"]
    },
    {
      number: "02",
      title: "Front-end Development",
      description: "Creating stunning and responsive UIs for websites, web applications, and mobile apps with code is what I do.",
      icon: <Code2 className="w-6 h-6 text-[#8A74FF]" />,
      gradient: "from-[#8A74FF]/20 to-transparent",
      skills: [
        {
          title: "Modern Frameworks",
          icon: <Globe className="w-5 h-5" />,
          description: "Expert in React, Next.js, and modern web technologies"
        },
        {
          title: "Clean Code",
          icon: <Code className="w-5 h-5" />,
          description: "Writing maintainable, efficient, and scalable code"
        },
        {
          title: "Animations",
          icon: <Sparkles className="w-5 h-5" />,
          description: "Crafting smooth animations and micro-interactions"
        }
      ],
      tools: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      experience: "3+ years of front-end development experience",
      processSteps: ["Planning", "Development", "Testing", "Optimization", "Deployment"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden py-20">
      {/* Background grid */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#8A74FF15 1px, transparent 1px), linear-gradient(to right, #8A74FF15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <m.div
          style={{
            y: headerY,
            opacity: headerOpacity
          }}
          className="mb-20"
        >
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white/50 font-light mb-2">
              I am Peacefill Tawiah
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-light">
              An expert in two different fields...
            </h1>
          </m.div>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {expertiseCards.map((card, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl" />
              <div className="relative backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl md:text-5xl text-white/30 font-light">
                      {card.number}
                    </span>
                    <div className="p-3 bg-white/5 rounded-xl">
                      {card.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl text-white font-light mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-white/60 font-thin mb-8">
                    {card.description}
                  </p>

                  {/* Skills Section */}
                  <div className="space-y-6 mb-8">
                    {card.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/skill">
                        <div className="p-2 bg-white/5 rounded-lg group-hover/skill:bg-white/10 transition-colors">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-white text-lg font-light mb-1">{skill.title}</h4>
                          <p className="text-white/60 text-sm">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools & Tech */}
                  <div className="mb-8">
                    <h4 className="text-white/80 text-lg font-light mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/60 hover:bg-white/10 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Process */}
                  <div className="space-y-4">
                    <p className="text-white/70 font-light">{card.experience}</p>
                    <div>
                      <h4 className="text-white/80 text-lg font-light mb-3">Process</h4>
                      <div className="flex flex-wrap gap-4">
                        {card.processSteps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#8A74FF]/20 flex items-center justify-center text-sm text-white/60">
                              {idx + 1}
                            </span>
                            <span className="text-white/60 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#8A74FF]/5 rounded-full blur-3xl group-hover:bg-[#8A74FF]/10 transition-colors duration-500" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;