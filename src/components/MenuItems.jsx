import { useState, useEffect, useRef } from "react";
import { Box, Link } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { RANGE } from "utils";

const MenuItems = ({ items, depthLevel }) => {
   const [dropdown, setDropdown] = useState(false);
   const ref = useRef();

   useEffect(() => {
      const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
         }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
      };
   }, [dropdown]);

   const onMouseEnter = () => {
      window.innerWidth > RANGE && setDropdown(true);
   };

   const onMouseLeave = () => {
      window.innerWidth > RANGE && setDropdown(false);
   };

   const closeDropdown = () => {
      dropdown && setDropdown(false);
   };

   return (
      <Box
         as="li"
         position="relative"
         fontSize="14px"
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={closeDropdown}
         px={13}
      >
         {items.url && items.submenu ? (
            <>
               <Box _hover={{ bg: "gray.300" }}>
                  {window.innerWidth < RANGE && depthLevel === 0 ? (
                     items.title
                  ) : (
                     <Link to={items.url}>{items.title}</Link>
                  )}

                  {depthLevel > 0 &&
                  window.innerWidth < RANGE ? null : depthLevel > 0 &&
                    window.innerWidth > RANGE ? (
                     <span>&raquo;</span>
                  ) : (
                     <Box />
                  )}
               </Box>
               <Dropdown
                  depthLevel={depthLevel}
                  submenus={items.submenu}
                  dropdown={dropdown}
               />
            </>
         ) : !items.url && items.submenu ? (
            <>
               <Box
                  alignItems="center"
                  border="none"
                  backgroundColor="transparent"
                  cursor="pointer"
                  width="100%"
                  _hover={{
                     bg: "gray.300",
                  }}
                  onClick={() => setDropdown((prev) => !prev)}
               >
                  {items.title}{" "}
                  {depthLevel > 0 ? (
                     <span>&raquo;</span>
                  ) : (
                     <Box
                        as="span"
                        _after={{
                           content: `""`,
                           display: "inline-block",
                           marginLeft: "0.28em",
                           verticalAlign: "0.09em",
                           borderTop: "0.42em solid",
                           borderRight: "0.32em solid transparent",
                           borderLeft: "0.32em solid transparent",
                        }}
                     />
                  )}
               </Box>
               <Dropdown
                  depthLevel={depthLevel}
                  submenus={items.submenu}
                  dropdown={dropdown}
               />
            </>
         ) : (
            <Link
               href={items.url}
               display="block"
               fontSize="inherit"
               color="inherit"
               textDecoration="none"
               cursor="pointer"
               _hover={{
                  bg: "gray.300",
               }}
            >
               {items.title}
            </Link>
         )}
      </Box>
   );
};

export default MenuItems;
