import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function CodeBlock({ code, language, ...props }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const updateTheme = () => {
      const html = document.documentElement;

      if (!(html.getAttribute("data-theme") === "dark")) {
        return setTheme(themes.vsLight);
      }

      setTheme(themes.vsDark);
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div {...props}>
      <Highlight code={code} language={language} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(
              className,
              "rounded p-4 break-all whitespace-pre-wrap",
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
