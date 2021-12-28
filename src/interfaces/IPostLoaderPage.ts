export interface IPost {
    _id?: string
    title: string
    vendorCode: string
    price: number
    manufactor: string
    discription: string
    available: boolean
    model: string
    catagory: string
    images: any[]
}