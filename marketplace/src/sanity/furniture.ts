import { defineType, defineField } from "sanity";

export const furniture = defineType({
    name: 'furniture',
    type: 'document',
    title: 'Furniture',
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'string',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'imagePath',
            title: 'Image Path',
            type: 'url',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'discountPercentage',
            title: 'Discount Percentage',
            type: 'number',
        }),
        defineField({
            name: 'isFeaturedProduct',
            title: 'Is Featured Product',
            type: 'boolean',
        }),
        defineField({
            name: 'stockLevel',
            title: 'Stock Level',
            type: 'number',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
    ],
});
