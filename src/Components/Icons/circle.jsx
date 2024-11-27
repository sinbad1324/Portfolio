// eslint-disable-next-line react/prop-types
export const Circle = ({ fill, stroke, strokeWidth, style }) => {
    return (
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={style}
        >

            <circle cy="6" cx="6" r="5"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            ></circle>
        </svg>
    );
};
