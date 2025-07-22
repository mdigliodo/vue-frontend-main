import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/vue-frontend-main/register')
})

test.describe('Register User Form', () => {
    test('should display the registration form', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('Keep it simple!')
        await expect(page.locator('form')).toBeVisible()
    })

    test('should submit the form successfully', async ({ page }) => {
        await page.fill('#username-input', 'User Example')
        await page.fill('#email-input', 'example.user@example.com')
        await page.fill('#password-input', 'Password123!')
        await page.fill('#confirm-password-input', 'Password123!')
        await page.click('button[type="submit"]')
        await expect(page.locator('#success-user-register')).toHaveText('Success!')
    })

    test('should not submit the form when fields are invalid', async ({ page }) => {
        await page.fill('#username-input', '')
        await page.fill('#email-input', '')
        await page.fill('#password-input', '')
        await page.fill('#confirm-password-input', 'Pass')
        await page.click('button[type="submit"]')
        await expect(page.locator('#success-user-register')).not.toBeVisible({ timeout: 5000 })
    })

    test('should validate required fields', async ({ page }) => {
        await page.click('button[type="submit"]')
        await expect(page.locator('#username-input-error')).toBeVisible()
        await expect(page.locator('#email-input-error')).toBeVisible()
        await expect(page.locator('#password-input-error')).toBeVisible()
        await expect(page.locator('#confirm-password-input-error')).toBeVisible()
    })
})
