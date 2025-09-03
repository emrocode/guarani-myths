import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="border-line border-y">
      <div className="container flex min-h-[var(--nav-h)] flex-col items-center gap-x-2 py-8 text-center">
        <span>Este proyecto se publica bajo la licencia MIT.</span>
        <span>
          Creado por&nbsp;
          <NavLink
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/emrocode"
          >
            <span>Emilio Romero.</span>
          </NavLink>
        </span>
      </div>
    </footer>
  );
}
