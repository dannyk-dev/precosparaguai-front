import { StaticImageData } from 'next/image';
import { IRating } from './IRating';
import { LucideIcon } from 'lucide-react';

export interface ICategory {
    _id: string;
    title: string;
    icon: string;
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
