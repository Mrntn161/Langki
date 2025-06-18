// src/theme/BlogListPage/index.js
import React, { useState, useMemo, useEffect } from 'react'; // Thêm useState, useMemo, useEffect
import BlogLayout from '@theme/BlogLayout';
// import BlogPostItems from '@theme/BlogPostItems'; // Không dùng đến, có thể xóa
import BlogListPaginator from '@theme/BlogListPaginator';
import Link from '@docusaurus/Link'; // Sử dụng Link của Docusaurus
import useBaseUrl from '@docusaurus/useBaseUrl'; // Nếu bạn muốn dùng ảnh bìa

// Helper function để lấy tất cả các tag duy nhất từ frontMatter
function getAllUniqueTags(items) {
  const allTags = new Set();
  items.forEach(item => {
    const tags = item.content?.frontMatter?.tags; // Lấy từ frontMatter
    if (Array.isArray(tags)) {
      tags.forEach(tag => allTags.add(tag));
    }
  });
  return Array.from(allTags).sort();
}

function BlogListPageContent({ originalMetadata, originalItems }) { // Đổi tên props để rõ ràng
  const [selectedTag, setSelectedTag] = useState(null); // null nghĩa là không có tag nào được chọn (hiển thị tất cả)

  // Lấy danh sách tất cả các tag duy nhất để tạo nút filter
  const uniqueTags = useMemo(() => getAllUniqueTags(originalItems), [originalItems]);

  // Lọc danh sách bài viết dựa trên tag đã chọn
  const filteredItems = useMemo(() => {
    if (!selectedTag) {
      return originalItems; // Nếu không có tag nào được chọn, hiển thị tất cả
    }
    return originalItems.filter(item => {
      const tags = item.content?.frontMatter?.tags;
      return Array.isArray(tags) && tags.includes(selectedTag);
    });
  }, [originalItems, selectedTag]);

  // Tạo metadata mới cho Paginator dựa trên số lượng item đã lọc
  // Docusaurus Paginator cần biết tổng số item và số item mỗi trang để tính toán
  // Nếu chúng ta chỉ thay đổi `items` mà không cập nhật `metadata` phù hợp,
  // Paginator có thể hiển thị sai số trang.
  // Tuy nhiên, BlogListPaginator của Docusaurus thông minh hơn và nó
  // thường nhận toàn bộ metadata của blog list page và tự điều chỉnh dựa trên `items.length`
  // của trang hiện tại. Vì vậy, chúng ta có thể chỉ cần truyền `originalMetadata`.
  // Nếu pagination không đúng, chúng ta cần tùy chỉnh metadata này.
  // Hiện tại, giả sử Paginator sẽ hoạt động đúng với `originalMetadata` và `filteredItems`
  // được truyền xuống cho phần render (thông qua việc `BlogListPage` chỉ render các item của trang hiện tại).

  // Nếu `BlogListPaginator` không tự điều chỉnh, bạn sẽ cần tạo metadata mới:
  // const paginatorMetadata = useMemo(() => ({
  //   ...originalMetadata,
  //   totalCount: filteredItems.length,
  //   totalPages: Math.ceil(filteredItems.length / originalMetadata.itemsPerPage),
  //   // currentPage: 1, // Bạn có thể cần reset currentPage khi filter
  // }), [originalMetadata, filteredItems]);
  // Và sau đó truyền `paginatorMetadata` cho `<BlogListPaginator metadata={paginatorMetadata} />`
  // Tuy nhiên, hãy thử cách đơn giản trước.


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
            padding: '0 1rem', // Bỏ padding top, giữ padding trái phải
          }}
        >
          {filteredItems.map(({ content: BlogPostContent }) => (
            <article key={BlogPostContent.metadata.permalink} style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              padding: '1.25rem',
              borderRadius: 'var(--ifm-card-border-radius, 8px)',
              backgroundColor: 'var(--ifm-card-background-color, var(--ifm-background-surface-color))',
              boxShadow: 'var(--ifm-global-shadow-lw)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {BlogPostContent.frontMatter.image && (
                <Link to={BlogPostContent.metadata.permalink} style={{ display: 'block', marginBottom: '1rem' }}>
                  <img
                    src={useBaseUrl(BlogPostContent.frontMatter.image)}
                    alt={BlogPostContent.metadata.title}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
                  />
                </Link>
              )}
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}> {/* Giảm kích thước font */}
                <Link to={BlogPostContent.metadata.permalink}>
                  {BlogPostContent.metadata.title}
                </Link>
              </h2>
              <p style={{ flexGrow: 1, fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '0.75rem' }}>
                {BlogPostContent.metadata.description}
              </p>
              <small style={{ fontSize: '0.8rem', color: 'var(--ifm-font-color-secondary-darkest)' }}>
                {BlogPostContent.metadata.formattedDate}
              </small>
            </article>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', padding: '1rem' }}>
          No posts found{selectedTag ? ` with tag "${selectedTag}"` : ''}.
        </p>
      )}
      {/* Paginator: Truyền metadata gốc, Docusaurus thường tự xử lý dựa trên items được render */}
      {/* Quan trọng: `BlogListPaginator` thường mong đợi `metadata` của trang LIST tổng thể,
          không phải metadata của các item đã lọc. Nó sẽ hoạt động nếu `BlogListPage`
          chỉ nhận được các items cho trang hiện tại từ Docusaurus.
          Nếu bạn đặt `postsPerPage: 'ALL'` trong config, thì Paginator này sẽ không hoạt động đúng
          mà không có tùy chỉnh sâu hơn.
          Giả sử bạn đang dùng `postsPerPage` với một số cụ thể trong config.
      */}
      <BlogListPaginator metadata={originalMetadata} />
    </>
  );
}

export default function BlogListPage(props) {
  // Đổi tên props để rõ ràng hơn khi truyền xuống
  const { metadata: originalMetadata, items: originalItems, ...rest } = props;
  return (
    <BlogLayout {...rest}> {/* Truyền các props còn lại cho BlogLayout nếu có */}
      <BlogListPageContent originalMetadata={originalMetadata} originalItems={originalItems} />
    </BlogLayout>
  );
}