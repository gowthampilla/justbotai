'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const controls = useAnimation();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "JustBot AI";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const ballControls = useAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const promptSuggestions = [
    {
      text: "I want a noise-canceling headset for long flights",
      href: "/?q=I+want+a+noise-canceling+headset+for+long+flights",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Help me pick an outfit that will look good on camera",
      href: "/?q=Help+me+pick+an+outfit+that+will+look+good+on+camera",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Write an email to request a quote from local plumbers",
      href: "/?q=Write+an+email+to+request+a+quote+from+local+plumbers",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Cycling groups open to beginners",
      href: "/?q=Cycling+groups+open+to+beginners",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Write a Python script to automate sending daily email reports",
      href: "/?q=Write+a+Python+script+to+automate+sending+daily+email+reports",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Best productivity apps for remote workers",
      href: "/?q=Best+productivity+apps+for+remote+workers",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Healthy meal prep ideas for busy professionals",
      href: "/?q=Healthy+meal+prep+ideas+for+busy+professionals",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "How to improve my public speaking skills",
      href: "/?q=How+to+improve+my+public+speaking+skills",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Tips for negotiating a higher salary",
      href: "/?q=Tips+for+negotiating+a+higher+salary",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    },
    {
      text: "Beginner's guide to investing in stocks",
      href: "/?q=Beginner's+guide+to+investing+in+stocks",
      color: "bg-blue-900/20",
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      textColor: "group-hover:text-blue-300"
    }
  ];

  const sections = [
    {
      id: 'hero',
      title: 'JustBot AI',
      description: 'Advanced artificial intelligence for everyone',
      size: 'text-5xl sm:text-6xl lg:text-7xl',
      contentClass: ''
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      description: 'See JustBot in action with this quick demo',
      size: 'text-4xl sm:text-5xl',
      contentClass: ''
    },
    {
      id: 'capabilities',
      title: 'Capabilities',
      description: 'Explore what JustBot can do for you',
      size: 'text-4xl sm:text-5xl',
      contentClass: ''
    },
    {
      id: 'demos',
      title: 'Demos',
      description: 'See JustBot in action',
      size: 'text-4xl sm:text-5xl',
      contentClass: ''
    }
  ];

  const demoVideos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Natural Language Processing Demo",
      description: "See how JustBot understands and responds to complex queries with human-like comprehension."
    },
    {
      id: "oHg5SJYRHA0",
      title: "Code Generation Walkthrough",
      description: "Watch JustBot generate functional code snippets from natural language descriptions."
    },
    {
      id: "jNQXAC9IVRw",
      title: "Voice Interaction Showcase",
      description: "Experience JustBot's natural voice conversation capabilities."
    },
    {
      id: "DLzxrzFCyOs",
      title: "Task Automation Tutorial",
      description: "Learn how to automate repetitive tasks with JustBot's powerful workflow engine."
    }
  ];

  const setSectionRef = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el as HTMLDivElement;
  };

  useEffect(() => {
    // Ball bounce animation - 3 times only
    ballControls.start({
      y: [0, -20, 0, -20, 0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: 0,
        ease: "easeOut"
      }
    });

    // Typing animation
    if (!typingComplete) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setTypingComplete(true);
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [typingComplete, ballControls]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 1.5) {
            controls.start({ opacity: 1, y: 0 });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollLeft = 0;

    const scroll = () => {
      scrollLeft += 0.5;
      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollLeft;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videoStarted) {
            setVideoStarted(true);
            if (videoRef.current) {
              videoRef.current.src = `https://www.youtube.com/embed/8CEoIyVvwko?autoplay=1&mute=1&rel=0&enablejsapi=1`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoStarted]);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <nav className="fixed top-0 w-full z-50 p-4 sm:p-6 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 flex items-center">
          <motion.span 
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black mr-2"
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut"
            }}
          />
          JustBot
        </h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
            >
              {section.title}
            </Link>
          ))}
          <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
            Research
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          display: mobileMenuOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg md:hidden overflow-hidden"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -20
              }}
              transition={{ 
                duration: 0.3,
                delay: mobileMenuOpen ? index * 0.1 : 0,
                ease: "easeInOut"
              }}
            >
              <Link
                href={`#${section.id}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.title}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              x: mobileMenuOpen ? 0 : -20
            }}
            transition={{ 
              duration: 0.3,
              delay: mobileMenuOpen ? sections.length * 0.1 : 0,
              ease: "easeInOut"
            }}
          >
            <Link
              href="/research"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <main className="pt-20 sm:pt-24">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            ref={(el) => setSectionRef(el, index)}
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20 min-h-[90vh] ${
              section.id === 'hero' ? 'bg-gradient-to-b from-white to-gray-100' : 'bg-white'
            }`}
          >
            <div className={`${section.contentClass || ''} w-full max-w-4xl mx-auto`}>
              <h2 className={`${section.size} font-bold text-gray-900 mb-6 leading-tight flex items-center justify-center`}>
                {section.id === 'hero' ? (
                  <>
                    <motion.span
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black mr-3 sm:mr-4"
                      animate={ballControls}
                    />
                    <span className="relative">
                      {typedText}
                      {!typingComplete && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                          className="absolute -right-3 top-0 h-full w-1 bg-black"
                        />
                      )}
                    </span>
                  </>
                ) : (
                  <>
                    <motion.span
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black mr-3 sm:mr-4"
                      whileHover={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 20, -20, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    {section.title}
                  </>
                )}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {section.description}
              </p>

              {section.id === 'hero' && (
                <div className="space-y-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      href="/beta" 
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-md bg-gray-900 hover:bg-gray-800 text-white font-medium text-base sm:text-lg transition-all duration-300 shadow hover:shadow-md"
                    >
                      Try JustBot
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>

                  <div className="mt-8 sm:mt-12 w-full">
                    <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-4">Try asking JustBot...</h3>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
                      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
                      
                      <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-hidden py-4"
                      >
                        <div className="flex items-center whitespace-nowrap">
                          {[...promptSuggestions, ...promptSuggestions].map((prompt, idx) => (
                            <motion.div
                              key={`scroll-${idx}`}
                              className={`${prompt.color} mx-2 p-3 sm:p-4 group flex-shrink-0 rounded-lg border ${prompt.border} ${prompt.hover} transition-all duration-300`}
                              whileHover={{ scale: 1.05 }}
                              style={{ minWidth: '260px' }}
                            >
                              <Link
                                href={prompt.href}
                                className={`text-sm ${prompt.textColor} transition-colors duration-250 whitespace-normal`}
                              >
                                {prompt.text}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {section.id === 'how-it-works' && (
                <div className="w-full max-w-6xl mx-auto">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <iframe
                      ref={videoRef}
                      className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0"
                      title="How JustBot Works"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: "Easy Setup",
                        description: "Get started in minutes with our simple onboarding process"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ),
                        title: "Lightning Fast",
                        description: "Get responses in seconds with our optimized AI models"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        ),
                        title: "Secure & Private",
                        description: "Your data is always protected with enterprise-grade security"
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-4 sm:p-6 rounded-lg"
                      >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mb-3 sm:mb-4 mx-auto">
                          {feature.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {section.id === 'capabilities' && (
                <div className="mt-8 sm:mt-12 w-full max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16">
                    {[
                      {
                        title: "Chat Interface",
                        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                      },
                      {
                        title: "Voice Assistant",
                        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9pY2UlMjBhc3Npc3RhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                      },
                      {
                        title: "Code Generation",
                        image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                      },
                      {
                        title: "Image Creation",
                        image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YWklMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                      },
                      {
                        title: "Data Analysis",
                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                      },
                      {
                        title: "Document Processing",
                        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdW1lbnQlMjBwcm9jZXNzaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                      },
                    ].map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group overflow-hidden rounded-xl aspect-square"
                      >
                        <img 
                          src={capability.image} 
                          alt={capability.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-white font-medium text-sm sm:text-base md:text-lg">
                            {capability.title}
                          </h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                      Ready to experience JustBot?
                    </h3>
                    <Link 
                      href="/get-started" 
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-base sm:text-lg transition-all duration-300 shadow hover:shadow-md"
                    >
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              {section.id === 'demos' && (
                <div className="w-full max-w-6xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    See JustBot in Action
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
                    {demoVideos.map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
                      >
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                        <div className="bg-white p-3 sm:p-4">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                            {video.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600">
                            {video.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 sm:mt-12 text-center">
                    <Link
                      href="/demos"
                      className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow hover:shadow-md"
                    >
                      View All Demos
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        ))}

        <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">JustBot</h3>
              <p className="text-xs sm:text-sm">
                Advanced artificial intelligence for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Product</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/features" className="hover:text-white transition-colors text-xs sm:text-sm">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors text-xs sm:text-sm">Pricing</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors text-xs sm:text-sm">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/about" className="hover:text-white transition-colors text-xs sm:text-sm">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors text-xs sm:text-sm">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors text-xs sm:text-sm">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/research" className="hover:text-white transition-colors text-xs sm:text-sm">Research</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors text-xs sm:text-sm">Documentation</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors text-xs sm:text-sm">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-xs sm:text-sm text-center">
            <p>© {new Date().getFullYear()} JustBot AI. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
