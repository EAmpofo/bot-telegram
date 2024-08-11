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

## `package.json` Overview
- Project Name: telegrambot
- Version: 0.0.0
- Type: Module

## Scripts