import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import Button from "./Button";

export default function Dialog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dialogRef = useRef(null);

  const status = searchParams.get("status");
  const key = searchParams.get("key");

  const content = {
    success: {
      title: "Clave generada",
      description: "Guarda tu clave ahora, no se volverá a mostrar.",
    },
    existing_key: {
      title: "Clave activa",
      description: "Ya tienes una clave vinculada a esta cuenta.",
    },
  };

  useEffect(() => {
    if (
      (status === "success" || status === "existing_key") &&
      dialogRef.current
    ) {
      dialogRef.current.showModal();
    }
  }, [status]);

  const closeDialog = () => {
    dialogRef.current.close();
    searchParams.delete("status");
    searchParams.delete("key");
    setSearchParams(searchParams);
  };

  if (!content[status]) return;

  const { title, description } = content[status];

  return (
    <dialog
      ref={dialogRef}
      className="bg-secondary backdrop:bg-line fixed inset-0 m-auto max-w-sm rounded-md border-none p-8 text-center text-pretty"
    >
      <div className="flex flex-col">
        <h2>{title}</h2>
        <p>{description}</p>
        {key && (
          <div className="bg-primary border-line group relative mb-2 rounded-md border p-2">
            <code className="font-mono text-sm break-all">{key}</code>
          </div>
        )}
        <Button onClick={closeDialog}>Entendido</Button>
      </div>
    </dialog>
  );
}
