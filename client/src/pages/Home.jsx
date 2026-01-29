import { Sidebar } from "@/components";
import MDXIntro from "@/content/intro.mdx";

export default function Home() {
  return (
    <div className="grid gap-12 md:grid-cols-[244px_auto]">
      <Sidebar />
      <div>
        <MDXIntro />
      </div>
    </div>
  );
}
