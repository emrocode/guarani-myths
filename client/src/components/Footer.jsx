import { NavLink } from "react-router";
import { useThemeStore } from "@/store";
import { Button } from "@headlessui/react";

export default function Footer() {
  const { toggleDarkMode } = useThemeStore();

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
        <Button className="mt-2" id="dTheme" onClick={toggleDarkMode}>
          <code>
            <span className="before:content-['Light'] dark:before:content-['Dark']">
              &nbsp;theme
            </span>
          </code>
        </Button>
      </div>
    </footer>
  );
}
