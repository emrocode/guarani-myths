import clsx from "clsx";
import { Highlight, themes } from "prism-react-renderer";
import PropTypes from "prop-types";
import { useThemeStore } from "@/store";

export default function CodeBlock({ code, language, ...props }) {
  const theme = useThemeStore((s) => s.theme);
  const prismTheme = theme === "dark" ? themes.vsDark : themes.vsLight;

  return (
    <div {...props}>
      <Highlight code={code} language={language} theme={prismTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(
              className,
              "rounded-md p-4 text-sm break-all whitespace-pre-wrap",
            )}
            style={{ ...style, backgroundColor: "var(--color-secondary)" }}
          >
            {tokens.map((line) => (
              <div key={line} {...getLineProps({ line })}>
                {line.map((token) => (
                  <span key={token} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
