import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/vue-frontend-main/admin/profile')
})

test.describe('Profile View', () => {
    test('should display the title and sidebar', async ({ page }) => {
        await expect(page.locator('#title-user-profile-view')).toHaveText('Profile')
    })

    test('should display the profile picture change option', async ({ page }) => {
        await expect(page.locator('#change-profile-picture')).toHaveText('Change Profile Picture')
    })

    test('should display four options in sidebar', async ({ page }) => {
        await expect(page.locator('#tab-sidebar-0')).toBeVisible()
        await expect(page.locator('#tab-sidebar-1')).toBeVisible()
        await expect(page.locator('#tab-sidebar-2')).toBeVisible()
        await expect(page.locator('#tab-sidebar-3')).toBeVisible()
    })

    test('should change active tab when clicking on sidebar options', async ({ page }) => {
        await page.click('#tab-sidebar-0')
        await expect(page.locator('#tab-0')).toHaveText(/Basic Information/)

        await page.click('#tab-sidebar-1')
        await expect(page.locator('#tab-0')).toHaveText(/Company Information/)

        await page.click('#tab-sidebar-2')
        await expect(page.locator('#tab-0')).toHaveText(/Bank Information/)

        await page.click('#tab-sidebar-3')
        await expect(page.locator('#tab-0')).toHaveText(/Security and Privacy/)
    })
})
