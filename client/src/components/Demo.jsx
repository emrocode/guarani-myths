import { useState, useEffect } from "react";
import { Button } from "@headlessui/react";
import Codeblock from "./Codeblock";
import { LoaderIcon, TerminalIcon } from "lucide-react";

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
      const res = await fetch("https://warani.vercel.app/api/myths/1?lang=es");
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
      <div>
        <h2>Pruébalo</h2>
        <p>Ejecuta este código aquí, en una consola o desde cualquier lugar:</p>
      </div>
      <Codeblock code={codeString} language="javascript" />
      <Button
        className="ring-line ring-offset-primary bg-accent flex max-w-max items-center gap-x-2 rounded-xs px-4 py-2 text-sm font-medium text-white ring ring-offset-[1.5px] disabled:opacity-60"
        disabled={run}
        onClick={() => setRun(true)}
      >
        <span>{data.isLoading ? "Running..." : "Run script"}</span>
        {data.isLoading ? (
          <LoaderIcon className="size-4 animate-spin" />
        ) : (
          <TerminalIcon className="size-4" />
        )}
      </Button>
      <Codeblock code={codeResults} language="json" />
    </div>
  );
}
