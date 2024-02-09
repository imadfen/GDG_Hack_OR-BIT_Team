import Menu from "@/components/Menu";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-5 bg-[#060b26]">
      <div className="col-span-1">
        <Menu />
      </div>
      <div className="col-span-4">{children}</div>
    </div>
  );
}
