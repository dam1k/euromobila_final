export default {
     name: 'categoryType',
     title: 'Category Type',
     type: 'document',
     liveEdit: true,
     fields: [
          {
           name: 'name',
           title: 'Name',
           type: 'string'
          },
          {
               name: 'image',
               title: 'Image',
               type: 'image',
               options: {
                   hotspot: true
               }
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
               name: 'parentCategory',
               title: 'Parent Category',
               type: 'string'
              },
           
     ]
}