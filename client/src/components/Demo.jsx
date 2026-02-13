import { useEffect } from "react";
import { Button } from "./ui";
import { CodeBlock } from "@/components/ui";
import { useDataStore } from "@/store";
import { LoaderIcon, PlayIcon } from "lucide-react";
import PropTypes from "prop-types";

export default function Demo({ origin }) {
  const data = useDataStore((s) => s.data);
  const run = useDataStore((s) => s.run);
  const setRun = useDataStore((s) => s.setRun);
  const key = useDataStore((s) => s.key);
  const setKey = useDataStore((s) => s.setKey);
  const fetchData = useDataStore((s) => s.fetchData);

  useEffect(() => {
    if (run) {
      fetchData();
    }
  }, [run, fetchData]);

  const codeString = `fetch("${origin}/api/myths/1?lang=es", {\n  headers: {\n    Authorization: "Bearer ${key || "YOUR_API_KEY"}"\n  }\n})\n.then((res) => res.json())\n.then((data) => console.log(data));`;
  const codeResults = JSON.stringify(data?.result, null, 2);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <input
          required
          className="bg-secondary w-full rounded-md p-4 text-sm"
          placeholder="API KEY"
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <CodeBlock code={codeString} language="javascript" />
      </div>
      <Button disabled={run || !key} onClick={() => setRun(true)}>
        <div className="flex items-center gap-x-2">
          {data.isLoading ? (
            <LoaderIcon className="size-4 animate-spin" />
          ) : (
            <PlayIcon className="size-4" />
          )}
          <span>{data.isLoading ? "Running..." : "Run script"}</span>
        </div>
      </Button>
      <CodeBlock code={codeResults} language="json" />
    </div>
  );
}

Demo.propTypes = {
  origin: PropTypes.string.isRequired,
};
