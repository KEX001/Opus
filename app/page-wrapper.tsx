"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import ParticlesBackground from "./particles-background"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Fade-in animation for elements
    const fadeElements = document.querySelectorAll(".fade-in")

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    fadeElements.forEach((element) => {
      observerRef.current?.observe(element)
    })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        }
      })
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <>
      <ParticlesBackground />
      <div className="fade-in-wrapper">{children}</div>
      <style jsx>{`
        .fade-in-wrapper :global(.fade-in) {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-wrapper :global(.fade-in.visible) {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}
