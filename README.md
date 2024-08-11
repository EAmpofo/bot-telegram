# TelegramBot

## Overview

The **TelegramBot** project is a web-based application designed to interface with a Telegram bot, providing users with an interactive and engaging experience. The project leverages modern web technologies such as React, TypeScript, and Vite, with a focus on a modular and maintainable architecture. It is built with scalability in mind, using tools like Redux for state management and Tailwind CSS for styling. The project features various components that work together to deliver a smooth user experience, including onboarding screens, game-related screens, and shared utilities.

## Directory Structure

The project is organized into several key directories:

```plaintext
├───public
│       vite.svg
│
└───src
    │   App.tsx
    │   index.css
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───assets
    │   ├───icons
    │   │   │   BoltVector.png
    │   │   │   Boost.png
    │   │   │   Canada.png
    │   │   │   CaretRight.png
    │   │   │   Deffense.png
    │   │   │   down.png
    │   │   │   flight.png
    │   │   │   globe.png
    │   │   │   Japan.png
    │   │   │   Mexico.png
    │   │   │   reward.png
    │   │   │   Scotland.png
    │   │   │   Spain.png
    │   │   │   Swip.png
    │   │   │   ThunderBolt.png
    │   │   │   twitter.png
    │   │   │   youtube.png
    │   │   └───svgs
    │   │           ArrowDown.tsx
    │   │           Check.tsx
    │   │           Close.tsx
    │   │           Gun.tsx
    │   │           HomeSvg.tsx
    │   │           MissionSvg.tsx
    │   │           PatternGroup.tsx
    │   │           Progress.tsx
    │   │           TroopSvg.tsx
    │   └───images
    │           Alien.png
    │           aliens-banner.png
    │           bg.jpeg
    │           BiteAlien.png
    │           biteAlienOverlayBottom.png
    │           Coins.png
    │           confirmBg.png
    │           down.png
    │           EnergyBoost.png
    │           index.ts
    │           millitary.png
    │           mission.png
    │           Octagon.png
    │           OctagonLevel.png
    │           plane.png
    │           proceedBg.png
    │           SelectCountryBackground.png
    │           skipBg.png
    │           Spear.png
    │           SpearWithBg.png
    │           spike.png
    │           ufo.png
    │           ufoback.png
    │           UfoVector.png
    ├───components
    │   ├───game
    │   │       GameHomeScreen.tsx
    │   │       Reward.tsx
    │   │       RewardRecieved.tsx
    │   ├───onboading
    │   │       LucidiaAlliance.tsx
    │   │       LucidiaWelcome.tsx
    │   │       SelectCountry.tsx
    │   │       WelcomeScreen.tsx
    │   └───shared
    │           AlienCard.tsx
    │           AppAlert.tsx
    │           AppButton.tsx
    │           BackgroundPattern.tsx
    │           BiteAlien.tsx
    │           ButtonWithBackground.tsx
    │           CustomSelect.tsx
    │           IconBox.tsx
    │           IconButton.tsx
    │           LevelUp.tsx
    │           SkipTutorialCard.tsx
    │           UfoOverlay.tsx
    ├───routes
    │       Router.tsx
    ├───store
    │   │   index.ts
    │   └───slice
    │           userSlice.ts
    ├───utils
    │   ├───helpers
    │   │       helper.ts
    │   ├───interfaces
    │   │       interface.ts
    │   └───styles
    │           customStyle.css
    └───views
        ├───gameScreen
        │   ├───Defense
        │   │       DefenseScreen.tsx
        │   ├───GameHomeScreen
        │   │       GameHome.tsx
        │   ├───Missions
        │   │       MissionsScreen.tsx
        │   └───Troops
        │           TroopsScreen.tsx
        └───onboarding
                OnboardingScreen.tsx
                TutorialScreen.tsx
```
## `package.json` Overview
- Project Name: telegrambot
- Version: 0.0.0
- Type: Module

## Scripts
- `dev`: Runs the development server using Vite.
- `build`: Compiles TypeScript and builds the project for production.
- `lint`: Runs ESLint to analyze and fix code issues.
- `preview`: Previews the production build.

## Dependencies
- React & ReactDOM: Core libraries for building the user interface.
- @emotion/react & @emotion/styled: For CSS-in-JS styling solutions.
- @mui/material: Material-UI components for building responsive interfaces.
- Redux & Redux Toolkit: For state management.
- React Router DOM: For handling client-side routing.
- Tailwind CSS: Utility-first CSS framework.
- TypeScript: Superset of JavaScript for type safety.

## DevDependencies
- Vite: Build tool for faster and leaner development.
- ESLint: Linter to maintain code quality.
- TypeScript & Type Definitions: For adding static types to JavaScript.
- Tailwind CSS & PostCSS: Tools for writing optimized and maintainable styles.

## Installation and Setup
To install and set up the project, follow these steps:
1. Clone the repository:
   ```
   git clone <repository-url>
   cd telegrambot
   ```
2. Install dependencies:
   ```
    npm install
   ```
3. Run the development server:
   ```
    npm run dev
   ```
4. Build the project:
   ```
    npm run build
   ```
5. Preview the production build:
   ```
    npm run preview
   ```
## Project Architecture
The TelegramBot project follows a modular architecture where each feature is encapsulated within its own directory. This approach promotes maintainability and scalability, allowing for easy updates and feature additions.
- **Components**: Reusable UI components.
- **Store**: Centralized state management using Redux.
- **Routes**: Handles navigation across different views.
- **Utils**: Utility functions, type definitions, and styles.

## How it works
![BotFlowchart](https://github.com/user-attachments/assets/4882d6a0-e6f5-46e3-a859-31d08ea5a748)


## Conclusion
The TelegramBot project is a modern, modular, and scalable web application built with React and TypeScript. Its architecture and design choices prioritize maintainability, ensuring that the project can grow and evolve with ease. The use of industry-standard tools like Vite, Redux, and Tailwind CSS further enhances the development experience, making it a robust foundation for building interactive web applications.
