import { useThemeStore } from "@/store";
import { Button } from "@headlessui/react";
import { VercelBadge } from "./svgl";

export default function Footer() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const theme = useThemeStore((s) => s.theme);
  const date = new Date(2022, 0);

  return (
    <footer className="border-line border-y">
      <div className="container flex min-h-(--nav-h) flex-col items-center py-8 text-center text-sm">
        <a
          aria-label="Powered by Vercel"
          className="mb-4 hover:bg-inherit"
          href="https://vercel.com?utm_source=warani&utm_campaign=oss"
          rel="noopener noreferrer"
          target="_blank"
        >
          <VercelBadge />
        </a>
        <span>Este proyecto utiliza la Licencia MIT.</span>
        <span>
          Creado y mantenido por&nbsp;
          <a href="https://emroco.de" rel="noopener noreferrer" target="_blank">
            <span>Emilio Romero</span>
          </a>
          &nbsp;{date.getFullYear()}&ndash;present.
        </span>
        <Button className="mt-2" onClick={toggleTheme}>
          <code>{theme} theme</code>
        </Button>
      </div>
    </footer>
  );
}
