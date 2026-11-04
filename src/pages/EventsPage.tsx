import { useEffect, useRef, useState, type ReactNode } from "react";

const pineResortMap = "https://maps.app.goo.gl/y5jwcZEruMLgAX8w5";

import "./EventsPage.css";

function publicAsset(path: string) {
    return `${import.meta.env.BASE_URL}events-page/${path}`;
}

interface EventRevealProps {
    children: ReactNode;
    className?: string;
    frame?: "cream" | "maroon";
    label: string;
}

function EventReveal({ children, className = "", frame = "cream", label }: EventRevealProps) {
    const cardRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={cardRef}
            className={`events-entry ${isVisible ? "is-visible" : ""} ${className}`}
            aria-label={label}
        >
            <picture className="events-card-frame" aria-hidden="true">
                <source
                    media="(max-width: 650px)"
                    srcSet={publicAsset(
                        frame === "maroon"
                            ? "Ornate-Maroon-and-Gold-Card-Frame-Potrait.webp"
                            : "Ornate-Cream-Frame-Potrait.webp",
                    )}
                />
                <img
                    src={publicAsset(
                        frame === "maroon"
                            ? "Ornate-Maroon-and-Gold-Card-Frame.webp"
                            : "Ornate-Cream-Frame.webp",
                    )}
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
            </picture>
            {children}
        </article>
    );
}

function DateLabel({ children }: { children: ReactNode }) {
    return (
        <p className="events-date">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="5" width="14" height="12" rx="1.5" />
                <path d="M6.5 3v4M13.5 3v4M3 8.5h14" />
            </svg>
            {children}
        </p>
    );
}

function Venue({ children }: { children: ReactNode }) {
    return (
        <p className="events-venue">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M16 8.2c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" />
                <circle cx="10" cy="8" r="2" />
            </svg>
            <span>{children}</span>
        </p>
    );
}

function EventsPage() {
    return (
        <section
            id="wedding-events"
            className="events-page"
            aria-labelledby="events-title"
        >
            <img
                className="events-background"
                src={publicAsset("events-page-background.webp")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
            <img
                className="events-flower events-flower-left"
                src={publicAsset("flower-border-with-bell-left.webp")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
            <img
                className="events-flower events-flower-right"
                src={publicAsset("flower-border-right.webp")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />

            <header className="events-header">
                <p className="events-eyebrow">With joyful hearts, we invite you to</p>
                <h2 id="events-title">The Wedding Celebrations</h2>
                <p className="events-intro">
                    Three days of traditions, blessings, laughter &amp; togetherness.
                </p>
                <div className="events-divider" aria-hidden="true">
                    <span />
                    <span>♥</span>
                    <span />
                </div>
            </header>

            <div className="events-list">
                <EventReveal label="22 November 2026: Ganesh Pooja, Suwal Pathai and Mahila Sangeet">
                    <div className="event-art">
                        <img
                            src={publicAsset("ganesh-ji-icon.webp")}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="event-copy">
                        <DateLabel>Day 01 · 22 November 2026</DateLabel>
                        <h3>Ganesh Pooja &amp; Suwal Pathai</h3>
                        <p className="event-description">
                            Auspicious beginnings and cherished Kumaoni traditions.
                        </p>
                    </div>
                    <div className="event-details">
                        <ul>
                            <li>
                                <span className="event-detail-title">Ganesh Pooja</span>
                                <span>According to the auspicious muhurat</span>
                            </li>
                            <li>
                                <span className="event-detail-title">Suwal Pathai</span>
                                <span>According to the auspicious muhurat</span>
                            </li>
                            <li>
                                <span className="event-detail-title">Mahila Sangeet</span>
                                <span>1:00 PM – 5:00 PM</span>
                            </li>
                        </ul>
                        <Venue>Bride&apos;s residence: Bhandari Gaon, Gangolihat</Venue>
                    </div>
                </EventReveal>

                <EventReveal label="23 November 2026: Haldi and Mehendi">
                    <div className="event-art">
                        <img
                            src={publicAsset("haldi-mahendi-icon.webp")}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="event-copy">
                        <DateLabel>Day 02 · 23 November 2026</DateLabel>
                        <h3>Haldi &amp; Mehendi</h3>
                        <p className="event-description">
                            A day filled with colours, laughter and joyful celebrations.
                        </p>
                    </div>
                    <div className="event-details">
                        <ul>
                            <li>
                                <span className="event-detail-title">Haldi</span>
                                <span>10:00 AM</span>
                            </li>
                            <li>
                                <span className="event-detail-title">Mehendi</span>
                                <span>5:00 PM</span>
                            </li>
                        </ul>
                        <Venue>Bride&apos;s residence: Bhandari Gaon, Gangolihat</Venue>
                    </div>
                </EventReveal>

                <EventReveal
                    className="wedding-day-card"
                    frame="maroon"
                    label="24 November 2026: The Wedding Day"
                >
                    <div className="wedding-day-art">
                        <img
                            src={publicAsset("wedding-day-icon.webp")}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="wedding-day-heading">
                        <DateLabel>Day 03 · 24 November 2026</DateLabel>
                        <h3>The Wedding Day</h3>
                        <p>The most special day, bringing two souls and families together.</p>
                    </div>
                    <ol className="wedding-timeline" aria-label="Wedding day schedule">
                        <li>
                            <span className="timeline-motif" aria-hidden="true">
                                <img src={publicAsset("baraat.webp")} alt="" />
                            </span>
                            <strong>1:00 PM</strong>
                            <span>Barat Swagat</span>
                        </li>
                        <li>
                            <span className="timeline-motif" aria-hidden="true">
                                <img src={publicAsset("panigrah.webp")} alt="" />
                            </span>
                            <strong>Panigrah Sanskar</strong>
                            <span>According to the auspicious muhurat</span>
                        </li>
                        <li>
                            <span className="timeline-motif" aria-hidden="true">
                                <img src={publicAsset("baraat-return.webp")} alt="" />
                            </span>
                            <strong>5:00 PM</strong>
                            <span>Barat Vidai</span>
                        </li>
                    </ol>
                    <div className="wedding-day-venue">
                        <Venue>
                            Wedding venue:{" "}
                            <a href={pineResortMap} target="_blank" rel="noreferrer">
                                Pine Resort
                                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                                    <path d="M9 2h5v5M14 2 7 9" />
                                    <path d="M12 9v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
                                </svg>
                            </a>
                        </Venue>
                    </div>
                </EventReveal>
            </div>
        </section>
    );
}

export default EventsPage;
