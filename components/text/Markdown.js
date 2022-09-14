import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import P from "./P";
import { Ul, Li } from "../layout";

const Markdown = (props) => (
  <MarkdownToJSX
    options={{
      overrides: {
        p: P,
        ul: Ul,
        li: Li
      },
    }}
    {...props}
  />
);

export default Markdown;
