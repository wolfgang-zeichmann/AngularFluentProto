# Angular Fluent UI Web Components Demo

A simple Angular application demonstrating the integration and usage of Microsoft Fluent UI Web Components.

## Features

This demo application showcases various Fluent UI Web Components including:

- **Buttons**: Various button styles (default, accent, lightweight, outline)
- **Input Controls**: Text fields, checkboxes, radio buttons, select dropdowns
- **Interactive Controls**: Sliders, switches, progress indicators
- **Layout Components**: Cards, accordions, dividers
- **Visual Elements**: Badges and other UI elements

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Angular CLI (optional, included as dev dependency)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd AngularFluentProto
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200`

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts    # Main component with Fluent UI integration
│   ├── app.component.html  # Template showcasing various components
│   ├── app.component.css   # Component-specific styles
│   └── app.module.ts       # App module with CUSTOM_ELEMENTS_SCHEMA
├── styles.css              # Global styles
└── index.html             # Main HTML file
```

## Key Implementation Details

- **Custom Elements Schema**: Added `CUSTOM_ELEMENTS_SCHEMA` to allow Fluent UI Web Components
- **Component Registration**: Fluent UI components are registered in the `ngOnInit` lifecycle hook
- **Two-way Data Binding**: Demonstrates integration with Angular's reactive patterns
- **Event Handling**: Shows how to handle Fluent UI component events in Angular

## Technologies Used

- Angular 17
- Microsoft Fluent UI Web Components
- TypeScript
- CSS3

## License

This project is licensed under the MIT License.