// src/theme/BlogListPage/index.js
import React, { useState, useMemo, useEffect } from 'react';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
// import Link from '@docusaurus/Link'; // No longer needed here
// import useBaseUrl from '@docusaurus/useBaseUrl'; // No longer needed here!

// Import the new BlogPostCard component
import BlogPostCard from './BlogPostCard'; // Adjust path if your BlogPostCard.js is elsewhere

// Helper function để lấy tất cả các tag duy nhất từ frontMatter
function getAllUniqueTags(items) {
  const allTags = new Set();
  // Defensive check: ensure items is an array before iterating
  if (!Array.isArray(items)) {
    return [];
  }
  items.forEach(item => {
    const tags = item.content?.frontMatter?.tags;
    if (Array.isArray(tags)) {
      tags.forEach(tag => allTags.add(tag));
    }
  });
  return Array.from(allTags).sort();
}

function BlogListPageContent({ originalMetadata, originalItems }) {
  // Defensive programming for originalItems (good practice, but not the direct cause of this error)
  const safeOriginalItems = Array.isArray(originalItems) ? originalItems : [];

  const [selectedTag, setSelectedTag] = useState(null);

  // Lấy danh sách tất cả các tag duy nhất để tạo nút filter
  const uniqueTags = useMemo(() => getAllUniqueTags(safeOriginalItems), [safeOriginalItems]);

  // Lọc danh sách bài viết dựa trên tag đã chọn
  const filteredItems = useMemo(() => {
    if (!selectedTag) {
      return safeOriginalItems;
    }
    return safeOriginalItems.filter(item => {
      const tags = item.content?.frontMatter?.tags;
      return Array.isArray(tags) && tags.includes(selectedTag);
    });
  }, [safeOriginalItems, selectedTag]);

  // Style cho các nút filter (có thể chuyển ra file CSS)
  const filterButtonStyle = {
    margin: '0.25rem 0.5rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'var(--ifm-card-background-color, var(--ifm-background-surface-color))',
    color: 'var(--ifm-color-primary)',
  };
  const activeFilterButtonStyle = {
    ...filterButtonStyle,
    borderColor: 'var(--ifm-color-primary)',
    color: 'var(--ifm-color-primary)',
    fontWeight: 'bold',
  };

  return (
    <>
      {/* Phần Filter Tags */}
      {uniqueTags.length > 0 && (
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '0 1rem' }}>
          <button
            onClick={() => setSelectedTag(null)}
            style={selectedTag === null ? activeFilterButtonStyle : filterButtonStyle}
          >
            All Posts
          </button>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={selectedTag === tag ? activeFilterButtonStyle : filterButtonStyle}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Grid hiển thị bài viết */}
      {filteredItems.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            padding: '0 1rem',
          }}
        >
          {filteredItems.map(({ content: BlogPostContent }) => (
            // Use the new BlogPostCard component here
            <BlogPostCard key={BlogPostContent.metadata.permalink} post={BlogPostContent} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', padding: '1rem' }}>
          No posts found{selectedTag ? ` with tag "${selectedTag}"` : ''}.
        </p>
      )}
      <BlogListPaginator metadata={originalMetadata} />
    </>
  );
}

export default function BlogListPage(props) {
  const { metadata: originalMetadata, items: originalItems, ...rest } = props;
  return (
    <BlogLayout {...rest}>
      <BlogListPageContent originalMetadata={originalMetadata} originalItems={originalItems} />
    </BlogLayout>
  );
}