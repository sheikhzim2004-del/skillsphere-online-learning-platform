'use client'

import { useEffect, useRef } from 'react'

export default function ScrollSection({ children }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <>
      <style>{`
        .section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .section.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section ref={sectionRef} className="section">
        {children}
      </section>
    </>
  )
}
