//Get all products from a certain category
export const searchByCategoryQuery = (category) => {
const query = `*[_type == 'product' && category match '${category}']{ 
    images,
    _id,
    name,
    price,
    category,
    slug
}`


return query
}

export const searchQuery = (searchTerm) => {
const query = `*[_type == 'product' && name match '${searchTerm}*' || category match '${searchTerm}*'] {
    images ,
    _id,
    name,
    category
}`

return query
}

//Get all data about a certain product
export const productQuery = (productId) => {
    const query = `*[_type == 'product' && _id match '${productId}']`
    
    return query
    }

// const furnitureDetailsQuery = ``
export const bannerQuery = `*[_type == 'banner'] | order(name)`

export const filterByPrice = (category) => {
    const query = `*[_type == 'product' && category match '${category}*'] | order(price) { 
        images,
        _id,
        name,
        price,
        category,
        slug
    }`
    return query
}

export const filterByName= (category) => {
    const query = `*[_type == 'product' && category match '${category}*'] | order(name) { 
        images,
        _id,
        name,
        price,
        category,
        slug
    }`
    return query
}


export const categoryTypeQuery = (categoryType) => {
    const query = `*[_type == 'categoryType' && parentCategory match '${categoryType}']`
    return query
}

export const categoryInfoQuery = (categoryName) => {
    const query = `*[_type == 'categoryInfo' && name match '${categoryName}']`
    return query
}