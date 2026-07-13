"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".membership-benefits-section-heading",
  ".membership-benefits-overview-card",
  ".membership-benefits-eligibility-gate",
  ".membership-benefits-list article",
  ".membership-benefits-position-card",
  ".membership-benefits-price-card",
  ".membership-benefits-review-panel article",
  ".membership-benefits-conditions article",
  ".membership-benefits-final-cta",
].join(",");

export function MembershipBenefitsReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );

    if (elements.length === 0) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const reducedMotionEnabled = reducedMotionQuery.matches;

    elements.forEach((element, index) => {
      element.setAttribute("data-benefits-reveal", "");

      element.classList.remove("is-benefits-visible");

      const delay = (index % 3) * 70;

      element.style.setProperty("--benefits-reveal-delay", `${delay}ms`);
    });

    if (reducedMotionEnabled) {
      elements.forEach((element) => {
        element.classList.add("is-benefits-visible");
      });

      return () => {
        elements.forEach((element) => {
          element.removeAttribute("data-benefits-reveal");
          element.classList.remove("is-benefits-visible");
          element.style.removeProperty("--benefits-reveal-delay");
        });
      };
    }

    document.documentElement.classList.add("benefits-reveal-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.classList.add("is-benefits-visible");
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    let secondFrame = 0;

    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        elements.forEach((element) => {
          observer.observe(element);
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);

      observer.disconnect();

      document.documentElement.classList.remove("benefits-reveal-enabled");

      elements.forEach((element) => {
        element.removeAttribute("data-benefits-reveal");
        element.classList.remove("is-benefits-visible");
        element.style.removeProperty("--benefits-reveal-delay");
      });
    };
  }, []);

  return null;
}
