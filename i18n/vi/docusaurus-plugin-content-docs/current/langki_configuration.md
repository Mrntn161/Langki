---
sidebar_position: 5
---

# Cấu hình mẫu thẻ Langki

Mẫu thẻ Langki có thể được sử dụng cho nhiều ngôn ngữ khác nhau, nhưng người dùng cần thiết lập ngôn ngữ trước khi sử dụng.

## Chuyển văn bản thành giọng nói (Text to speech)

Để thiết lập ngôn ngữ cho TTS, trước tiên hãy truy cập [liên kết này](https://mrntn161.github.io/Langki/text-to-speech.html) để chọn giọng đọc phù hợp, sau đó sao chép mã giọng đọc vào trong template như hình bên dưới.

<img src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094459/Langki/aokm0dtieosxgmxeogmg.png" />
<img src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094505/Langki/axs5brlndrqxkuwxgjpg.png" />

Đặt `autoplay` thành true nếu bạn muốn AI tự động đọc phản hồi.  
Thiết lập `rate` cho phép bạn điều chỉnh tốc độ đọc.

## Phân tích giọng nói (Speech analysis)

Để thiết lập ngôn ngữ cho phân tích giọng nói, bạn cần đặt mã ngôn ngữ (locale code) như sau:

<img
  src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094545/Langki/nntm7qwvsza1jox8kyyv.png"
  width="600"
  height="100%"
/>

Danh sách các ngôn ngữ được hỗ trợ và mã tương ứng:

| Ngôn ngữ & Khu vực                 | locale code |
| ---------------------------------- | ----------- |
| Tiếng Ả Rập (Ai Cập)               | ar-EG       |
| Tiếng Ả Rập (Ả Rập Saudi)          | ar-SA       |
| Tiếng Catalan                      | ca-ES       |
| Tiếng Trung (Quảng Đông, Phồn thể) | zh-HK       |
| Tiếng Trung (Phổ thông, Giản thể)  | zh-CN       |
| Tiếng Trung (Đài Loan, Phồn thể)   | zh-TW       |
| Tiếng Đan Mạch (Đan Mạch)          | da-DK       |
| Tiếng Hà Lan (Hà Lan)              | nl-NL       |
| Tiếng Anh (Úc)                     | en-AU       |
| Tiếng Anh (Canada)                 | en-CA       |
| Tiếng Anh (Ấn Độ)                  | en-IN       |
| Tiếng Anh (Anh)                    | en-GB       |
| Tiếng Anh (Mỹ)                     | en-US       |
| Tiếng Phần Lan (Phần Lan)          | fi-FI       |
| Tiếng Pháp (Canada)                | fr-CA       |
| Tiếng Pháp (Pháp)                  | fr-FR       |
| Tiếng Đức (Đức)                    | de-DE       |
| Tiếng Hindi (Ấn Độ)                | hi-IN       |
| Tiếng Ý (Ý)                        | it-IT       |
| Tiếng Nhật (Nhật Bản)              | ja-JP       |
| Tiếng Hàn (Hàn Quốc)               | ko-KR       |
| Tiếng Mã Lai (Malaysia)            | ms-MY       |
| Tiếng Na Uy Bokmål (Na Uy)         | nb-NO       |
| Tiếng Ba Lan (Ba Lan)              | pl-PL       |
| Tiếng Bồ Đào Nha (Brazil)          | pt-BR       |
| Tiếng Bồ Đào Nha (Bồ Đào Nha)      | pt-PT       |
| Tiếng Nga (Nga)                    | ru-RU       |
| Tiếng Tây Ban Nha (Mexico)         | es-MX       |
| Tiếng Tây Ban Nha (Tây Ban Nha)    | es-ES       |
| Tiếng Thụy Điển (Thụy Điển)        | sv-SE       |
| Tiếng Tamil (Ấn Độ)                | ta-IN       |
| Tiếng Thái (Thái Lan)              | th-TH       |
| Tiếng Việt (Việt Nam)              | vi-VN       |

Phím tắt (Shortcut) là phím bạn có thể nhấn nhanh để bắt đầu ghi âm mà không cần dùng chuột.

## Gợi ý phản hồi

Người dùng có thể thiết lập các câu trả lời mẫu theo cấu trúc sau:

```
config.suggestions = [
"câu trả lời 1",
"câu trả lời 2",
"câu trả lời 3",
"câu trả lời 4",
]
```

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094641/Langki/xvuabseaonfmy0niezoa.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094660/Langki/pzfssjy6qdxgkzzxmw0n.png)

## Dịch và phản hồi bằng một ngôn ngữ cụ thể

Bạn cũng có thể cấu hình ngôn ngữ cho chức năng dịch như sau:

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094719/Langki/lhfb3zrzywsh5d6f01ge.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094767/Langki/wpx72bsu5hafcbh9tadb.png"
    width="400"
    height="500"
  />
</div>

Ngoài ra, để thuận tiện hơn, bạn có thể yêu cầu AI phản hồi hoàn toàn bằng ngôn ngữ bạn chọn ngay trong phần Prompt.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094797/Langki/vuilgo47qwltgtvmrsiv.png)

## Chế độ sáng và tối

Nếu bạn đang sử dụng Anki ở chế độ tối (dark mode), bạn cũng có thể chuyển chatbot sang chế độ tối.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094895/Langki/uhpwdbh7mgqzhy2xmk2j.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094931/Langki/ygyzkzkavrkh3o6kesvh.png"
    width="400"
    height="500"
  />
</div>

## Key API dành cho subscriber

Các tính năng của Langki được xử lí trên máy chủ và tốn chi phí. Mặc dù chi phí mỗi lần sử dụng không đáng kể, nhưng chi phí sẽ tăng lên nhanh chóng khi số lượng người dùng tăng lên. Vì vậy, một hạn mức sử dụng hàng ngày sẽ được áp dụng.

Người đăng ký (subscriber) sẽ nhận được một key API để mở khóa hạn mức này. Khóa sẽ được nhúng trực tiếp vào mẫu thẻ Langki. Do đó người dùng phải gỡ bỏ key API trước khi chia sẻ bộ thẻ.

Add-on sẽ giúp bạn dễ dàng thêm hoặc gỡ key API khỏi tất cả mẫu Langki trong profile.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750188782/Langki/b7bv3fyax7xdvzj8kku3.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750188815/Langki/sgscjnqzb2nuqzibxrgd.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750188943/Langki/y8c9gmnlkvpthxhzwl5h.png)

:::warning
Bạn có thể sử dụng key API trên nhiều thiết bị; tuy nhiên, không được chia sẻ với người khác. Key sẽ bị thu hồi nếu phát hiện sử dụng sai mục đích hoặc bởi nhiều người.
:::
