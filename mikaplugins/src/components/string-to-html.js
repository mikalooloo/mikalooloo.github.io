import React from "react";
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import DOMPurify from 'dompurify';

// Sanitizes and parses strings to valid HTML for rendering in React
// pass in the input string and the darkMode bool
export default function StringToHTML(props) {
  // allows more tags/attributes/etc when sanitizing
  const sanitizeOptions = {
    FORCE_BODY: true,
    ADD_ATTR: ["class", "className"],
    ADD_TAGS: ["style", "id"]
  }

  // replaces tags with the right color mode
  const parseOptions = {
    replace: domNode => {
      if (!domNode.attribs) {
        return;
      }

      // adds quote blocking
      if (domNode.attribs.id === "q") {
        return props.darkMode ? <div className="dark-colorBlocked">{domToReact(domNode.children, parseOptions)}</div> : <div className="light-colorBlocked">{domToReact(domNode.children, parseOptions)}</div>;
      }

      // adds custom link coloring
      if (domNode.name === "a") {
        const props = attributesToProps(domNode.attribs);
        return props.darkMode ? <span className="dark-linkText"><a {...props}>{domToReact(domNode.children, parseOptions)}</a></span> : <span className="light-linkText"><a {...props}>{domToReact(domNode.children, parseOptions)}</a></span>;
      }
    }
  };

  // use to sanitize and parse a html string
  const cleanHTML = (htmlString) => {
    return parse(DOMPurify.sanitize(htmlString, sanitizeOptions), parseOptions);
  };

  return cleanHTML(props.string);
}