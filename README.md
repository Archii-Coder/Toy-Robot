# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# Toy Robot Simulator

This project is a simulation of a toy robot moving on a square tabletop of dimensions 5 units x 5 units. The robot is free to roam around the surface of the table but must be prevented from falling to destruction.

## Features

- Place the robot on the table in specific X,Y coordinates and facing NORTH, SOUTH, EAST or WEST.
- Move the robot one unit forward in the direction it is currently facing.
- Rotate the robot 90 degrees left or right without changing its position.
- Prevent the robot from falling off the table.
- Report the X,Y coordinates and direction of the robot.

## Installation

1. Clone the repository:
   xxx

2. Navigate to the project directory:
   cd toy-robot

3. Install the dependencies:
   npm install

## Usage

1. Start the development server:
   npm run dev

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

3. Use the interface to control the robot:

- Enter X and Y coordinates (0-4) and select a direction to place the robot.
- Use the MOVE button to move the robot one unit forward.
- Use the LEFT and RIGHT buttons to rotate the robot.
- Use the REPORT button to see the current position and direction of the robot.

## Project Structure

- `src/App.tsx`: Main application component
- `src/components/Grid.tsx`: Grid component for visualizing the robot's position
- `src/hooks/useRobot.ts`: Custom hook for managing robot state and actions
- `src/types/index.ts`: TypeScript type definitions
- `src/styles/Grid.css`: Styles for the grid component

## Technologies Used

- React
- TypeScript
- Vite

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
