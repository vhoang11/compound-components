import React from "react";
import Menu from "./menu/Menu";
import MenuButton from "./menu/MenuButton";
import MenuDropdown from "./menu/MenuDropdown";
import MenuItem from "./menu/MenuItem";

function App() {
  const sports = ["Tennis", "Raquetball", "Pickleball", "Squash"];
  return (
    <>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.map(sport => (
            <MenuItem key={sport}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    </>
  )
}

export default App
