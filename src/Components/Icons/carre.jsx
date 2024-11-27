// eslint-disable-next-line react/prop-types
export const Carre = ({ fill, stroke, strokeWidth, style }) => {
    return (
        <svg viewBox="-2.4 -2.4 28.80 28.80" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" rx="2" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}