type ServiceProps = {
  name: string;
  summary: string;
  description: React.FC;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

import { Dialog, Transition } from "@headlessui/react";
import { Component, Fragment, useState } from "react";

export function Service(props: ServiceProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* <div className="inset-0 flex items-center justify-center">
        
      </div> */}
      <button type="button" onClick={openModal} className="w-full">
        <div className="flex flex-row sm:flex-col sm:justify-center items-center sm:gap-y-4 border p-4 
        rounded-lg bg-white/90 hover:bg-white shadow-lg active:bg-blue-100">
          <props.icon className="h-20 w-20 p-5 bg-orange-700 text-white rounded-full shadow-lg" />
          <div className="flex flex-col items-start justify-center pl-4 sm:items-center">
            <div className="uppercase tracking-wide text-lg text-dark font-extrabold">
              {props.name}
            </div>
            <div className="text-left sm:text-center text-sm">
              {props.summary}
            </div>
            <div className="sm:mt-4 text-orange-700">Mais...</div>
          </div>
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md sm:max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-sans text-2xl font-bold "
                  >
                    {props.name}
                    <div className="bg-blue-100 w-full h-[0.01rem]"></div>
                  </Dialog.Title>

                  <div className="mt-4 text-sm sm:text-md md:text-lg text-gray-500 text-justify list-disc list-inside">
                    <props.description />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Voltar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
