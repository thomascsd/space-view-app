## Brief overview
This document provides project-specific guidelines for the `space-view-app` Angular project. The goal is to ensure code consistency, maintainability, and adherence to best practices.

## Communication style
- When requesting a new feature or change, please provide a clear and concise description of the requirements.
- I will ask for clarification if a request is ambiguous to ensure the implementation meets your expectations.
- I will provide a summary of the steps I plan to take before making changes.

## Development workflow
- Use the Angular CLI for generating new schematics (components, services, modules, etc.).
- When adding a new feature, the typical workflow is:
  - Create a new component in the appropriate feature directory.
  - Create or update a service to handle data fetching and business logic.
  - Update the routing configuration in `app-routing.module.ts`.
- Leverage existing shared components from `src/app/shared/components` whenever possible to maintain a consistent UI.

## Coding best practices
- **Components:**
  - Keep components focused on presentation logic. Business logic should reside in services.
  - Use strong typing for component inputs (`@Input()`) and outputs (`@Output()`).
- **Services:**
  - Provide services in `root` using the `providedIn: 'root'` syntax in `@Injectable()` unless they are specific to a feature module.
  - All interactions with the NASA API should be encapsulated within the `NasaService`.
  - Use the TypeScript interfaces defined in `src/app/core/models` for typing API responses.
- **Styling:**
  - Use SCSS for styling.
  - Scope styles to components to avoid global style conflicts.
- **Code Formatting:**
  - This project uses Prettier for automated code formatting. Please ensure it is applied before committing changes. Key styles from `package.json`:
    - `"singleQuote": true`
    - `"printWidth": 100`

## Project context
- **Core Technologies:**
  - Angular v18
  - RxJS for reactive programming
  - TypeScript
- **Key Libraries:**
  - `@ngneat/dialog` for creating dialogs and modals.
- **API:**
  - The application fetches data from various NASA APIs. All related logic is managed in `NasaService`.
