---
sidebar_position: 8
---

# Chuyển bộ thẻ hiện có sang Langki

Trong hướng dẫn này, tôi sẽ chuyển bộ thẻ [4000 Essential English Words](https://ankiweb.net/shared/info/1104981491) sang Langki. Đây là một nguồn tài liệu tuyệt vời dành cho người học tiếng Anh, bao gồm các định nghĩa rõ ràng, câu ví dụ, âm thanh và hình ảnh. Mặc dù bộ thẻ đã được thiết kế khá tốt, Langki giúp thẻ bộ thẻ có tính tương tác hơn và thêm thông tin khi cần thiết. Ví dụ, với các phản hồi được chuẩn bị sẵn, người học có thể dễ dàng yêu cầu AI hỗ trợ thêm như dịch sang tiếng mẹ đẻ, dịch câu ví dụ, cụm từ thường đi kèm, từ đồng nghĩa, trái nghĩa, thêm câu ví dụ, v.v.

## Chỉnh sửa mẫu thẻ (template)

Trước tiên, chúng ta cần sao lưu **Front Template**, **Back Template** và **Styling** của bộ thẻ gốc.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750412819/Langki/sup0nxxsk46sxwref2kk.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750412831/Langki/ep9qsssnm8dlag2uzz06.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413237/Langki/xpehty4wzjjhqe0qs1to.png)

Vì Langki chỉ là một mẫu thẻ, việc sao chép **Front Tempalte** và **Back Template** vào một mẫu thẻ khác sẽ tự động nhúng chatbot vào mẫu thẻ đó.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413364/Langki/vrj8sdv0eswoqq3fgbib.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413459/Langki/soyeegx047qs378da5rt.png)

Tiếp theo, ta cần cập nhật các trường trong cả Mặt Trước và Mặt Sau để phù hợp với cấu trúc dữ liệu của bộ thẻ 4000 Essential English Words.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413850/Langki/wtfmyehvqqiasmyokmrn.png)

Tương tự, sao chép và dán **Front Template** từ Langki – Prototype vào.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750421262/Langki/utqdmk4k9alsqbiprdxh.png)

Vì bộ thẻ 4000 Essential English Words sử dụng nền tối, chúng ta nên bật **chế độ nền tối** cho phù hợp.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750435228/Langki/k29j4sxg7eimxbkyabtn.png)

Bây giờ, ta hãy so sánh với phiên bản gốc.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750437551/Langki/yrcx8h4q3eg9sgwiscll.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750439271/Langki/ljnjacdfzjm72c7fycjm.png"
    width="400"
    height="500"
  />
</div>

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750437587/Langki/junmtpuhpbyq1ifyuilq.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750439249/Langki/w3aevz39ycjv2n2dv5tc.png"
    width="400"
    height="500"
  />
</div>

## Khắc phục sự cố tự phát âm thanh

Trong Langki, cả mặt trước và mặt sau của thẻ flashcard đều được thiết lập trong **Front Template**. Tuy nhiên, điều này có thể gây ra vấn đề nếu tính năng tự phát âm thanh được bật và file audio đáng lí ở mặt sau lại được bật ở mặt trước. Vì vậy, chúng ta cần loại bỏ tất cả âm thanh dành cho mặt sau ra khỏi Front Template.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750435523/Langki/rjlexbszns4iqtd7ocrm.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750415191/Langki/fdqidxzchcychryba1zw.png)

Tuy nhiên, nếu làm vậy thì mặt sau của thẻ sẽ không còn âm thanh nữa.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750418273/Langki/o9xhhafvwymmwqcyrmpg.png)

Vì thế, chúng ta cần một mẹo nhỏ để thêm âm thanh vào phần mặt sau khi lật thẻ.
Chúng ta có thể làm điều này bằng cách tạo một phần tử HTML chứa âm thanh trong **Back Template**, sau đó sử dụng JavaScript để tự động chèn HTML này nếu nó tồn tại.

```
<div class="back-side">{{FrontSide}}</div>

<div id="audio">
{{Sound_Meaning}}
[sound:_1sec.mp3]
{{Sound_Example}}
</div>
```

```js
if (document.getElementById("audio")) {
  document.getElementById("back").appendChild(document.getElementById("audio"));
}
```

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750418392/Langki/v9l6hi64bcoyluujszk8.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750438604/Langki/mk621ef3iq3jd65h7bzw.png"
    width="400"
    height="500"
  />
</div>
