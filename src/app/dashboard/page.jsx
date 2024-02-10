"use client";

import NewEventForm from "@/components/NewEventForm";
import { NoEvent } from "@/pages/NoEvent";
import { useState } from "react";

export default function Home() {
  const [isNewEvent, setIsNewEvent] = useState(false);
  return (
    <>
      {isNewEvent ? (
        <NewEventForm
          onCancel={() => setIsNewEvent(false)}
          onCreate={() => {}}
        />
      ) : (
        <NoEvent onNewEvent={() => setIsNewEvent(true)} />
      )}
    </>
  );
}
