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
      description: (
        <>
          <p>
            Guarda tu clave <strong>ahora</strong>, no se volverá a mostrar.
          </p>
          {key && (
            <div className="bg-primary border-line relative mb-3 rounded border p-2">
              <code className="font-mono text-sm break-all">{key}</code>
            </div>
          )}
        </>
      ),
    },
    existing_key: {
      title: "Clave activa",
      description: (
        <p>
          Ya tienes una clave vinculada. Escribe a{" "}
          <a href="mailto:hi@emroco.de">hi@emroco.de</a> para soporte.
        </p>
      ),
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
      className="bg-secondary backdrop:bg-line fixed inset-0 m-auto w-11/12 max-w-sm rounded-md border-none p-8 text-center text-pretty"
    >
      <div className="flex flex-col">
        <h2>{title}</h2>
        {description}
        <Button onClick={closeDialog}>Entendido</Button>
      </div>
    </dialog>
  );
}
