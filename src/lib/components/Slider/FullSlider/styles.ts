import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5
    }
    100% {
        opacity: 1;
    }

`;

export const SliderProgressBar = styled.div<{
    $width?: number;
    $isMoving?: boolean;
}>`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #bdbdbd;
    height: 4px;
    transition: width 600ms 0.2s ease;
    width: ${(props) => (props.$width ? String(props.$width + '%') : 0)};
    animation: ${(props) => (props.$isMoving ? fadeIn : 'none')} 200ms ease;
`;
