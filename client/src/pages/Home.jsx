import { Sidebar } from "@/components";
import MDXIntro from "@/content/intro.mdx";

export default function Home() {
  return (
    <div className="grid gap-16 sm:grid-cols-[200px_auto]">
      <Sidebar />
      <div>
        <MDXIntro />
      </div>
    </div>
  );
}
