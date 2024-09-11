'use client';
import { useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";

enum Breakpoints {
  sm = 576,
  md = 960,
  lg = 1440,
  xl = 10000,
}

function useBreakpoint(listener: boolean = true) {
  const [screenWidth, setScreenWidth] = useState<number>();

  const range = useMemo(() => {
    return {
      sm: screenWidth && screenWidth <= Breakpoints.sm,
      md: screenWidth && screenWidth >= Breakpoints.sm && screenWidth <= Breakpoints.md,
      lg: screenWidth && screenWidth >= Breakpoints.md && screenWidth <= Breakpoints.lg,
      xl: screenWidth && screenWidth >= Breakpoints.lg,
    };
  }, [screenWidth]);

  const absolute = useMemo(() => {
    return {
      sm: screenWidth && screenWidth <= Breakpoints.sm,
      md: screenWidth && screenWidth <= Breakpoints.md,
      lg: screenWidth && screenWidth <= Breakpoints.lg,
      xl: screenWidth && screenWidth >= Breakpoints.lg,
    };
  }, [screenWidth]);

  function handleResize() {
    const width = document.body.clientWidth;
    setScreenWidth(width);
  }

  const breakpoint = useMemo(() => {
    if (screenWidth && screenWidth <= Breakpoints.sm) return "sm";
    if (screenWidth && screenWidth >= Breakpoints.sm && screenWidth <= Breakpoints.md) return "md";
    if (screenWidth && screenWidth >= Breakpoints.md && screenWidth <= Breakpoints.lg) return "lg";
    if (screenWidth && screenWidth >= Breakpoints.lg) return "xl";

    return "sm";
  }, [screenWidth]);

  const conditionalValue = useCallback(
    (values: Partial<Record<keyof typeof Breakpoints, any>>) => {
      let greaterValue = 0;

      ["sm", "md", "lg", "xl"].map((_breakpoint) => {
        const _values: any = values;
        if (_values[_breakpoint]) greaterValue = _values[_breakpoint];
      });

      return values[breakpoint] ?? greaterValue;
    },
    [breakpoint]
  );

  useEffect(() => {
    handleResize();
    listener && window.addEventListener("resize", _.debounce(handleResize, 200));

    return () => {
      listener && window.removeEventListener("resize", () => {});
    };
  }, []);

  return { range, absolute, conditionalValue };
}

export { useBreakpoint };
