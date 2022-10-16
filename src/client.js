import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: '0dcvzhmz',
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: 'sk52UpOxhZbMCzGnKIgRdjf568soYuOHkFSUgLA3zA3DFaWcd9OuKQ4681dmKNLiJyxOgnd3aiSfLRKExaiXUWJkCiuIoN4mCQcPME6Q8fZAD33254wDqzCQ6Dun9Lqb18agQnjY82O8wLcZJXCcKSlrsVDl90bHL4ETT8ZpnSRVRAJ5wrmR'
}) 

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)