export const getCoords = (i: number) => {
    const angle = i * 30 * (Math.PI / 180);
    const x1 = 50 + 40 * Math.sin(angle);
    const y1 = 50 - 40 * Math.cos(angle);
    const x2 = 50 + 45 * Math.sin(angle);
    const y2 = 50 - 45 * Math.cos(angle);

    return { x1, x2, y1, y2 }
}