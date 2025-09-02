import { NavLink } from "react-router";
import { GitHub } from "./svgl";

export default function Header() {
  return (
    <header>
      <nav className="container mt-[var(--nav-h)] flex min-h-[var(--nav-h)] flex-col items-center justify-center gap-6 md:justify-between">
        <NavLink className="text-inherit no-underline" to="/">
          <h1 className="text-center capitalize">
            mitos <span className="text-accent">guaraníes</span>
          </h1>
        </NavLink>
        <NavLink
          className="ring-line ring-offset-primary bg-accent flex max-w-max gap-x-2 rounded-xs px-4 py-2 text-sm font-medium whitespace-nowrap text-white no-underline ring ring-offset-[1.5px] disabled:opacity-60"
          rel="noopener noreferrer"
          target="_blank"
          to="https://github.com/emrocode/guarani-myths"
        >
          <GitHub className="size-5" />
          <span>Ver en GitHub</span>
        </NavLink>
      </nav>
    </header>
  );
}
