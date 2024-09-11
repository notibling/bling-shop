declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee?: any;
    }
  }
  namespace GlobalTypes {
    type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
  }
}
