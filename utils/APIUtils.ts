import { expect } from '@playwright/test'
export class APIUtils {
    readonly request: any
    readonly BASE_URL = "https://automationexercise.com/api/"
    constructor(request: any) {
        this.request = request

    }
    async getAllProductsList() {
        const getAllProductsListResponse = await this.request.get(`${this.BASE_URL}/productsList`)
        const getAllProductsListResponseJson = await getAllProductsListResponse.json()
        // console.log(getAllProductsListResponseJson);
        expect(getAllProductsListResponse.ok()).toBeTruthy()
        expect(getAllProductsListResponse.status()).toBe(200)
    }
    async PostAllProductList(allProductListDataPayload:any){
        const PostAllProductListResponse = await this.request.post("https://automationexercise.com/api/productsList", {
            data: allProductListDataPayload
        })
        const PostAllProductListResponseJson = await PostAllProductListResponse.json()
        expect(PostAllProductListResponse.ok())
        expect(PostAllProductListResponse.status()).toBe(200)
        expect(PostAllProductListResponseJson).toHaveProperty("responseCode", 405)
        expect(PostAllProductListResponseJson).toHaveProperty("message", "This request method is not supported.")
    }
}