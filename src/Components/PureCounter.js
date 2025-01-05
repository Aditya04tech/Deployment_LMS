import React, { useEffect, useState } from 'react';

const PureCounter = ({
  start = 0,
  end = 0,
  duration = 2000,
  delay = 10,
  pulse = false,
  decimals = 0,
  formater = 'en-US',
  selector = '.purecounter',
}) => {
  const [count] = useState(start);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const startCounter = (el, config) => {
      const step = (config.end - config.start) / (config.duration / config.delay);
      let current = config.start;

      const interval = setInterval(() => {
        current = config.start < config.end 
          ? Math.min(config.end, current + step) 
          : Math.max(config.end, current - step);
          
        el.innerHTML = formatNumber(current, config);

        if (current === config.end) {
          clearInterval(interval);
          el.innerHTML = formatNumber(config.end, config); // Ensure it ends on the exact number
          if (pulse) {
            setTimeout(() => {
              el.setAttribute('data-purecounter-duration', config.duration / 1000);
            }, config.pulse);
          }
        }
      }, config.delay);
    };

    const getElementConfig = (el) => ({
      start: parseFloat(el.getAttribute('data-purecounter-start') || start),
      end: parseFloat(el.getAttribute('data-purecounter-end') || end),
      duration: parseInt(el.getAttribute('data-purecounter-duration') || duration),
      delay: parseInt(el.getAttribute('data-purecounter-delay') || delay),
      decimals: parseInt(el.getAttribute('data-purecounter-decimals') || decimals),
    });

    const formatNumber = (num, config) => {
      const options = {
        minimumFractionDigits: config.decimals,
        maximumFractionDigits: config.decimals,
      };
      return new Intl.NumberFormat(formater, options).format(num);
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const config = getElementConfig(el);
        if (entry.isIntersecting) {
          startCounter(el, config);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [start, end, duration, delay, pulse, decimals, formater, selector]);

  return (
  <></>
  );
};

export default PureCounter;
