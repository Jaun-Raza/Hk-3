import axios from 'axios';
import { client } from '../../../sanity/lib/client';

export async function GET(req) {
    try {
        // Fetch data from the external API
        const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');

        // Insert each product into Sanity
        for (const product of data) {
            await client.create({
                _type: 'furniture',
                id: product.id,
                name: product.name,
                imagePath: product.imagePath,
                price: parseFloat(product.price),
                description: product.description,
                discountPercentage: product.discountPercentage,
                isFeaturedProduct: product.isFeaturedProduct,
                stockLevel: product.stockLevel,
                category: product.category,
            });
        }

        return new Response(JSON.stringify({ message: 'Data inserted successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error:', error.message);
        return new Response(JSON.stringify({ error: 'Failed to fetch or insert data' }), { status: 500 });
    }
}
