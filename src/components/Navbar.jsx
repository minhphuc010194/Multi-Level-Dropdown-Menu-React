import { Box } from "@chakra-ui/react";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
   return (
      <Box as="nav">
         <Box
            as="ul"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            listStyleType="none"
         >
            {menuItems.map((menu, index) => {
               const depthLevel = 0;
               return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
               );
            })}
         </Box>
      </Box>
   );
};

export default Navbar;
