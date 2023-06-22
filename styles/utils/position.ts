type PositionType = 'absolute' | 'fixed'

export function posCenterX(type: PositionType = 'absolute') {
  return `
        position: ${type};
        left: 50%;
        transform: translateX(-50%);
    `
}

export function posCenterY(type: PositionType = 'absolute') {
  return `
        position: ${type};
        top: 50%;
        transform: translateY(-50%);
    `
}

export function posCenter(type: PositionType = 'absolute') {
  return `
        position: ${type};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `
}
