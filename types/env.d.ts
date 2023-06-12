declare namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV: 'development' | 'production'

      NEXT_PUBLIC_ENV_DOMAIN: string
    }
  }
}
