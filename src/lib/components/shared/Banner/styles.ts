import { StaticImageData } from 'next/image';
import styled from 'styled-components';

export const BannerCard = styled.div<{ image: string }>`
    background-image: url('${(props) => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
`;
