import { Button } from "./ui";
import { ArrowUpRightIcon } from "lucide-react";

export default function Header() {
  return (
    <section className="border-line border-b">
      <div className="container flex flex-col items-center py-[calc(var(--nav-h)*1.5)]">
        <div className="text-center">
          <div className="mx-auto flex w-max justify-center">
            <h1 className="flex flex-col items-center capitalize md:items-start">
              mitos
              <span className="text-accent--secondary md:ml-12">guaraníes</span>
            </h1>
          </div>
          <p className="text-tertiary/80 mx-auto mt-2 max-w-xl text-lg">
            Una API que provee información sobre las siete criaturas
            legendarias, su historia resumida e imágenes relacionadas.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <Button
            className="rounded-full!"
            href="https://github.com/emrocode/guarani-myths"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-x-2">
              <span>Ver en GitHub</span>
              <ArrowUpRightIcon className="size-4" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
