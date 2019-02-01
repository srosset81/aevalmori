import React from 'react';
import { getBlogPosts, RichText, linkResolver } from 'utils/prismic';
import { Layout } from 'components/app';
import { TopSection, FooterSection, MenuSection } from 'components/section';
import { Trans } from "@lingui/macro";

const BlogPage = ({posts}) => (
  <Layout>
    <TopSection image="elisa.jpg">
      <Trans id="blog.title">Mon blog</Trans>
    </TopSection>
    {posts.map((post, index) => (
        <MenuSection key={index} right={index % 2 === 0} title={post.data.title[0].text} image={post.data.image ? post.data.image.url : null} link="about">
          {RichText.render(post.data.content, linkResolver)}
        </MenuSection>
    ))}
    <FooterSection />
  </Layout>
);

BlogPage.getInitialProps = async () => {
  const response = await getBlogPosts({ pageSize: 5 });
  return {
    posts: response.results
  };
};

export default BlogPage;
