import React, { useEffect, useRef } from "react";

const Scrollbar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    // Clone items for seamless scrolling
    const items = Array.from(scrollContainer.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Add the keyframes animation dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const logos = [
    { src: "assets/images/client/netflix.svg", alt: "Netflix logo" },
    { src: "assets/images/client/google.svg", alt: "Google logo" },
    { src: "assets/images/client/linkedin.svg", alt: "LinkedIn logo" },
    { src: "assets/images/client/coca-cola.svg", alt: "Coca-Cola logo" },
    { src: "assets/images/client/android.svg", alt: "Android logo" },
    { src: "assets/images/client/envato.svg", alt: "Envato logo" },
  ];

  return (
    <section style={styles.section} >
      <div style={styles.container} className="mt-5">
        <div style={styles.scrollWrapper}>
          <div ref={containerRef} style={styles.slider}>
            {logos.map((logo, index) => (
              <div key={index} style={styles.logoItem} >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width="120"
                  height="40"
                  style={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "0 0 3rem 0",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  scrollWrapper: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },

  slider: {
    display: "flex",
    animation: "scroll 20s linear infinite",
    gap: "80px",
   
  },

  logoItem: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },

  logo: {
    transition: "opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease",
  },

  logoHover: {
    opacity: 5,
    transform: "scale(1.1)",
  },
};

// Media Queries
const mediaQueries = {
  "@media (max-width: 1200px)": {
    container: {
      padding: "0 5rem",
    },
    slider: {
      gap: "60px",
    },
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "0 1rem",
    },
    slider: {
      gap: "40px",
    },
  },
  "@media (max-width: 480px)": {
    container: {
      padding: "0 0.5rem",
    },
    slider: {
      gap: "20px",
    },
    logoItem: {
      padding: "0.5rem",
    },
  },
};

export default Scrollbar;
