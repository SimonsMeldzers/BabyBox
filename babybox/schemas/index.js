export const schemaTypes = [
    {
        name: 'product',
        title: 'Products',
        type: 'document',
        fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'price',
            title: 'Price',
            type:'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name:'category',
            title: 'Category',
            type: 'string',
        }
    ],
    },
    {
        name: 'girl-product',
        title: 'Girl Products',
        type: 'document',
        fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'price',
            title: 'Price',
            type:'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name:'category',
            title: 'Category',
            type: 'string',
        }
    ],
    },
    {
        name: 'boy-product',
        title: 'Boy Products',
        type: 'document',
        fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'price',
            title: 'Price',
            type:'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name:'category',
            title: 'Category',
            type: 'string',
        }
    ],
    },
    {
        name: 'featured-product',
        title: 'Featured Products',
        type: 'document',
        fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'price',
            title: 'Price',
            type:'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name:'category',
            title: 'Category',
            type: 'string',
        }
    ],
    },
]