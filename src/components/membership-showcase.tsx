"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  formatMembershipPrice,
  getBaseMembershipPrice,
  memberships,
  type MembershipBillingPeriod,
} from "@/lib/memberships";

const billingOptions: Array<{
  value: MembershipBillingPeriod;
  label: string;
  description: string;
}> = [
  {
    value: "monthly",
    label: "Monthly",
    description: "One month of active membership",
  },
  {
    value: "yearly",
    label: "Yearly",
    description: "Twelve months of active membership",
  },
  {
    value: "one_time",
    label: "One-time",
    description: "Long-term one-time membership",
  },
];

const membershipHoverSummaries: Record<string, string[]> = {
  starter: [
    "Official individual recognition",
    "Authorized communication access",
    "Starter-eligible events and activities",
  ],

  family: [
    "One recognized identity for the household",
    "Authorized family communication access",
    "Family-eligible events and activities",
  ],

  silver: [
    "Priority review of eligible communications",
    "Regional access and higher recognition",
    "Eligibility for selected Silver programmes",
  ],

  black: [
    "Nationwide premium recognition",
    "Higher communication priority than Silver",
    "Eligibility for selected company invitations",
  ],

  platinum: [
    "International Platinum recognition",
    "Invitation-only empowerment opportunities",
    "Executive meeting requests and private events",
  ],

  elite: [
    "Highest open-application membership class",
    "Executive-priority international access",
    "Elite invitations and leadership consideration",
  ],

  "6clement-joshua": [
    "Highest global relationship recognition",
    "Direct approved access to senior leadership",
    "Private investor and strategic partner opportunities",
  ],
};

