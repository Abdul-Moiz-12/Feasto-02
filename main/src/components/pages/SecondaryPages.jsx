import { NavLink } from 'react-router-dom'
import { Button } from '../ui/Button'

const offers = [
  {
    label: 'Tonight only',
    title: 'The Feasto feast',
    description: 'Pair any burger with loaded fries and a cold drink. More of what you came for, 20% less.',
    price: '$22.99',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80',
    accent: 'offer-card featured-offer',
  },
  {
    label: 'Lunch, sorted',
    title: 'Firecracker combo',
    description: 'Crispy chicken, golden fries, and your choice of signature dip for the midday rush.',
    price: '$17.99',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=80',
    accent: 'offer-card',
  },
  {
    label: 'For the table',
    title: 'Share the good stuff',
    description: 'Two shareable sides and a pizza made for passing around. Built for good company.',
    price: '$28.50',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=80',
    accent: 'offer-card',
  },
]

export function OffersPage() {
  return (
    <section className="container secondary-page offers-page">
      <header className="page-intro page-intro-split">
        <div>
          <p className="eyebrow">Good food, better timing</p>
          <h1>Offers worth<br /><span>showing up for.</span></h1>
        </div>
        <p className="intro-copy">Limited drops, easy bundles, and little reasons to make tonight taste better. Pick a mood, then make it a meal.</p>
      </header>

      <div className="offer-grid">
        {offers.map((offer) => (
          <article key={offer.title} className={`offer-tile ${offer.accent}`}>
            <div className="offer-image"><img src={offer.image} alt="" /></div>
            <div className="offer-content">
              <p className="card-kicker">{offer.label}</p>
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
              <div className="offer-footer">
                <strong>{offer.price}</strong>
                <NavLink to="/menu" className="text-link">Order this <i className="fa-solid fa-arrow-right" aria-hidden="true" /></NavLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="secondary-callout">
        <div><p className="eyebrow small">The fine print, made simple</p><h2>Freshly made. No strange surprises.</h2></div>
        <p>Offers are available while supplies last, every day from 11:00 AM to 11:00 PM.</p>
      </div>
    </section>
  )
}

export function AboutPage() {
  return (
    <section className="container secondary-page about-page">
      <header className="page-intro">
        <p className="eyebrow">The Feasto point of view</p>
        <h1>Fast food with<br /><span>something to say.</span></h1>
        <p className="intro-copy">We believe the quickest meals should still feel considered. So we start with honest ingredients, bold combinations, and the kind of details you notice in the first bite.</p>
      </header>

      <div className="about-feature">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80" alt="Friends sharing a meal at a restaurant table" /></div>
        <div className="about-feature-copy"><p className="card-kicker">Why we do it</p><h2>Made for the in-between moments.</h2><p>Between work and home. Between a quick lunch and a long conversation. Feasto brings a little more care to the meals that keep your day moving.</p><NavLink to="/menu" className="primary-button button-link">Find your next favorite</NavLink></div>
      </div>

      <div className="values-grid">
        <article><span>01</span><h2>Real ingredients</h2><p>Bright produce, proper seasoning, and recipes that let the good stuff speak for itself.</p></article>
        <article><span>02</span><h2>Thoughtful speed</h2><p>Fast enough for your schedule, careful enough to make every order feel personal.</p></article>
        <article><span>03</span><h2>Room for everyone</h2><p>Big cravings, small snacks, solo dinners, and tables full of friends all belong here.</p></article>
      </div>
    </section>
  )
}

export function ContactPage() {
  return (
    <section className="container secondary-page contact-page">
      <header className="page-intro page-intro-split">
        <div><p className="eyebrow">We are listening</p><h1>Let&apos;s talk<br /><span>over something good.</span></h1></div>
        <p className="intro-copy">Questions about an order, a craving you want us to add, or just want to say hello? Our team is close by.</p>
      </header>

      <div className="contact-layout">
        <div className="contact-panel">
          <p className="card-kicker">Reach the team</p><h2>How can we help?</h2>
          <div className="contact-list"><a href="mailto:hello@feasto.com"><span>Email</span><strong>hello@feasto.com</strong></a><a href="tel:+923002134567"><span>Call</span><strong>+92 300 2134567</strong></a><div><span>Find us</span><strong>Karachi, Pakistan</strong></div></div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <p className="card-kicker">Send a note</p><h2>Tell us what&apos;s on your mind.</h2>
          <label>Name<input type="text" placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <label>Message<textarea rows="4" placeholder="How can we help?" /></label>
          <Button variant="primary" type="submit">Send message</Button>
        </form>
      </div>

      <div className="hours-strip"><span>Open every day</span><strong>11:00 AM - 11:00 PM</strong><span>Usually replying within an hour</span></div>
    </section>
  )
}
