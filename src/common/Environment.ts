class Environment {

  static properties = {
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    NEXT_BACKEND_API_URL: process.env.NEXT_BACKEND_API_URL
  } as const;


  static getEnv(name: keyof typeof Environment.properties) {
    const value = Environment.properties[name];
    if (!value) {throw new Error(`Missing environment variable ${name}`);}
    return value;
  }
}

export { Environment };