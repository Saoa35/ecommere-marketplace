"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
