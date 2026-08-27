import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const revealSelectors = [
  '.hero-copy > *',
  '.section-header-row',
  '.section-heading',
  '.category-shell',
  '.chef-rotation',
  '.steps-grid > *',
  '.promo-banner',
  '.page-intro > *',
  '.offer-tile',
  '.secondary-callout',
  '.about-feature',
  '.values-grid > *',
  '.contact-layout > *',
  '.hours-strip',
  '.product-detail > *',
  '.cart-item',
  '.checkout-grid > *',
  '.success-panel',
  '.auth-card',
  '.admin-page-heading',
  '.admin-stat-card',
  '.admin-main-column > .admin-card',
  '.admin-side-column > .admin-card',
]

const imageSelectors = [
  '.hero-card img',
  '.menu-hero-image img',
  '.offer-image img',
  '.about-image img',
  '.product-visual img',
  '.chef-visual img',
  '.promo-visual img',
]

export function ScrollMotion() {
  const location = useLocation()

  useLayoutEffect(() => {
    const page = document.querySelector('.page-shell')
    const app = document.querySelector('.feasto-app')

    if (!page || !app) return undefined

    app.classList.add('gsap-motion')
    const context = gsap.context(() => {
      const revealItems = gsap.utils.toArray(revealSelectors.join(', '), page)
      const imageItems = gsap.utils.toArray(imageSelectors.join(', '), page)
      const chartItems = gsap.utils.toArray('.chart-point', page)

      revealItems.forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 52 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: (index % 4) * 0.04,
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              end: 'top 56%',
              scrub: 1.15,
              invalidateOnRefresh: true,
            },
          },
        )
      })

      imageItems.forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.14, yPercent: -3 },
          {
            scale: 1,
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top 100%',
              end: 'bottom 0%',
              scrub: 1.4,
              invalidateOnRefresh: true,
            },
          },
        )
      })

      chartItems.forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleY: 0.15, transformOrigin: 'bottom center' },
          {
            scaleY: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar.closest('.chart'),
              start: 'top 82%',
              end: 'top 52%',
              scrub: 1.1,
            },
          },
        )
      })

      gsap.utils.toArray('.donut', page).forEach((donut) => {
        gsap.fromTo(
          donut,
          { rotate: -90, scale: 0.82, autoAlpha: 0 },
          {
            rotate: 0,
            scale: 1,
            autoAlpha: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: donut,
              start: 'top 84%',
              end: 'top 55%',
              scrub: 1.2,
            },
          },
        )
      })
    }, page)

    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      context.revert()
      app.classList.remove('gsap-motion')
    }
  }, [location.pathname])

  return null
}
