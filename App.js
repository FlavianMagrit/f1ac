import React from "react";
import { View } from "react-native";
import { DriversPage } from "./src/pages/DriversPage";
import { ConstructorsPage } from "./src/pages/ConstructorsPage";
import { HomePage } from "./src/pages/HomePage";

export default function App() {
  return (
    <View>
      {/* <ConstructorsPage /> */}
      {/* <DriversPage /> */}
      <HomePage />
    </View>
  );
}
// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { View } from "react-native";
// import { MenuCard } from "~/components/MenuCard";

// export default function App() {
//   return (
//     <View className="flex-1 justify-center bg-black">
//         <MenuCard title="Drivers" image="https://e7.pngegg.com/pngimages/977/693/png-clipart-scuderia-ferrari-2013-formula-one-world-championship-mercedes-amg-petronas-f1-team-sport-formula-one-car-formula-1-sport-vehicle.png"/>
//         <MenuCard title="Constructors" image="https://e7.pngegg.com/pngimages/657/824/png-clipart-f1-2016-f1-2017-formula-1-app-store-video-game-2017-fia-formula-one-world-championship-game-video-game.png"/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }