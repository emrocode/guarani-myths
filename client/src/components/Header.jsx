import { Button } from "./ui";
import { GitHub } from "./svgl";
import { HeartHandshake } from "lucide-react";

export default function Header() {
  return (
    <section>
      <div className="container mt-[var(--nav-h)] flex flex-col items-center">
        <div className="text-center sm:text-left">
          <h1 className="capitalize">
            mitos <span className="text-accent--secondary">guaraníes</span>
          </h1>
          <p className="text-tertiary/60 mt-2 text-lg">
            Explora la mitología guaraní a través de esta API.
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
          <Button
            className="!rounded-full"
            href="https://github.com/sponsors/emrocode"
            rel="noopener noreferrer"
            target="_blank"
            variant="secondary"
          >
            <div className="flex items-center gap-x-2">
              <HeartHandshake className="size-5" />
              <span>Patrocinar</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
