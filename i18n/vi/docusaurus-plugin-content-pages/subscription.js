import React from 'react';
import Layout from '@theme/Layout';

export default function Pricing() {
  return (
    <Layout title="Bảng Giá">
      <main style={{ padding: '2rem', maxWidth: 800, margin: 'auto' }}>
        <h1>Langki Subscription</h1>
        <p>
          Langki là một công cụ miễn phí, bạn có thể sử dụng ngay mà không cần đăng ký tài khoản. Tất cả các tính năng đều có thể sử dụng mà không cần trả phí.
          Tuy nhiên, để duy trì hệ thống hoạt động ổn định và xử lý từng lượt truy cập, chúng tôi phải đầu tư thời gian và chi phí đáng kể. Chỉ vài ngàn đồng mỗi người dùng mỗi ngày,
          nhưng khi cộng lại theo tháng thì con số có thể tăng lên đáng kể.
        </p>
        <p>
          Vì vậy, Langki áp dụng hạn mức sử dụng hằng ngày nhằm đảm bảo mọi người đều được sử dụng công bằng. Dự án đang vận hành nhờ vào sự đóng góp của những người dùng đăng ký.
          Nếu bạn sử dụng Langki thường xuyên, hoặc tin rằng đây là một dự án hữu ích và có tiềm năng, hãy cân nhắc tham gia gói hỗ trợ.
          Chỉ với chi phí tương đương vài ly trà sữa (<strong>80.000đ</strong>) mỗi tháng, bạn đã góp phần giúp dự án tiếp tục phát triển.
          Đổi lại, bạn sẽ được sử dụng toàn bộ tính năng mà không chịu hạn mức mỗi ngày và được ưu tiên hỗ trợ kỹ thuật khi cần.
        </p>
        <p>
          Để đăng ký gói hỗ trợ, bạn vui lòng chuyển khoản theo số tài khoản sau (Lưu ý: chúng tôi chỉ nhận đăng ký với thời hạn tối thiểu 3 tháng), sau đó liên hệ qua{' '}
          <a href="https://www.facebook.com/nguyen.thien.nghia.364641" target="_blank" rel="noopener noreferrer">Facebook</a> để nhận key API.
        </p>
        <img
          src="https://camo.githubusercontent.com/a4333ad7915303d2957bb07e0e3ff8bcfb0dd582d88f36d8de5e338cccff8a8c/68747470733a2f2f692e696d6775722e636f6d2f3166596f4b79532e706e67"
          alt="Thông tin chuyển khoản"
          style={{ width: '500px', marginTop: '1rem', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
        />
      </main>
    </Layout>
  );
}
