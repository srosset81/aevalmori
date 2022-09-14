import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import P from "./P";

const Markdown = (props) => (
  <MarkdownToJSX
    options={{
      overrides: {
        p: P,
        li: props => (<li><P {...props}></P></li>)
      },
    }}
    {...props}
  />
);

export default Markdown;
