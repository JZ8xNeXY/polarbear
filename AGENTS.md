# Repository Guidelines

## Project Structure & Module Organization
- Current state: this repository is empty and has no established module layout.
- When adding code, use a clear top-level split such as `src/` for application code, `tests/` for test suites, and `assets/` or `public/` for static files.
- Keep configuration files in the root (e.g., `package.json`, `pyproject.toml`, `Makefile`) and add a short `README.md` describing the runtime and entry points.

## Build, Test, and Development Commands
- No build or test commands are defined yet.
- Once tooling is added, document the primary commands here, for example:
  - `npm run dev` — start a local development server.
  - `npm test` or `pytest` — run the test suite.
  - `npm run build` or `make build` — produce production artifacts.
- Keep command examples aligned with actual scripts/configuration in this repo.

## Coding Style & Naming Conventions
- No style rules are enforced yet.
- When you introduce a language/toolchain, add its formatter and linter (e.g., `prettier`, `eslint`, `black`, `ruff`) and document the expected indentation (2 vs 4 spaces), max line length, and filename conventions.
- Prefer clear, descriptive names. Example patterns: `kebab-case` for files, `PascalCase` for classes, `camelCase` for functions/variables.

## Testing Guidelines
- No testing framework is configured yet.
- When tests are added, keep them alongside the code (`src/**/__tests__`) or in `tests/`, and use predictable names such as `*.test.*` or `test_*.py`.
- Document any coverage expectations once a runner is in place.

## Commit & Pull Request Guidelines
- There is no commit history to infer conventions from.
- Until standards exist, use Conventional Commits (e.g., `feat: add initial scaffold`, `fix: handle null input`).
- PRs should include a concise summary, linked issues (if any), and screenshots for UI changes.

## Agent-Specific Instructions
- Maintain this file as the repository evolves so new contributors have up-to-date guidance.
