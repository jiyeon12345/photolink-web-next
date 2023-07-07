/**
 * 도달해서는 안 되는 값을 확인하여 타입 체크를 완전히 하는데 사용되는 함수.
 * @param value 도달해서는 안 되는 값.
 * @throws 도달된 값에 대한 설명적인 메시지를 포함한 에러가 발생.
 */
export function assertUnreachable(value: any): never {
  if (process.env.NODE_ENV === 'development') {
    console.log('🚨 This code should be unreachable! But received:', value)
  }

  throw new Error('Error: Unexpected value received: ', value)
}
