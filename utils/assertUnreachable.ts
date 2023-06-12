export function assertUnreachable(value: never): never {
  if (process.env.NODE_ENV === 'development') {
    console.log('🚨 This code should be unreachable! But received:', value)
  }

  throw new Error('Error: Unexpected value received: ', value)
}
