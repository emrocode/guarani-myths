import { Link } from "react-router";
import { useThemeStore } from "@/store";
import { Button } from "@headlessui/react";
import { VercelBadge } from "./svgl";

export default function Footer() {
  const { toggleDarkMode } = useThemeStore();

  const date = new Date(2022, 0);

  return (
    <footer className="border-line border-y">
      <div className="container flex min-h-[var(--nav-h)] flex-col items-center py-8 text-center text-sm">
        <Link
          className="mb-4 hover:bg-inherit"
          rel="noopener noreferrer"
          target="_blank"
          to="https://vercel.com?utm_source=warani&utm_campaign=oss"
        >
          <VercelBadge />
        </Link>
        <span>Este proyecto utiliza la Licencia MIT.</span>
        <span>
          Creado por&nbsp;
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/emrocode"
          >
            <span>Emilio Romero</span>
          </Link>
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
