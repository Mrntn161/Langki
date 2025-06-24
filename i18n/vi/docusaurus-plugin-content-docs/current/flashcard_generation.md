---
sidebar_position: 7
---

# Tạo Thẻ flashcard tự Động

## Ý tưởng

Một trong những điểm mạnh lớn nhất của Anki là khả năng cho phép người dùng thiết kế flashcard bằng HTML, CSS và JavaScript. Điều này có nghĩa là chúng ta có thể sao chép hầu hết mọi dạng bài tập trong các ứng dụng học ngôn ngữ khác. Tuy nhiên, một điểm nghẽn của Anki là dữ liệu. Việc tạo nội dung trong Anki khá tốn công, vì người dùng phải nhập thông tin thủ công vào từng trường, sau đó thông tin này sẽ được hiển thị qua HTML.

Vậy điều gì sẽ xảy ra nếu ta có thể bỏ qua bước trung gian đó và để AI tạo HTML trực tiếp?

Ví dụ, thay vì thiết kế mẫu thẻ như sau:

```html
<div>{{Định nghĩa}}</div>
```

Chúng ta có thể hướng dẫn AI tạo thẻ ghi nhớ bằng cách sử dụng định dạng như sau:

```html
<div description="định nghĩa của từ vựng">...</div>
```

## Tạo một mẫu thẻ để học từ vựng

Tôi sẽ dùng Langki để tạo một mẫu thẻ dành cho học từ vựng bằng câu hỏi trắc nghiệm. Mặc dù câu hỏi trắc nghiệm không được khuyến khích trong Anki, nhưng nó là một ví dụ tuyệt vời để minh họa sự linh hoạt của cách tiếp cận này. Lý do là vì việc tạo câu hỏi trắc nghiệm khá tốn thời gian — bạn phải nghĩ ra cả phương án gây nhiễu.

Trước tiên, tôi sẽ nhân bản kiểu thẻ `Langki - prototype` và đặt tên là `Langki - Vocabulary (multiple choice)`.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750145160/Langki/gmatfawrd38tg2yn01ch.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750145185/Langki/dmlk3nbbazjfp3zdqer9.png"
    width="400"
    height="500"
  />
</div>

Đây là đoạn prompt tôi sử dụng để hướng dẫn AI tạo ra thẻ flashcard:

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147171/Langki/vsg4c8izce8h0wes9paf.png)

Tôi để trống phần "Front" và "Back" để kích hoạt chức năng tạo thẻ tự động.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750319997/Langki/h4hjhhbgmn5hsjyy2edo.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750319973/Langki/plha8siftl00kmxov8hm.png"
    width="400"
    height="500"
  />
</div>

Và đây là thẻ mà AI tạo ra:

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147259/Langki/j7fvja4n2ctmjuezrdkx.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147273/Langki/hwqrh8szcx0ud7kkeyfc.png"
    width="400"
    height="500"
  />
</div>

Sau khi tạo, phần "Front" và "Back" đã được điền tự động như sau:

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147569/Langki/nii3w8iyzgslivep5yjr.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147501/Langki/mi83eius2l0gpq1q8tzo.png"
    width="400"
    height="500"
  />
</div>

Mặt sau (Back):

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147634/Langki/ghglrhsgrh2hedm3macf.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147653/Langki/nff8uxsqsvhlgmp9gdwy.png"
    width="400"
    height="500"
  />
</div>

Điều tuyệt vời ở cách tiếp cận này là bạn chỉ cần nhập từ vựng, còn lại AI sẽ tự động tạo toàn bộ nội dung cần thiết dựa trên mẫu HTML đã thiết lập trong phần Prompt. Vì nội dung được tạo ra chỉ là HTML, bạn có thể dùng CSS và JavaScript để tùy biến giao diện thoải mái.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750148230/Langki/w9mb2jwmfgcfo27pos4b.png)

Bây giờ hãy dùng JavaScript để cải thiện. Việc có 10 lựa chọn là quá nhiều — sẽ tốt hơn nếu ta chọn ngẫu nhiên 3 phương án sai và trộn với đáp án đúng. Bằng cách dùng JavaScript, mỗi lần ôn tập thẻ flashcard sẽ khác nhau. Tôi dùng ChatGPT để viết đoạn mã này.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750148850/Langki/il0e7svz2o4hm4ygjobq.png)

Tuy nhiên, để JavaScript hoạt động trên thẻ đã tạo, bạn cần đặt mã vào bên trong hàm tên `jsCode`.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750148939/Langki/l1tuqcghbasxjyt3gjt5.png)

Và đây là kết quả cuối cùng.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750149160/Langki/k7gqu00novix8b00pnbj.png)

Bạn có thể tải kiểu thẻ này tại đây:
