import { useState } from "react";
import "./main.css";

// Static content maps from the original layout.
const featureTabs = [
  {
    id: "simple-bookmarking",
    title: "Simple bookmarking",
    heading: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/img/slide/simple-bokmarking.svg",
    imageAlt: "Tablet illustration",
    imageClassSuffix: "tab-panels__tab-panel-img-simple-bookmarking",
  },
  {
    id: "speedy-searching",
    title: "Speedy searching",
    heading: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/img/slide/speedy-searching.svg",
    imageAlt: "Speedy searching illustration",
    imageClassSuffix: "tab-panels__tab-panel-img-speedy-searching",
  },
  {
    id: "easy-sharing",
    title: "Easy sharing",
    heading: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/img/slide/easy-sharing.svg",
    imageAlt: "Easy sharing illustration",
    imageClassSuffix: "tab-panels__tab-panel-img-easy-sharing",
  },
];

const extensionCards = [
  {
    id: "chrome",
    title: "Add to Chrome",
    description: "Minimum version 62",
    image: "/img/browser/chroome.svg",
    imageAlt: "Chrome browser logo",
  },
  {
    id: "firefox",
    title: "Add to Firefox",
    description: "Minimum version 55",
    image: "/img/browser/firefox.svg",
    imageAlt: "Firefox browser logo",
  },
  {
    id: "opera",
    title: "Add to Opera",
    description: "Minimum version 46",
    image: "/img/browser/opera.svg",
    imageAlt: "Opera browser logo",
  },
];

const accordionItems = [
  {
    id: "what-is-bookmark",
    question: "What is Bookmark?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "request-browser",
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "mobile-app",
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "chromium",
    question: "What about other Chromium browsers?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState(featureTabs[0].id);
  const [openAccordions, setOpenAccordions] = useState(() => new Set());

  const handleTabSelect = (event, id) => {
    event.preventDefault();
    setActiveTab(id);
  };

  // Toggle FAQ accordion entries while keeping other rows unchanged.
  const toggleAccordion = (id) => {
    setOpenAccordions((previous) => {
      const updated = new Set(previous);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <main className="main-content">
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__title">A Simple Bookmark Manager</h1>
            <p className="hero__description">
              A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="hero__button-wrapper">
              <button className="button button--big" type="button">
                Get it on Chrome
              </button>
              <button className="button button--big button--big-light" type="button">
                Get it on Firefox
              </button>
            </div>
          </div>

          <img
            className="hero__img"
            src="/img/tablet.svg"
            alt="Bookmark manager preview"
            width="578"
            height="385"
          />
        </div>
      </section>

      <section className="index-features" id="features">
        <div className="container index-features__content content">
          <h2 className="content__title">Features</h2>
          <p className="content__description">
            Our aim is to make it quick and easy for you to access your favourite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>

        <div className="tabs">
          <ul className="tabs__list" role="tablist">
            {featureTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  className={`tabs__item${isActive ? " tabs__item--active" : ""}`}
                  role="presentation"
                >
                  <a
                    id={`${tab.id}-tab`}
                    className="tabs__link"
                    href={`#${tab.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${tab.id}-panel`}
                    onClick={(event) => handleTabSelect(event, tab.id)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <section className="tab-panels">
            <h2 className="visually-hidden">Feature tabs</h2>
            {featureTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  id={`${tab.id}-panel`}
                  className={`tab-panels__tab-panel${isActive ? " tab-panels__tab-panel--active" : ""}`}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                  hidden={!isActive}
                >
                  <div className="tab-panels__tab-panel-inner">
                    <img
                      className={`tab-panels__tab-panel-img ${tab.imageClassSuffix}`}
                      src={tab.image}
                      alt={tab.imageAlt}
                    />
                    <div className="tab-panels__tab-panel-content">
                      <h3 className="tab-panels__tab-panel-content-title">{tab.heading}</h3>
                      <p className="tab-panels__tab-panel-content-description">{tab.description}</p>
                      <a className="button button--blue" href="#">
                        More info
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </section>

      <section className="extension" id="extension">
        <div className="container extension__content content">
          <h2 className="content__title">Download the extension</h2>
          <p className="content__description">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a
            favourite you’d like us to prioritize.
          </p>
        </div>

        <div className="extension__list-wrapper">
          <ul className="extension__list">
            {extensionCards.map((card) => (
              <li key={card.id} className="extension__item">
                <div className="extension__card">
                  <img className="extension__img" src={card.image} alt={card.imageAlt} />
                  <div className="extension__card-content">
                    <h3 className="extension__card-title">{card.title}</h3>
                    <p className="extension__card-description">{card.description}</p>
                  </div>
                  <button className="button button--big button--big-blue" type="button">
                    Add & Install Extension
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="content faq__content">
          <h2 className="content__title">Frequently Asked Questions</h2>
          <p className="content__description">
            Here are some of our FAQs. If you have any other questions you’d like answered please
            feel free to email us.
          </p>
        </div>

        <div className="faq__accordion">
          <div className="faq__accordion-inner">
            {accordionItems.map((item) => {
              const isOpen = openAccordions.has(item.id);
              return (
                <section key={item.id} className="accordion">
                  <header className="accordion__header">
                    <h3 className="accordion__title">{item.question}</h3>
                    <button
                      className={`accordion__button${isOpen ? " accordion__button--open" : ""}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-content`}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <svg
                        className="accordion__button-icon"
                        width="20"
                        height="13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m2 2 8 8 8-8" stroke="currentColor" strokeWidth="3" />
                      </svg>
                    </button>
                  </header>
                  <div
                    id={`${item.id}-content`}
                    className={`accordion__content${isOpen ? " accordion__content--open" : ""}`}
                  >
                    <p className="accordion__text">{item.answer}</p>
                  </div>
                </section>
              );
            })}
          </div>
          <a className="button button--blue" href="#">
            More info
          </a>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta__container container">
          <div className="cta__inner">
            <span className="cta__badge">35,000+ ALREADY JOINED</span>
            <h2 className="cta__title">Stay up-to-date with what we’re doing</h2>
            <div className="cta__form-wrapper">
              <form
                className="cta__form"
                action="https://echo.htmlacademy.ru"
                method="GET"
                target="_blank"
              >
                <div className="cta__form-inner">
                  <div className="cta__form-input-wrapper">
                    <input
                      className="cta__form-input"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                    <span className="cta__form-input-errormsg">
                      Whoops, make sure it’s an email
                    </span>
                  </div>
                  <div>
                    <button className="button button--red button--red-contact-us" type="submit">
                      Contact Us
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
