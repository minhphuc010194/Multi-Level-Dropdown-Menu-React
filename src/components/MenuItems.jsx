import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
   const [dropdown, setDropdown] = useState(false);

   let ref = useRef();

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
      window.innerWidth > 960 && setDropdown(true);
   };

   const onMouseLeave = () => {
      window.innerWidth > 960 && setDropdown(false);
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
         px={2}
      >
         {items.url && items.submenu ? (
            <>
               <Box
                  as="button"
                  display="flex"
                  alignItems="center"
                  color="inherit"
                  fontSize="inherit"
                  border="none"
                  backgroundColor="transparent"
                  cursor="pointer"
                  width="100%"
                  onClick={() => setDropdown((prev) => !prev)}
                  _hover={{
                     bg: "#f2f2f2",
                  }}

                  // aria-haspopup="menu"
                  // aria-expanded={dropdown ? "true" : "false"}
               >
                  {window.innerWidth < 960 && depthLevel === 0 ? (
                     items.title
                  ) : (
                     <Link
                        to={items.url}
                        style={{
                           display: "block",
                           fontSize: "inherit",
                           color: "inherit",
                           textDecoration: "none",
                        }}
                     >
                        {items.title}
                     </Link>
                  )}

                  {depthLevel > 0 &&
                  window.innerWidth < 960 ? null : depthLevel > 0 &&
                    window.innerWidth > 960 ? (
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
         ) : !items.url && items.submenu ? (
            <>
               <Box
                  as="button"
                  display="flex"
                  alignItems="center"
                  color="inherit"
                  fontSize="inherit"
                  border="none"
                  backgroundColor="transparent"
                  cursor="pointer"
                  width="100%"
                  _hover={{
                     bg: "#f2f2f2",
                  }}
                  onClick={() => setDropdown((prev) => !prev)}
                  // aria-expanded={dropdown ? "true" : "false"}
                  // aria-haspopup="menu"
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
               to={items.url}
               style={{
                  display: "block",
                  fontSize: "inherit",
                  color: "inherit",
                  textDecoration: "none",
               }}
            >
               {items.title}
            </Link>
         )}
      </Box>
   );
};

export default MenuItems;
