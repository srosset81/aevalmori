import React from 'react';
import { Div } from "../layout";
import ContentSection from "./ContentSection";

const ArticleSection = ({ children }) => (
  <Div align="middleCenter">
    <ContentSection maxW="900px">
      {children}
    </ContentSection>
  </Div>
);

export default ArticleSection;
