import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-secondary border-line border-y">
      <div className="container flex min-h-[var(--nav-h)] items-center justify-center gap-x-2 py-8 text-sm">
        <span>
          Creado por&nbsp;
          <NavLink
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/sponsors/emrocode"
          >
            <span>Emilio Romero</span>
          </NavLink>
        </span>
        <span>&middot;</span>
        <NavLink
          rel="noopener noreferrer"
          target="_blank"
          to="https://github.com/emrocode/guarani-myths/blob/main/LICENSE"
        >
          <span>MIT License</span>
        </NavLink>
      </div>
    </footer>
  );
}
