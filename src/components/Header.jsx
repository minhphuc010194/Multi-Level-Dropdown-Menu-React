import Navbar from "./Navbar";
// ...
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               maxWidth: "1200px",
               margin: "0 auto",
               padding: "10px 20px",
            }}
         >
            <Link
               to="/"
               style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  color: "inherit",
                  marginRight: "20px",
               }}
            >
               Logo
            </Link>
            <Navbar />
         </div>
      </header>
   );
};

export default Header;
