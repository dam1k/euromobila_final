export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    liveEdit: true,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
            
        },
        {
            name: 'stofe',
            title: 'Stofe',
            type: 'array',
            of: [{type: 'stofa'}]
        },
        {
            name: 'productInfo',
            title: 'Product Info',
            type: 'array',
            of: [{type: 'productInfo'}]
        }
        
    ]
}