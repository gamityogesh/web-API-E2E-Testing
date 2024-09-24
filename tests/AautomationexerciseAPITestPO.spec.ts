import { test, expect, request } from '@playwright/test'
import { APIUtils } from '../utils/APIUtils'
import allProductListDataPayload from '../data/allProductListData.json'

test("API E2E testing", async ({ request }) => {
    const apiUtils = new APIUtils(request)
    await apiUtils.getAllProductsList()
    await apiUtils.PostAllProductList(allProductListDataPayload)
})
