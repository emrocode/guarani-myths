import { KeyIcon } from "lucide-react";
import { Button, Corner } from "./ui";

export default function Header() {
  return (
    <section className="border-line border-b">
      <Corner />
      <div className="container flex flex-col items-center py-[calc(var(--space)*2)]">
        <div className="text-center">
          <div className="mx-auto flex w-max justify-center">
            <h1 className="max-w-64 w-full text-center pb-6 capitalize">
              <span className="font-thin">mitos</span> guaraníes
            </h1>
          </div>
          <p className="text-muted mx-auto mt-2 max-w-xl md:text-lg">
            Una API que provee información sobre las siete criaturas
            legendarias, su historia resumida e imágenes relacionadas.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <Button href="/api/auth/github">
            <div className="flex items-center gap-x-2">
              <KeyIcon className="size-4" />
              <span>Obtener credenciales</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
