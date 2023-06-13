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
            type: 'text',
        },
        {
            name:'category',
            title: 'Category',
            type: 'string',
        },
        {
            name:'gender',
            title: 'Gender',
            type: 'string',
            initialValue: '',
            options:{
                list: [
                    { title: 'Boy', value: 'boy'},
                    { title: 'Girl', value: 'girl'},
                    { title: 'All', value: 'all'},
                ]
            }
        }
    ],
    },
]