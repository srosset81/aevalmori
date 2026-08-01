import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import P from "./P";

// The whole markdown output is already wrapped in a <P> below (for font-family/size),
// so nested <p>/<li> tags must not re-apply P's default fontSize or it compounds (1.1em * 1.1em).
const InlineP = props => <P {...props} fontSize="1em" />;

const Markdown = (props) => (
  <MarkdownToJSX
    options={{
      overrides: {
        p: InlineP,
        li: props => (<li><InlineP {...props} /></li>)
      },
      forceWrapper: true,
      wrapper: P
    }}
    {...props}
  />
);

export default Markdown;
