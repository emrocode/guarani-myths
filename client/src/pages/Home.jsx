import { Sidebar } from "@/components";
import MDXIntro from "@/content/intro.mdx";

export default function Home() {
  return (
    <div className="grid gap-8 sm:grid-cols-[220px_auto]">
      <Sidebar />
      <div>
        <MDXIntro />
      </div>
    </div>
  );
}
