import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'; // optional nếu bạn có CSS

export default function BlogList({blogPosts}) {

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem'}}>
      {blogPosts.map(({metadata}) => (
        <div key={metadata.permalink} className={styles.card}>
          <h3>
            <Link to={metadata.permalink}>{metadata.title}</Link>
          </h3>
          <p>{metadata.description}</p>
          <small>{metadata.formattedDate}</small>
        </div>
      ))}
    </div>
  );
}
