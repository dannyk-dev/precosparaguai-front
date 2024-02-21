import { StaticImageData } from 'next/image';
import styled from 'styled-components';

export const BannerCard = styled.div<{ image: StaticImageData }>`
    background-image: url('${(props) => props.image.src}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
