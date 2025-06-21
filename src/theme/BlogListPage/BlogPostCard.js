// src/theme/BlogListPage/BlogPostCard.js
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Hook called at the top level of THIS component

function BlogPostCard({ post }) {
  const { metadata, frontMatter } = post;

  // Call useBaseUrl hook here, at the top level of BlogPostCard
  const imageUrl = frontMatter.image ? useBaseUrl(frontMatter.image) : null;

  return (
    <article style={{
      border: '1px solid var(--ifm-color-emphasis-300)',
      padding: '1.25rem',
      borderRadius: 'var(--ifm-card-border-radius, 8px)',
      backgroundColor: 'var(--ifm-card-background-color, var(--ifm-background-surface-color))',
      boxShadow: 'var(--ifm-global-shadow-lw)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {imageUrl && (
        <Link to={metadata.permalink} style={{ display: 'block', marginBottom: '1rem' }}>
          <img
            src={imageUrl}
            alt={metadata.title}
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
          />
        </Link>
      )}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        <Link to={metadata.permalink}>
          {metadata.title}
        </Link>
      </h2>
      <p style={{ flexGrow: 1, fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '0.75rem' }}>
        {metadata.description}
      </p>
      <small style={{ fontSize: '0.8rem', color: 'var(--ifm-font-color-secondary-darkest)' }}>
        {metadata.formattedDate}
      </small>
    </article>
  );
}

export default BlogPostCard;