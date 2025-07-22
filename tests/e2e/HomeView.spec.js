import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/vue-frontend-main/')
})

test.describe('Home View', () => {
    test('should display nav', async ({ page }) => {
        await expect(page.locator('nav')).toBeVisible()
    })

    test('should display a links', async ({ page }) => {
        await expect(page.locator('a')).toHaveCount(3)
        await expect(page.locator('a')).toHaveText(['Ambar', 'Home', 'Register'])
    })

    test('should display register, home links', async ({ page }) => {
        await expect(page.locator('a[id="home-nav-menu-item"]')).toHaveText(/Home/)
        await expect(page.locator('a[id="register-nav-menu-item"]')).toHaveText(/Register/)
        await expect(page.locator('#navbar-i18n')).toBeVisible()
    })

    test('should display i18n button', async ({ page }) => {
        await expect(page.locator('#navbar-i18n')).toBeVisible()
    })

    test('should display the home title and subtitle', async ({ page }) => {
        await expect(page).toHaveTitle(/Ambar Challenge/)
    })

    test('should display the home title and subtitle on content page home', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText(/Welcome to Ambar's Technical Challenge/)
        await expect(page.locator('p[id="subtitle"]')).toHaveText(/Explore and solve exciting coding challenges designed to boost your skills./)
        await expect(page.locator('p[id="subtitle-invite"]')).toHaveText(/Ready to shape the future—let's begin./)
    })

    test('should display button to go introduction page', async ({ page }) => {
        await expect(page.locator('button[id="home-intro-button"]')).toHaveText(/Let's start with the Introduction/)
    })
})

// test.describe('Register Form', () => {
//     test('should display the registration form', async ({ page }) => {
//         await expect(page.locator('h1')).toHaveText('Formulario de Registro')
//         await expect(page.locator('form')).toBeVisible()
//     })

//     test('should submit the form successfully', async ({ page }) => {
//         await page.fill('input[name="firstName"]', 'John')
//         await page.fill('input[name="lastName"]', 'Doe')
//         await page.fill('input[name="email"]', 'john.doe@example.com')
//         await page.fill('input[name="password"]', 'Password123!')
//         await page.fill('input[name="confirmPassword"]', 'Password123!')
//         await page.click('button[type="submit"]')
//         await expect(page.locator('h1')).toHaveText('Registro Exitoso')
//     })
// })
