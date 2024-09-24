import { test, expect, request } from '@playwright/test'
import { APIUtils } from '../utils/APIUtils'
import allProductListDataPayload from '../data/allProductListData.json'
let apiUtils
test.beforeAll(async ({ request }) => {
    apiUtils = new APIUtils(request)
})
test("API 1: Get All Products List", async ({ request }) => {
    
    await apiUtils.getAllProductsList()
})
test("API 2: POST To All Products List", async ({ request }) => {
    await apiUtils.p


})