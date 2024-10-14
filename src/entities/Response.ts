
type Response<T> = T & {
  success: boolean;
  message: string;
}

export { type Response };