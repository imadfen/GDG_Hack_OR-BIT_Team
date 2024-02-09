import React from "react";
import MainModal from "./MainModal";
const CreateEventModal = ({ ModalOpen, setModalOpen, Cast }) => {


  return (
    <MainModal ModalOpen={ModalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border rounded-2xl md:w-3/5 lg:q-4/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white">
        <div className="flex-col w-full h-full">
          <div className="flex jusitfy-start">
            <span className="font-xl">{"<"}</span>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default CreateEventModal;
