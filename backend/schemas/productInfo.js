export default {
     name: 'productInfo',
     title: 'Product Info',
     type: 'object',
     fields: [
          {
               name: 'dimensiuni',
               title: 'Dimensiuni',
               type: 'array',
               of: [{type: 'string'}]
          },
          {
               name: 'structura',
               title: 'Structura',
               type: 'array',
               of: [{type: 'string'}]
          },
          {
               name: 'compozitie_sezut_spatar',
               title: 'Compozitie sezut/spatar',
               type: 'array',
               of: [{type: 'string'}]
          },
          {
               name: 'material_de_acoperire',
               title: 'Material de acoperire',
               type: 'array',
               of: [{type: 'string'}]
          },
          {
               name: 'schema',
               title: 'Schema',
               type: 'image',
               options: {
                   hotspot: true
               }
           },
           {
               name: 'perne_spatar',
               title: 'Perne Spatar',
               type: 'array',
               of: [{type: 'string'}]
           }

     ]
}