<<<<<<< HEAD
import Link from "next/link";
import Login from "../pages/login"
import { NoEvent } from "../pages/NoEvent";
import { Feedback } from "../pages/Feedback";
import { ParticipantHomePage } from "../pages/ParticipantHomePage";
=======
"use client"

import NewEventForm from "@/components/NewEventForm";
import { NoEvent } from "@/pages/NoEvent";
import { useState } from "react";

>>>>>>> 8dd024b26f3e2873999c5f26d23425aaefdf3f06
export default function Home() {
  const [isNewEvent, setIsNewEvent] = useState(false);
  return (
<<<<<<< HEAD
    <ParticipantHomePage></ParticipantHomePage>
=======
    <>
      {isNewEvent ?
        <NewEventForm onCancel={() => setIsNewEvent(false)} onCreate={() => { }} />
        :
        <NoEvent onNewEvent={() => setIsNewEvent(true)} />
      }
    </>
>>>>>>> 8dd024b26f3e2873999c5f26d23425aaefdf3f06
  );
}
