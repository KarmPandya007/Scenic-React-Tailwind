# Debug Report

## Summary of errors
- **Registry install failure (E403)** when attempting to install external animation libraries (e.g., `@react-spring/web`).
  - Error log captured in `docs/registry-install-error.txt`.
  - **Probable root cause:** registry policy forbids access to certain packages from this environment (403).

## Reproduction steps
1. Run `npm install framer-motion @react-spring/web`.
2. Observe a `403 Forbidden` response from the npm registry.

## Fixes implemented
- **Minimal fix:** keep animations dependency-free (CSS-driven) and avoid adding external animation libraries that cannot be installed in this environment.
  - This prevents build/runtime failures caused by unresolved modules.

## Validation
- Run `npm run dev` and ensure Vite serves the site without module-resolution errors.

## Follow-up recommendations
- If registry access is required, configure an allowed registry/mirror or provide vendored packages.
- When access becomes available, consider adding Framer Motion for advanced animation orchestration.
