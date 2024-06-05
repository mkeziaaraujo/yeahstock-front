import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/SideBar";

export function PrivateLayout() {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
}
