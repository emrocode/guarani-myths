import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Codeblock({ code, language }) {
  return (
    <Highlight code={code} language={language} theme={themes.vsLight}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            className,
            "rounded p-4 break-words whitespace-pre-wrap",
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
  );
}

Codeblock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
