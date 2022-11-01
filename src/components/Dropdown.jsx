import { Box } from "@chakra-ui/react";
import MenuItems from "./MenuItems";

const styleDropdownSubmenu = {
   position: "absolute",
   left: "100%",
   top: "-7px",
};
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
   depthLevel = depthLevel + 1;
   const dropdownClass = depthLevel > 1 ? styleDropdownSubmenu : "";
   const showDropdown = dropdown ? { display: "block" } : "";
   return (
      <Box
         as="ul"
         position="absolute"
         right={0}
         left="auto"
         boxShadow="1px 1px 10px 0px"
         fontSize="0.875rem"
         zIndex={999}
         minWidth="10rem"
         padding="0.5rem 0"
         listStyleType="none"
         backgroundColor="#fff"
         borderRadius="0.5rem"
         display="none"
         {...dropdownClass}
         {...showDropdown}
         //  className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}
      >
         {submenus.map((submenu, index) => (
            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
         ))}
      </Box>
   );
};

export default Dropdown;
