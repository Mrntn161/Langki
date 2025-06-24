---
sidebar_position: 3
---

# Mẫu thẻ Langki nguyên bản (prototype)

Trong thực tế, Langki chỉ đơn giản là một mẫu thẻ (template), vì vậy bạn sẽ không mất nhiều thời gian để làm quen, miễn là bạn sẵn sàng thay đổi một chút cách bạn cấu trúc mẫu thẻ của bản thân.

Mỗi mẫu Langki có ba phần: `Prompt`, `Front`, và `Back`.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750064044/Langki/jw5wrjrrbzygvj7mrn2u.png)

## Phần Prompt

Đây là nơi bạn thiết lập prompt để hướng dẫn AI phản hồi và đánh giá câu trả lời của bạn. Trong một số trường hợp, đây cũng là nơi bạn yêu cầu AI tạo thẻ flashcard.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750064327/Langki/p2genkl2m2pmh9lsukou.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750060109/Langki/no8eij2napwvelddqsqz.png"
    width="400"
    height="500"
  />
</div>

## Phần Front

Đây là nơi bạn thiết kế mặt trước của thẻ flashcard Langki.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066426/Langki/qyb1sfv9v2c3ipjt60ax.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066447/Langki/pcsm7qanjxbmyt3dze9p.png"
    width="400"
    height="500"
  />
</div>
<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
      src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067073/Langki/qrfk1uroqrtrxwxndm7k.png"
      alt="Ảnh 3"
      width="100%"
      height="100%"
    />
</div>

## Phần Back

Tương tự, đây là nơi bạn thiết kế mặt sau của thẻ flashcard Langki.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066737/Langki/ihygbcx7a7fzhmrpiyvh.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066447/Langki/pcsm7qanjxbmyt3dze9p.png"
    width="400"
    height="500"
  />
</div>
<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
<img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066947/Langki/zmyvumwn0ywdf7yxskwz.png"
    width="100%"
    height="100%"
  />
</div>

## Tạo thẻ flashcard

Lưu ý rằng phần nội dung ở mặt sau thẻ flashcard sử dụng cú pháp [Conditional Replacement](https://docs.ankiweb.net/templates/generation.html#conditional-replacement):

```
Nội dung này luôn được hiển thị.

{{#FieldName}}
Nội dung này chỉ hiển thị nếu trường FieldName có nội dung
{{/FieldName}}

{{^FieldName}}
Nội dung này chỉ hiển thị nếu trường FieldName rỗng
{{/FieldName}}

```

Chúng ta sử dụng cú pháp này để đảm bảo rằng mặt sau của thẻ Langki (phần màu đỏ) không bị bỏ trống, ngay cả khi trường Back không có nội dung. Điều này ngăn Langki tự động tạo nội dung vì nó sẽ luôn cố gắng hoàn thiện thẻ flashcard khi phần mặt trước (phần xanh lá cây) hoặc mặt sau (phần màu đỏ) bị bỏ trống.

Ví dụ nếu mặt sau được thiết kế như như sau:

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067368/Langki/lnsjq1nwdezznmav5cqp.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066447/Langki/pcsm7qanjxbmyt3dze9p.png"
    width="400"
    height="500"
  />
</div>

Thì AI sẽ tự động tạo nội dung để điền vào phần Back. Khi thẻ flashcard được tạo, nội dung được sinh ra sẽ được lưu vào cả hai trường Front và Back. Vì cả hai trường đều đã được điền, AI sẽ không cần phải tạo lại nội dung trong những lần ôn tập sau.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067756/Langki/xclewi1crfldaujdtzg1.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067822/Langki/lyuppcdgnx8fshcexpt1.png"
    width="400"
    height="500"
  />
</div>

---

:::note Trường Back có thể để trống
Trong hơn 90% trường hợp khi sử dụng cú pháp Conditional Replacement, bạn không cần điền trường Back. Ngoại lệ là khi AI "bịa" thông tin trong một số thẻ flashcard. Trong những trường hợp như vậy, nội dung bạn nhập vào trường Back sẽ được AI sử dụng để đánh giá và phản hồi chính xác hơn. Điều này giúp giảm đáng kể khả năng AI tạo ra nội dung không đúng.
:::
