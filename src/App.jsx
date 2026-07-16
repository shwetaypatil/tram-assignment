import './App.css';

const avatarImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=240&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
];

const footerColumns = [
  ['Elementum', 'Home', 'Work', 'Services', 'Blog', 'Plan'],
  // ['North & Product', 'New York', 'San Francisco', 'Berlin', 'Cairo', 'Sydney'],
  ['Follow Us', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube'],
  ['Terms & Policies', 'Sub Terms of Use', 'Verification', 'Personal Service', 'Privacy Policy'],
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">Elementum</a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#service">Services</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
      </nav>
      <button className="menu-button" aria-label="Open menu">
        <span />
        <span />
      </button>
    </header>
  );
}

function AvatarRing({ className = '' }) {
  return (
    <div className={`avatar-ring ${className}`} aria-hidden="true">
      {avatarImages.slice(0, 7).map((src, index) => (
        <img key={src} className={`avatar avatar-${index + 1}`} src={src} alt="" />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="squiggle squiggle-left" />
      <div className="paint-drop hero-drop" />
      <div className="headline-wrap">
        <h1>
          The thinkers and<br />
          doers were changing<br />
          the status Quo with
        </h1>
        <span className="stroke stroke-top">creative</span>
        <span className="stroke stroke-bottom">ideas.</span>
        <p>
          We are a team of strategists, designers communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>
      <AvatarRing />
    </section>
  );
}

function BetterToday() {
  return (
    <section className="split-section intro-section" id="work">
      <div className="copy-block">
        <h2>Tomorrow should<br />be better than today</h2>
        <p>
          We are a team of strategists, designers, communicators, and researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>
      <div className="image-badge image-badge-large">
        <div className="shape shape-coral" />
        <img
          src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80"
          alt="Two colleagues in a meeting"
        />
      </div>
    </section>
  );
}

function Progress() {
  return (
    <section className="progress-section" id="about">
      <div className="photo-stack">
        <span className="triangle triangle-top" />
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
          alt="Team reviewing a project at a table"
        />
        <span className="triangle triangle-bottom" />
      </div>
      <div className="progress-copy">
        <h2>See how we can<br />help you progress</h2>
        <p>
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design
          digital, comms and social research.
        </p>
        <a href="#service">Explore services</a>
      </div>
      <div className="red-path path-one" />
      <div className="red-path path-two" />
    </section>
  );
}

function Services() {
  const services = [
    ['Offer suitable', 'proper support'],
    ['Collaborative & partnership', 'Alliances that keep teams moving'],
    ['The happy UXer who', 'digital experiences'],
    ['We talk about our weight', 'Brand, product, and launch decisions'],
    ['Data based content', 'exactly good'],
    ['Plotting digital confidence', 'Research, design systems, and campaigns'],
  ];

  return (
    <section className="services-section" id="service">
      <h2>What we can<br />offer you!</h2>
      <div className="service-list">
        {services.map(([title, text]) => (
          <article className="service-row" key={title}>
            <span>{title}</span>
            <strong>{text}</strong>
            <b aria-hidden="true" />
          </article>
        ))}
      </div>
      <img className="service-sticker" src={avatarImages[7]} alt="Smiling customer portrait" />
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonial-section" id="blog">
      <AvatarRing className="testimonial-avatars" />
      <p className="eyebrow">What our customers<br />says About Us</p>
      <div className="quote-card">
        <span className="quote-mark">“</span>
        <p>
          Elementum delivered the site with in the timeline as they requested.
          In the end, the client found a 50% increase in traffic with in days since its launch.
          They also had an impressive ability to use technologies that the company hasn't used, which have
          also proved to be easy to use and reliable.
        </p>
        <small>Sarah Taylor, product strategist</small>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter-section" id="contact">
      <div className="newsletter-squiggle" />
      <div className="paint-drop newsletter-drop" />
      <h2>Subscribe to<br />our newsletter</h2>
      <p>To make your stay special and even more memorable</p>
      <form className="subscribe-form">
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="hello@example.com" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      {footerColumns.map(([title, ...links]) => (
        <div className="footer-column" key={title}>
          <h3>{title}</h3>
          {links.map((link) => (
            <a href="#home" key={link}>{link}</a>
          ))}
        </div>
      ))}
      <p className="copyright">© 2026 Elementum. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <BetterToday />
      <Progress />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
