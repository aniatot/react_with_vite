
# Day 1 Recap

## Project Setup & Tooling

- Initialized a React project using Vite for fast development and HMR.
- Installed and configured Bootstrap for styling.
- Set up React Router for navigation and nested routes.
- Used `react-markdown` to render markdown files in the browser.

### NPM Commands Used

```bash
# Create Vite React app
npx create-vite@latest . --template react

# Install dependencies
npm install

# Install Bootstrap
npm install bootstrap

# Install React Router
npm install react-router-dom

# Install react-markdown for markdown rendering
npm install react-markdown
```

## Component & Routing Structure

- **Header, Footer, Sidebar, MainContent**: Main layout components.
- **Sidebar**: Navigation links, including a submenu for React Concepts.
- **MenuToolbar**: Top toolbar with contextual navigation.
- **PerspectiveContainer**: Main content area with scroll and markdown rendering.
- **ConceptsRecap**: Section for daily learning recaps, with dynamic markdown loading.

## Routing Example (Centralized)

```jsx
// src/routes.jsx
export const routes = [
  {
    path: '/',
    element: <PerspectiveContainer />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'reactConcepts',
        element: <ReactConcepts />,
        children: [
          { path: 'hooks', element: <Hooks /> },
          { path: 'components', element: <Components /> },
          { path: 'javascript', element: <JavascriptConcepts /> },
        ],
      },
      { path: 'games', element: <Games /> },
      {
        path: 'conceptsRecap',
        children: [
          { index: true, element: <ConceptsRecapList /> },
          { path: 'day/:dayId', element: <ConceptsRecapDay /> },
        ],
      },
    ],
  },
];
```

## Basic React Hooks Used

- **useState**: For local state in components (e.g., toggling, storing markdown content)
  ```jsx
  const [count, setCount] = useState(0);
  ```
- **useEffect**: For side effects like fetching markdown files
  ```jsx
  useEffect(() => {
    fetch('/src/conceptsRecap/days/day1.md')
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);
  ```
- **useLocation**: To determine the current route and show/hide navigation elements
  ```jsx
  import { useLocation } from 'react-router-dom';
  const location = useLocation();
  ```
- **useParams**: To extract route parameters (e.g., which day to show)
  ```jsx
  import { useParams } from 'react-router-dom';
  const { dayId } = useParams();
  ```

## Example: Markdown Rendering Component

```jsx
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function ConceptsRecapDay() {
  const { dayId } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/src/conceptsRecap/days/${dayId}.md`)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [dayId]);

  return (
    <div className="concepts-recap-markdown">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
```

---

_This file is part of the ConceptsRecap section. Add your daily notes and code snippets here as you learn more!_

- **Best Practices:**
  - Centralized route definitions for scalability.
  - Used feature folders and clean imports.

---

_This file is part of the ConceptsRecap section. Add your daily notes and code snippets here as you learn more!_
