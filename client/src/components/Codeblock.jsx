import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Codeblock({ code, language }) {
  return (
    <Highlight code={code} language={language} theme={themes.oneLight}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            className,
            "ring-line rounded p-4 break-words whitespace-pre-wrap ring",
          )}
          style={style}
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
