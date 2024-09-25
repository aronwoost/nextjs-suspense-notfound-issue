# Next.js Suspense notFound() issue

### How to reproduce

1. `npm run dev` (`npm run build && npm run start` has the same behavior)
2. Open http://localhost:3000/product/10

Result: "not found" page opens with http status code 200  
Expected result: "not found" page opens with http status code 404

### Details

`/product/10` triggest the not found page by calling [`notFound()`](https://nextjs.org/docs/app/api-reference/functions/not-found). Other product IDs behave "normal". See yourself: http://localhost:3000/product/3

"not found" pages triggered by Next.js routing do have the correct status code. See yourself: http://localhost:3000/123456789 So it seems to be related to `notFound()`.

When removing the `<Suspense>` boundary in layout.js it will work as expected with status code 404. Note: removing the `<Suspense>` boundary is not an option as we need it for other stuff.
