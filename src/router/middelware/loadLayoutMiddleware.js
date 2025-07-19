/**
 * The function `loadLayoutMiddleware` dynamically loads a layout component based on the route's
 * metadata, with a fallback to a default layout if an error occurs.
 * @param route - The `route` parameter in the `loadLayoutMiddleware` function is an object that
 * represents a route in your application. It likely contains information such as the route path, meta
 * information, and other route-related data. In the provided code snippet, the function is trying to
 * load a layout component based on
 */
export async function loadLayoutMiddleware (route) {
  try {
    const layout = route.meta.layout || 'MainLayout' // Default layout if not specified
    // We need to specify the path to the layout component
    // because the dynamic import limitation
    // does not allow to use the alias `@` in the import path
    // See: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    const layoutComponent = await import(`../../layouts/${layout}.vue`)
    route.meta.layoutComponent = layoutComponent.default
  } catch (e) {
    console.error('Error occurred in processing of layouts: ', e)
    const layout = 'MainLayout' // Fallback to default layout
    const layoutComponent = await import(`../../layouts/${layout}.vue`)
    route.meta.layoutComponent = layoutComponent.default
  }
}
