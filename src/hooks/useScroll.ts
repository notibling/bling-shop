"use client"; 
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
/**
 * "If the window exists, add a scroll event listener to the window that calls the callback with the
 * scrollTop value of the document body."
 *
 * The first thing we do is check if the window exists. This is a common pattern in React apps that use
 * client-side routing. If the window doesn't exist, we're on the server and we don't want to do
 * anything
 * @param cb - (scrollTop: number) => void
 */
function useScroll(cb: (scrollTop: number) => void) {
  typeof window !== 'undefined' &&
    window.addEventListener('scroll', () => {
      cb(document.body.scrollTop);
    });
}

function useScrollElement() {
  const elementRef = useRef<HTMLElement | any>(null);
  const listener = useRef<boolean>(false);
  const [data, setData] = useState<{offset: number, height: number, top: number}>({ offset: 0, height: 0, top:0 });

  const handleScroll = () => {
    if (elementRef.current) {
      const element = elementRef.current;
      const { y = 0 , height,  top } = element?.getBoundingClientRect() ?? {};
      setData({ offset: y - (height/2), height, top });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !listener.current) {
      handleScroll();
      window.addEventListener('scroll', _.debounce(handleScroll, 0));
      listener.current = true;
    }
  }, []);

  return { ref: elementRef, ...data };
}

function useVisibleElement() {
  const elementRef = useRef<HTMLElement>(null);
  const listener = useRef<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (elementRef.current) {
      const element = elementRef.current;
      const { y = 0 } = element?.getBoundingClientRect() ?? {};
      if (visible !== (y >= 0 && y <= 220)) setVisible(y >= 0 && y <= 220);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !listener.current) {
      handleScroll();
      window.addEventListener('scroll', _.debounce(handleScroll, 100));
      listener.current = true;
    }
  }, []);

  return { ref: elementRef, visible };
}

export { useScroll, useVisibleElement, useScrollElement };
