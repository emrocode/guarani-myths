import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router";

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const sections = ["Introducción", "Para empezar", "Contribuir", "Pruébalo"];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -30% 0px" },
    );

    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="top-8 hidden self-start rounded-md md:sticky md:block">
      <ul className="divide-line mb-0 ml-0 list-none space-y-2 divide-y">
        {sections.map((item) => {
          const id = slugify(item);
          return (
            <li key={id}>
              <NavLink
                className={clsx(
                  "text-tertiary/60 block py-3 no-underline hover:bg-inherit",
                  {
                    "font-medium !text-inherit": activeId === id,
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
