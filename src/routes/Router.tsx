import GameHome from "../views/gameScreen/GameHomeScreen/GameHome";
import MissionsScreen from "../views/gameScreen/Missions/MissionsScreen";
import TroopsScreen from "../views/gameScreen/Troops/TroopsScreen";
import DefenseScreen from "../views/gameScreen/Defense/DefenseScreen";
import OnboardingScreen from "../views/onboarding/OnboardingScreen";

export const routerPaths = {
    onboarding: "/",
    gameHome: "/game",
    missions: "/missions",
    troops: "/troops",
    defense: "/defense",
    
}

export const appRoutes = [
    {
        path: routerPaths.onboarding,
        elemment: <OnboardingScreen />
    },
    {
        path: routerPaths.gameHome,
        elemment: <GameHome />
    },
    {
        path: routerPaths.missions,
        elemment: <MissionsScreen />
    },
    {
        path: routerPaths.troops,
        elemment: <TroopsScreen />
    },
    {
        path: routerPaths.defense,
        elemment: <DefenseScreen />
    }
]