import { IItem } from './interfaces/IItem';
import { ICustomer } from './interfaces/ICustomer';

export const ITEM: Array<IItem> = [
    { itemId: 1, name: 'Chiken Tenders', price: 3.50 },
    { itemId: 2, name: 'Chiken Tenders w/Fries', price: 4.99 },
    { itemId: 3, name: 'Chiken Tenders w/Onion', price: 5.99 },
    { itemId: 4, name: 'Grilled Cheese Sandwich', price: 2.50 },
    { itemId: 5, name: 'Grilled Cheese Sandwich w/Fries', price: 3.99 },
    { itemId: 6, name: 'Grilled Cheese Sandwich w/Onion', price: 4.99 },
    { itemId: 7, name: 'Soup', price: 1.99 },
    { itemId: 8, name: 'Onion Rings', price: 2.50 },
    { itemId: 9, name: 'Fries', price: 2.99 },
    { itemId: 10, name: 'Sweet Potato Fries', price: 1.99 },
    { itemId: 11, name: 'Sweet Tea', price: 2.49 },
    { itemId: 12, name: 'Bottle Water', price: 1.79 },
    { itemId: 13, name: 'Canned Drinks', price: 1.00 },
    { itemId: 14, name: 'Sweet Potato Fries', price: 1.00 },
];

export const CUSTOMERS: Array<ICustomer> = [
    { customerId: 1, name: 'David' },
    { customerId: 2, name: 'Oleg' },
    { customerId: 3, name: 'Gleb' },
    { customerId: 4, name: 'Kiryll' },
    { customerId: 5, name: 'Mark' },
];
