import { LoginButton, LogoutButton } from "./buttons";
import { MobileSidebar } from "./mobile-sidebar";
import { UserAvatar } from "./user-avatar";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
