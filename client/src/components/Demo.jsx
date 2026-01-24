import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./ui";
import { CodeBlock } from "@/components/ui";
import { LoaderIcon } from "lucide-react";
import PropTypes from "prop-types";

export default function Demo({ origin }) {
  const [data, setData] = useState({
    result: {},
    isLoading: false,
  });

  const [run, setRun] = useState(false);
  const [key, setKey] = useState("");

  useEffect(() => {
    if (!run) return;

    const fetchData = async () => {
      setData((prev) => ({ ...prev, isLoading: true }));

      try {
        const [response] = await Promise.all([
          axios.get("/api/myths/1", {
            params: { lang: "es" },
            headers: { Authorization: `Bearer ${key}` },
            validateStatus: () => true,
          }),
          new Promise((t) => setTimeout(t, 777)),
        ]);

        setData({ result: response?.data, isLoading: false });
      } catch {
        setData((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, [run]);

  const codeString = `fetch("${origin}/api/myths/1?lang=es")\n  .then((res) => res.json())\n  .then((data) => console.log(data));`;
  const codeResults = JSON.stringify(data?.result, null, 2);

  return (
    <div className="space-y-8">
      <input
        required
        className="bg-secondary w-full rounded-md p-4 text-sm"
        placeholder="API KEY"
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <CodeBlock code={codeString} language="javascript" />
      <Button disabled={run || !key} onClick={() => setRun(true)}>
        <div className="flex items-center gap-x-2">
          <span>{data.isLoading ? "Running..." : "Run script"}</span>
          {data.isLoading && <LoaderIcon className="size-4 animate-spin" />}
        </div>
      </Button>
      <CodeBlock code={codeResults} language="json" />
    </div>
  );
}

Demo.propTypes = {
  origin: PropTypes.string.isRequired,
};
