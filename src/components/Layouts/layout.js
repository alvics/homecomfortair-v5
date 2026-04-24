
import React, { useEffect } from "react"
import "../Layouts/header.css"
import "../Layouts/layout.css"

import DesktopNav from '../Ui/DesktopNav'
import MobileNav from '../Ui/mobileNav'
import Footer from "../Footer"

export default function Layout({ children }) {

  useEffect(() => {
    const once = (observer, el, fn) => {
      const handler = (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fn(entry)
            obs.unobserve(entry.target)
          }
        })
      }
      return handler
    }

    // Section title underline animation
    const titles = document.querySelectorAll('.section-title')
    const titleObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); obs.unobserve(entry.target) }
      }),
      { threshold: 0.3 }
    )
    titles.forEach(el => titleObserver.observe(el))

    // Card fade-up animation with stagger
    const cards = document.querySelectorAll('.card-home')
    const cardObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.card-home'))
          entry.target.style.animationDelay = `${siblings.indexOf(entry.target) * 0.1}s`
          entry.target.classList.add('card-in-view')
          obs.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )
    cards.forEach(el => cardObserver.observe(el))

    // Image fade-up animation (exclude card images and hero image)
    const allImages = document.querySelectorAll('.gatsby-image-wrapper, .body-wrapper img')
    const images = Array.from(allImages).filter(el =>
      !el.closest('.card-top') &&
      !el.closest('.hero-image-wrapper') &&
      !el.closest('.product-grid') &&
      !el.closest('.dropdown-content') &&
      !el.closest('#links') &&
      !el.closest('.gallery-img-container')
    )
    images.forEach(el => el.classList.add('img-animate'))
    const imageObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('img-in-view'); obs.unobserve(entry.target) }
      }),
      { threshold: 0.1 }
    )
    images.forEach(el => imageObserver.observe(el))

    // FAQ items stagger animation
    const faqItems = document.querySelectorAll('.faq-item')
    const faqObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.faq-item'))
          entry.target.style.animationDelay = `${siblings.indexOf(entry.target) * 0.07}s`
          entry.target.classList.add('faq-in-view')
          obs.unobserve(entry.target)
        }
      }),
      { threshold: 0.1 }
    )
    faqItems.forEach(el => faqObserver.observe(el))

    // How It Works steps stagger animation
    const howSteps = document.querySelectorAll('.how-step')
    const howObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.how-step'))
          entry.target.style.animationDelay = `${siblings.indexOf(entry.target) * 0.15}s`
          entry.target.classList.add('how-in-view')
          obs.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )
    howSteps.forEach(el => howObserver.observe(el))

    // Location card stagger animation
    const locationCards = document.querySelectorAll('.location-card')
    const locationObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.location-card'))
          entry.target.style.animationDelay = `${siblings.indexOf(entry.target) * 0.12}s`
          entry.target.classList.add('location-in-view')
          obs.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )
    locationCards.forEach(el => locationObserver.observe(el))

    // Why Us items stagger animation
    const whyItems = document.querySelectorAll('.why-us-item')
    const whyObserver = new IntersectionObserver(
      (entries, obs) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.why-us-item'))
          entry.target.style.animationDelay = `${siblings.indexOf(entry.target) * 0.08}s`
          entry.target.classList.add('why-in-view')
          obs.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )
    whyItems.forEach(el => whyObserver.observe(el))

    return () => {
      titleObserver.disconnect()
      cardObserver.disconnect()
      imageObserver.disconnect()
      faqObserver.disconnect()
      howObserver.disconnect()
      locationObserver.disconnect()
      whyObserver.disconnect()
    }
  }, [])

  return (
    <div className="layout">
      <DesktopNav />
      <MobileNav />
      <a href="tel:0404602657" className="sticky-call-btn" aria-label="Call Home Comfort Air">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
        </svg>
        <span>Call 0404 602 657</span>
      </a>
      <div
        className="layout-site"
        style={{
          margin: `110px auto 0 auto`,
          maxWidth: 1800,
          padding: `0 2rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}



