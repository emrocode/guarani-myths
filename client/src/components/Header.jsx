import { Button } from "./ui";
import { GitHub } from "./svgl";

export default function Header() {
  return (
    <section className="border-line border-b">
      <div className="container flex flex-col items-center py-[var(--nav-h)]">
        <div className="text-center">
          <h1 className="capitalize">
            mitos <span className="text-accent--secondary">guaraníes</span>
          </h1>
          <p className="text-tertiary/80 mx-auto mt-2 max-w-xl text-lg">
            Una API que provee información sobre las siete criaturas
            legendarias, su historia resumida e imágenes relacionadas.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <Button
            className="!rounded-full"
            href="https://github.com/emrocode/guarani-myths"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-x-2">
              <GitHub className="size-5" />
              <span>Ver en GitHub</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
