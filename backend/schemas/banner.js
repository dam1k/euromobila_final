export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'info',
            title: 'Info',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ]
}