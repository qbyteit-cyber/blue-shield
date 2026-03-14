'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';
import { HeroSvg1, HeroSvg2, HeroSvg3 } from './hero-images';

export interface HeroSlide {
  id: string;
  category: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

const fallbacks = [HeroSvg1, HeroSvg2, HeroSvg3];

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;

    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isHovered]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    // Timer will reset normally due to state change and effect
  };

  if (!slides || slides.length === 0) return null;

  return (
    <section 
      className={styles.hero}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="Featured Articles"
    >
      <div className={styles.heroGlow}></div>
      <div className={styles.heroWaves} aria-hidden="true">
        <svg viewBox="0 0 720 420" fill="none" preserveAspectRatio="xMaxYMid slice" style={{ width: '100%', height: '100%' }}>
          <path d="M-40 70  Q240 30  500 170 T780 130" stroke="white" strokeWidth="1.1" fill="none" opacity=".18"/>
          <path d="M-40 130 Q240 90  500 230 T780 190" stroke="white" strokeWidth=".95" fill="none" opacity=".16"/>
          <path d="M-40 190 Q240 150 500 290 T780 250" stroke="white" strokeWidth=".8"  fill="none" opacity=".14"/>
          <path d="M-40 250 Q240 210 500 350 T780 310" stroke="white" strokeWidth=".65" fill="none" opacity=".12"/>
          <path d="M-40 310 Q240 270 500 400 T780 370" stroke="white" strokeWidth=".5"  fill="none" opacity=".1"/>
          <path d="M-40 370 Q240 330 500 450 T780 430" stroke="white" strokeWidth=".4"  fill="none" opacity=".08"/>
          <path d="M-40 20  Q220  0  460 120 T760 80"  stroke="white" strokeWidth=".75" fill="none" opacity=".14"/>
        </svg>
      </div>

      <div role="tablist" className="sr-only">
        {slides.map((slide, i) => (
          <button 
            key={`tab-${slide.id}`}
            role="tab" 
            aria-selected={current === i} 
            aria-controls={`panel-${slide.id}`}
            id={`tab-${slide.id}`}
          >
            Slide {i + 1}
          </button>
        ))}
      </div>

      {slides.map((slide, i) => {
        const isActive = current === i;
        const FallbackSvg = fallbacks[i % fallbacks.length];
        
        return (
          <div 
            key={slide.id}
            id={`panel-${slide.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${slide.id}`}
            aria-hidden={!isActive}
            className={`${styles.heroSlide} ${isActive ? styles.heroSlideActive : ''}`}
          >
            <div className={styles.heroImgCol}>
              <div className={styles.heroImgWrap}>
                {slide.image?.src ? (
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt || slide.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    priority={i === 0}
                    loading={i === 0 ? undefined : 'lazy'}
                    className="object-cover"
                  />
                ) : (
                  <FallbackSvg />
                )}
              </div>
            </div>
            
            <div className={styles.heroTextCol}>
              <div className={styles.heroMeta}>
                <span className={styles.heroTag}>{slide.category}</span>
                <span className={styles.heroByline}>
                  {slide.date} <span className={styles.heroBylineSep}>&middot;</span> {slide.author}
                </span>
              </div>
              
              <h1>{slide.title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}</h1>
              <p>{slide.excerpt.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}</p>
              
              <Link href={slide.href} className={styles.heroBtn} tabIndex={isActive ? 0 : -1}>
                <span className={styles.heroBtnArrow} aria-hidden="true">
                  <svg fill="none" viewBox="0 0 9 9">
                    <path d="M1 4.5h7M5 2l2.5 2.5L5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Read article
              </Link>
            </div>
          </div>
        );
      })}

      {slides.length > 1 && (
        <div className={styles.heroDots} role="tablist" aria-label="Slides">
          {slides.map((slide, i) => (
            <button
              key={`dot-${slide.id}`}
              role="tab"
              aria-selected={current === i}
              aria-controls={`panel-${slide.id}`}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.heroDotBtn} ${current === i ? styles.heroDotBtnOn : ''}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
