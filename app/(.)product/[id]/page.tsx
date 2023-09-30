"use client";

import { Dialog } from "@headlessui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [product, setProduct] = useState<Product>();

  const id = useParams().id;

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      console.log(product);
    }

    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10"></Dialog.Panel>
      </div>
    </Dialog>
  );
}
