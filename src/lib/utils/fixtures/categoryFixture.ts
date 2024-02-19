import { ICategories } from '@/lib/interfaces';
import { createFixture } from './createFixture';
import { v4 as uuidv4 } from 'uuid';

const categoryFixture = createFixture<ICategories>({
    _id: uuidv4(),
    title: 'Sample Category',
    subcategories: {
        subcategory1: ['Subcategory1Item1', 'Subcategory1Item2'],
        subcategory2: ['Subcategory2Item1', 'Subcategory2Item2'],
    },
});

// export const CategoryFixture = createFixture<ICategories>({
//     _id: uuidv4(),
//     title: 'Celulares',
//     subcategories: {
//         apple: ['IPhone 15', 'IPhone 14', 'IPhone 13'],
//         samsung: ['S24', 'S23', 'A4', 'A5', 'A16'],
//     },
// });

export const CategoryFactory = categoryFixture.createCollection([
    {
        _id: uuidv4(),
        title: 'Electronics',
        subcategories: {
            TVs: ['Samsung TV', 'LG TV', 'Sony TV'],
            Cameras: ['Canon Camera', 'Nikon Camera'],
            SmartWatches: ['Apple Watch', 'Samsung Watch'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Phones',
        subcategories: {
            Apple: ['iPhone 13', 'iPhone 12', 'iPhone SE'],
            Samsung: ['Galaxy S21', 'Galaxy S20', 'Galaxy A52'],
            Google: ['Pixel 6', 'Pixel 5a'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Computers',
        subcategories: {
            Laptops: ['Apple MacBook Pro', 'Dell XPS', 'HP Spectre'],
            Desktops: ['Apple iMac', 'Dell Inspiron', 'HP Pavilion'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Accessories',
        subcategories: {
            Headphones: ['Sony WH-1000XM4', 'Bose QuietComfort 35 II'],
            Keyboards: ['Logitech G Pro', 'Razer Huntsman'],
            Mouse: ['Logitech MX Master 3', 'Razer DeathAdder V2'],
        },
    },
]);
