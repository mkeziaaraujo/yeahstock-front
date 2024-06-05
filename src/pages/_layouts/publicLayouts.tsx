import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96">
        <Outlet />
      </div>
    </div>
  );
}
