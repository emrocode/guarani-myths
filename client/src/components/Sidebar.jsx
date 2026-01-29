import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router";

const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, "-");
};

const SECTIONS = ["Introducción", "Para empezar", "Contribuir", "Pruébalo"];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-64px 0px -30% 0px", threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="top-8 hidden self-start rounded-md shadow md:sticky md:block">
      <ul className="divide-line bg-secondary mb-0 ml-0 list-none space-y-2 divide-y rounded-md px-8 py-4">
        {SECTIONS.map((item) => {
          const id = slugify(item);
          return (
            <li key={id}>
              <NavLink
                className={clsx(
                  "text-tertiary/80 block py-3 no-underline hover:bg-inherit",
                  {
                    "font-medium text-inherit!": activeId === id,
                  },
                )}
                target="_parent"
                to={{ hash: id }}
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
