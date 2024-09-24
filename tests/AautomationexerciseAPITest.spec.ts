import { test, expect, request } from '@playwright/test'
import allProductListDataPayload from '../data/allProductListData.json'
test("API 1: Get All Products List", async ({ request }) => {
    const getAllProductsListResponse = await request.get(`https://automationexercise.com/api//productsList`)
    const getAllProductsListResponseJson = await getAllProductsListResponse.json()
    // console.log(getAllProductsListResponseJson);
    expect(getAllProductsListResponse.ok()).toBeTruthy()
    expect(getAllProductsListResponse.status()).toBe(200)
})
test("API 2: POST To All Products List", async ({ request }) => {
    const PostAllProductListResponse = await request.post("https://automationexercise.com/api/productsList", {
        data: allProductListDataPayload
    })
    const PostAllProductListResponseJson = await PostAllProductListResponse.json()
    expect(PostAllProductListResponse.ok())
    expect(PostAllProductListResponse.status()).toBe(200)
    expect(PostAllProductListResponseJson).toHaveProperty("responseCode", 405)
    expect(PostAllProductListResponseJson).toHaveProperty("message", "This request method is not supported.")
})