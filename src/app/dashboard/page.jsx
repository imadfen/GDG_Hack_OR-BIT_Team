"use client";

import CreateAnnounecement from "@/components/CreateAnnouncement";
import CreateCriteria from "@/components/CreateCriteria";
import CreateMentorForm from "@/components/CreateMentorForm";
import CreateNewTeamForm from "@/components/CreateNewTeamForm";
import NewEventForm from "@/components/NewEventForm";
import CreateJudgeForm from "@/components/createJudgeForm";
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
