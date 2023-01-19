export default {
     name: 'shipping',
     title: 'Livrare',
     type: 'document',
     liveEdit: true,

     fields: [ 
         {
     name: 'locatie',
     title: 'Locatie',
     type: 'string'
         },
     {
          name: 'livrare',
          title: "Livrare",
          type: 'string'
     },
     {
          name: 'ansamblare',
          title: "Ansamblare",
          type: 'string' 
     },
     {
          name: 'ridicare_coltare',
          title: "Ridicare Coltare",
          type: 'string' 
     },
     {
          name: 'ridicare_canapele',
          title: "Ridicare Canapele",
          type: 'string' 
     }
     ]
}