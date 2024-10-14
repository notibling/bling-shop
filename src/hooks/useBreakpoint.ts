'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';

enum Breakpoints {
  // eslint-disable-next-line no-unused-vars
  sm = 576,
  // eslint-disable-next-line no-unused-vars
  md = 960,
  // eslint-disable-next-line no-unused-vars
  lg = 1440,
  // eslint-disable-next-line no-unused-vars
  xl = 10000,
}

function useBreakpoint(listener: boolean = true) {
  const [screenWidth, setScreenWidth] = useState<number>();

  const range = useMemo(() => {
    return {
      sm: screenWidth && screenWidth <= Breakpoints.sm,
      md: screenWidth && screenWidth >= Breakpoints.sm && screenWidth <= Breakpoints.md,
      lg: screenWidth && screenWidth >= Breakpoints.md && screenWidth <= Breakpoints.lg,
      xl: screenWidth && screenWidth >= Breakpoints.lg
    };
  }, [screenWidth]);

  const absolute = useMemo(() => {
    return {
      sm: screenWidth && screenWidth <= Breakpoints.sm,
      md: screenWidth && screenWidth <= Breakpoints.md,
      lg: screenWidth && screenWidth <= Breakpoints.lg,
      xl: screenWidth && screenWidth >= Breakpoints.lg
    };
  }, [screenWidth]);

  const handleResize = useCallback(() => {
    const width = document.body.clientWidth;
    setScreenWidth(width);
  }, []);

  // Debounced version of handleResize
  const debouncedResizeHandler = useCallback(_.debounce(handleResize, 200), [handleResize]);

  const breakpoint = useMemo(() => {
    if (screenWidth && screenWidth <= Breakpoints.sm) return 'sm';
    if (screenWidth && screenWidth >= Breakpoints.sm && screenWidth <= Breakpoints.md) return 'md';
    if (screenWidth && screenWidth >= Breakpoints.md && screenWidth <= Breakpoints.lg) return 'lg';
    if (screenWidth && screenWidth >= Breakpoints.lg) return 'xl';

    return 'sm';
  }, [screenWidth]);

  const conditionalValue = useCallback(
    (values: Partial<Record<keyof typeof Breakpoints, any>>) => {
      let greaterValue = 0;

      ['sm', 'md', 'lg', 'xl'].forEach((_breakpoint) => {
        const _values: any = values;
        if (_values[_breakpoint]) greaterValue = _values[_breakpoint];
      });

      return values[breakpoint] ?? greaterValue;
    },
    [breakpoint]
  );

  useEffect(() => {
    handleResize(); // Initial resize
    if (listener) {
      window.addEventListener('resize', debouncedResizeHandler);
    }

    return () => {
      if (listener) {
        window.removeEventListener('resize', debouncedResizeHandler);
      }
    };
  }, [listener, debouncedResizeHandler]);

  return { range, absolute, conditionalValue };
}

export { useBreakpoint };
