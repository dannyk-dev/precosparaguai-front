import { IRating } from './IRating';

export interface ICategories {
    _id: string;
    title: string;
    icon?: string;
    subcategories: Record<string, string[]>;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: IRating;
}
