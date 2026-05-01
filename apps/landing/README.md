# landing

Public marketing landing page for **runni**. Built with Next.js 16, Tailwind CSS v4, and shadcn/ui components from `@repo/ui`.

## Develop

```bash
turbo dev --filter=landing
```

The site runs on [http://localhost:3002](http://localhost:3002).

## Structure

- `app/page.tsx` — landing page composition
- `app/layout.tsx` — root layout, fonts, metadata
- `app/globals.css` — imports the shared Tailwind + shadcn theme from `@repo/ui/styles/globals.css`

shadcn/ui primitives live in [`packages/ui/src/components`](../../packages/ui/src/components). To add a new component, drop it under that directory and consume it via `@repo/ui/components/<name>`.
