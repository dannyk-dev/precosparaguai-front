import { FullStar, EmptyStar } from '../components';
import { IRating } from '../interfaces';

export const useCalculateAverageRating = ({ rate, count }: IRating) => {
    const max = 5;
    const min = 1;

    return Math.min(Math.max(min, (count / rate) * max), max);
};

export const useRatingStars = (averageRating: number) => {
    const stars = [];

    for (let i = 0; i < averageRating; i++) {
        stars.push(FullStar);
    }

    for (let i = averageRating; i < 5; i++) {
        stars.push(EmptyStar);
    }

    return stars;
};
