import Header from "@/components/Header";
import Menu from "@/components/Menu";
import React from "react";

export default function Layout({ children, params }) {
  const { event_id } = params

  return (
    <div className="flex flex-col">
      <Header isAdmin={true} />
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Menu event_id={event_id} />
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
}
