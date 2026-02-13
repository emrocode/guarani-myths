import { useThemeStore } from "@/store";
import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";
import PropTypes from "prop-types";

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
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
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
