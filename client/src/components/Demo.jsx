import { useState, useEffect } from "react";
import { Button } from "./ui";
import { CodeBlock } from "@/components/ui";
import { LoaderIcon } from "lucide-react";

export default function Demo() {
  const [data, setData] = useState({
    result: {},
    isLoading: false,
  });

  const [run, setRun] = useState(false);

  useEffect(() => {
    if (!run) return;

    const fetchData = async () => {
      setData((prev) => ({ ...prev, isLoading: true }));
      await new Promise((res) => setTimeout(res, 777));
      const res = await fetch("/api/myths/1?lang=es");
      const result = await res.json();
      setData({ result, isLoading: false });
    };

    fetchData();
  }, [run]);

  const codeString =
    'fetch("https://warani.vercel.app/api/myths/1?lang=es")\n  .then((res) => res.json())\n  .then((data) => console.log(data));';
  const codeResults = JSON.stringify(data?.result, null, 2);

  return (
    <div className="space-y-8">
      <CodeBlock code={codeString} language="javascript" />
      <Button disabled={run} onClick={() => setRun(true)}>
        <div className="flex items-center gap-x-2">
          <span>{data.isLoading ? "Running..." : "Run script"}</span>
          {data.isLoading && <LoaderIcon className="size-4 animate-spin" />}
        </div>
      </Button>
      <CodeBlock code={codeResults} language="json" />
    </div>
  );
}
