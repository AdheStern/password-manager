import { Logo } from "../logo";
import { SidebarRoutes } from "../sidebarRoutes";

export function Sidebar() {
  return (
    <>
      <div className="py-6">
        <Logo />
        <SidebarRoutes />
      </div>
    </>
  );
}