export function MembershipShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [billingPeriod, setBillingPeriod] =
    useState<MembershipBillingPeriod>("monthly");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [cardInformationOpen, setCardInformationOpen] = useState(false);
  const [cardFullyVisible, setCardFullyVisible] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    "next" | "previous"
  >("next");

  const touchStartX = useRef<number | null>(null);
  const cardRef = useRef<HTMLElement | null>(null);

  const activeMembership = memberships[activeIndex];

  const isPrivateRequest =
    activeMembership.applicationMode === "invitation_only_request";

  const primaryActionHref = isPrivateRequest
    ? `/request-consideration?membership=${activeMembership.slug}&term=${billingPeriod}`
    : `/apply?membership=${activeMembership.slug}&billing=${billingPeriod}`;

  const hoverSummary =
    membershipHoverSummaries[activeMembership.slug] ??
    activeMembership.benefits.slice(0, 3);

  useEffect(() => {
    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -7% 0px",
      },
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-ready");
      revealObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        const completelyVisible =
          entry.isIntersecting && entry.intersectionRatio >= 0.98;

        setCardFullyVisible(completelyVisible);

        if (!completelyVisible) {
          setCardInformationOpen(false);
        }
      },
      {
        threshold: [0, 0.5, 0.98, 1],
      },
    );

    cardObserver.observe(card);

    return () => {
      cardObserver.disconnect();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (!detailsOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDetailsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [detailsOpen]);

  function showPreviousMembership() {
    if (memberships.length < 2) {
      return;
    }

    setTransitionDirection("previous");
    setCardInformationOpen(false);

    setActiveIndex((current) =>
      current === 0 ? memberships.length - 1 : current - 1,
    );
  }

  function showNextMembership() {
    if (memberships.length < 2) {
      return;
    }

    setTransitionDirection("next");
    setCardInformationOpen(false);

    setActiveIndex((current) =>
      current === memberships.length - 1 ? 0 : current + 1,
    );
  }

  function selectMembership(index: number) {
    setTransitionDirection(index >= activeIndex ? "next" : "previous");
    setActiveIndex(index);
    setCardInformationOpen(false);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || memberships.length < 2) {
      touchStartX.current = null;
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;

    const distance = touchStartX.current - touchEndX;

    touchStartX.current = null;

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance > 0) {
      showNextMembership();
      return;
    }

    showPreviousMembership();
  }

  function openCardSummary() {
    if (cardFullyVisible) {
      setCardInformationOpen(true);
    }
  }

  function toggleCardSummary() {
    if (!cardFullyVisible) {
      return;
    }

    setCardInformationOpen((current) => !current);
  }

  return (
    <>
      <section className="premium-membership-intro-section" data-reveal>
        <div className="premium-membership-atmosphere" aria-hidden="true">
          <span className="membership-ambient-light membership-ambient-light-one" />
          <span className="membership-ambient-ring membership-ambient-ring-one" />
          <span className="membership-ambient-ring membership-ambient-ring-two" />
        </div>

        <div className="site-shell">
          <header className="premium-membership-introduction">
            <span className="eyebrow">Official recognition by 6</span>

            <h1>
              Your recognized relationship
              <span> begins with membership.</span>
            </h1>

            <p>
              Select an official membership card to establish structured access
              to 6clement Joshua and affiliated organizations.
            </p>

            <a className="membership-get-started-button" href="#memberships">
              Get started
              <ArrowDown size={16} />
            </a>
          </header>
        </div>
      </section>

      <section
        id="memberships"
        className="membership-card-gallery-section"
        data-reveal
      >
        <div className="membership-gallery-atmosphere" aria-hidden="true">
          <span className="membership-gallery-glow" />
          <span className="membership-gallery-water-ring ring-one" />
          <span className="membership-gallery-water-ring ring-two" />
          <span className="membership-gallery-water-ring ring-three" />
        </div>

        <div className="site-shell membership-gallery-shell">
          <div
            className="premium-card-presentation"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {memberships.length > 1 && (
              <button
                type="button"
                className="premium-card-arrow premium-card-arrow-left"
                aria-label="View previous membership"
                onClick={showPreviousMembership}
              >
                <ChevronLeft size={21} />
              </button>
            )}

            <div className="premium-card-scene">
              <div className="premium-card-liquid-base" aria-hidden="true">
                <span />
                <i />
              </div>

              <article
                key={activeMembership.slug}
                ref={cardRef}
                className={`premium-membership-card premium-membership-card-${activeMembership.slug} transition-${transitionDirection}`}
                tabIndex={0}
                aria-label={`${activeMembership.name}, ${activeMembership.coverageLabel} coverage`}
                onMouseEnter={openCardSummary}
                onMouseLeave={() => setCardInformationOpen(false)}
                onFocus={openCardSummary}
                onBlur={() => setCardInformationOpen(false)}
                onClick={toggleCardSummary}
              >
                <div className="premium-card-surface" aria-hidden="true" />

                <div
                  className="premium-card-security-pattern"
                  aria-hidden="true"
                />

                <div className="premium-card-light-sweep" aria-hidden="true" />

                <div className="premium-card-topline">
                  <strong>{activeMembership.cardLabel}</strong>
                  <span>{activeMembership.coverageLabel}</span>
                </div>

                <div className="premium-card-logo">
                  <Image
                    src="/6logo.png"
                    alt="6clement Joshua logo"
                    width={190}
                    height={190}
                    priority
                  />
                </div>

                <div className="premium-card-parent-brand">
                  {activeMembership.cardFooter}
                </div>

                <div
                  className={`premium-card-information ${
                    cardInformationOpen && cardFullyVisible ? "is-visible" : ""
                  }`}
                >
                  <span className="premium-card-information-label">
                    {activeMembership.cardLabel} membership includes
                  </span>

                  <div className="premium-card-information-benefits">
                    {hoverSummary.map((summary) => (
                      <div key={summary}>
                        <Check size={14} />
                        <span>{summary}</span>
                      </div>
                    ))}
                  </div>

                  <small>
                    Open membership benefits for complete information.
                  </small>
                </div>
              </article>
            </div>

            {memberships.length > 1 && (
              <button
                type="button"
                className="premium-card-arrow premium-card-arrow-right"
                aria-label="View next membership"
                onClick={showNextMembership}
              >
                <ChevronRight size={21} />
              </button>
            )}
          </div>

          <button
            type="button"
            className="mobile-card-summary-button"
            disabled={!cardFullyVisible}
            aria-expanded={cardInformationOpen}
            onClick={toggleCardSummary}
          >
            {cardInformationOpen ? "Hide quick benefits" : "Preview benefits"}
          </button>

          {memberships.length > 1 && (
            <div
              className="premium-membership-dots"
              aria-label="Membership slides"
            >
              {memberships.map((membership, index) => (
                <button
                  key={membership.slug}
                  type="button"
                  className={index === activeIndex ? "is-active" : ""}
                  aria-label={`View ${membership.name}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => selectMembership(index)}
                />
              ))}
            </div>
          )}

          <header className="membership-gallery-heading">
            <span className="membership-gallery-tier-label">
              {activeMembership.coverageLabel} membership
            </span>

            <h2>{activeMembership.name}</h2>

            <div className="premium-worldwide-status">
              <Globe2 size={16} />

              <span>
                {isPrivateRequest
                  ? "Invitation-only relationship"
                  : "Worldwide applications"}
              </span>
            </div>

            <p>{activeMembership.shortDescription}</p>
          </header>

          <div className="membership-gallery-actions">
            <a
              className="premium-details-button"
              href={`/memberships/${activeMembership.slug}`}
            >
              See membership benefits
              <ArrowRight size={16} />
            </a>

            <a className="premium-apply-button" href={primaryActionHref}>
              {activeMembership.primaryActionLabel}
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {detailsOpen && (
        <div
          className="premium-details-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="premium-details-title"
        >
          <button
            type="button"
            className="premium-details-backdrop"
            aria-label="Close membership benefits"
            onClick={() => setDetailsOpen(false)}
          />

          <div className="premium-details-dialog glass-panel">
            <header className="premium-details-header">
              <div>
                <span>{activeMembership.coverageLabel} membership</span>

                <h2 id="premium-details-title">{activeMembership.name}</h2>
              </div>

              <button
                type="button"
                aria-label="Close membership benefits"
                onClick={() => setDetailsOpen(false)}
              >
                <X size={20} />
              </button>
            </header>

            <div
              className={`premium-details-card-preview premium-details-card-preview-${activeMembership.slug}`}
            >
              <div>
                <strong>{activeMembership.cardLabel}</strong>
                <span>{activeMembership.coverageLabel}</span>
              </div>

              <Image
                src="/6logo.png"
                alt="6clement Joshua logo"
                width={92}
                height={92}
              />

              <small>{activeMembership.cardFooter}</small>
            </div>

            <section className="premium-details-section">
              <h3>
                {isPrivateRequest
                  ? "Private membership value"
                  : "Choose membership duration"}
              </h3>

              <div
                className="premium-benefits-billing-options"
                role="group"
                aria-label={
                  isPrivateRequest
                    ? "Select preferred private membership term"
                    : "Choose membership duration"
                }
              >
                {billingOptions.map((option) => {
                  const optionPrice = getBaseMembershipPrice(
                    activeMembership,
                    option.value,
                  );

                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={
                        billingPeriod === option.value ? "is-selected" : ""
                      }
                      onClick={() => setBillingPeriod(option.value)}
                    >
                      <span>{option.label}</span>

                      <strong>
                        {formatMembershipPrice(
                          optionPrice,
                          activeMembership.baseCurrency,
                        )}
                      </strong>

                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>

              <p className="premium-benefits-currency-note">
                {isPrivateRequest
                  ? "No payment is collected when requesting consideration. The selected membership value applies only after invitation, private review, documentation and final approval."
                  : "International applicants will see the supported checkout currency and exact payable amount before payment."}
              </p>
            </section>

            <section className="premium-details-section">
              <h3>What this membership provides</h3>

              <div className="premium-details-list">
                {activeMembership.benefits.map((benefit) => (
                  <div key={benefit}>
                    <Check size={16} />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="premium-details-section">
              <h3>Important membership conditions</h3>

              <div className="premium-details-list premium-details-limitations">
                {activeMembership.limitations.map((limitation) => (
                  <div key={limitation}>
                    <span aria-hidden="true" />
                    <p>{limitation}</p>
                  </div>
                ))}
              </div>
            </section>

            <a className="premium-apply-button" href={primaryActionHref}>
              {isPrivateRequest
                ? "Request private consideration"
                : `Apply for ${activeMembership.name}`}

              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
