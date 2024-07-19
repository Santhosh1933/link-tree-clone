import { Button } from "../button";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="h-[10vh] z-50 fixed w-full bg-[#ffffffd3] backdrop-blur-md shadow-sm flex justify-center items-center">
      <div className="container  flex justify-between items-center ">
        <img src="/logo.svg" alt="" className="w-fit h-10 " />
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-full gap-1.5">
            <img src="./google-icon.svg" className="h-5 w-5 object-cover" />{" "}
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
