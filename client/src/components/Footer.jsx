import { NavLink } from "react-router";

export default function Footer() {
  const date = new Date(2022, 0);

  return (
    <footer className="border-line border-y">
      <div className="container flex min-h-[var(--nav-h)] flex-col items-center gap-x-2 py-8 text-center text-sm">
        <span>Este proyecto utiliza la Licencia MIT.</span>
        <span>
          Creado por&nbsp;
          <NavLink
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/emrocode"
          >
            <span>Emilio Romero</span>
          </NavLink>
          &nbsp;{date.getFullYear()}&ndash;present
        </span>
      </div>
    </footer>
  );
}
