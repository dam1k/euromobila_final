export default {
     name: 'productInfo',
     title: 'Product Info',
     type: 'object',
     liveEdit: true,
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
           },
           {
               name: 'sezut_c2_extensibil',
               title: 'Sezut C2 Extensibil',
               type: 'array',
               of: [{type: 'string'}]
           },
           {
               name: 'perne_brate',
               title: 'Perne Brate',
               type: 'array',
               of: [{type: 'string'}]
           },
          { 
           name: 'sezut_spatar',
           title: 'Sezut Spatar',
           type: 'array',
           of: [{type: 'string'}]
          },
           {
               name: 'additional_info',
               title: 'Additional Info',
               type: 'array',
               of: [{type: 'string'}]
           }
     ]
}