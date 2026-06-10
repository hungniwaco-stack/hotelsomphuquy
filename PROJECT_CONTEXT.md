# KẾT QUẢ VÀ BÀI HỌC TỪ DỰ ÁN SỚM PHÚ QUÍ HOTEL

Tài liệu này lưu trữ ngữ cảnh, phong cách thiết kế và các bài học đã rút ra để AI có thể kế thừa và làm việc nhanh chóng trong các phiên làm việc tiếp theo.

## 1. Thông tin chung
- **Tên dự án:** Sớm Phú Quí Hotel (Lưu ý chính tả là "Quí", không phải "Quý").
- **Kiến trúc:** Website tĩnh (Vanilla HTML, CSS, JavaScript). Không sử dụng Framework phức tạp.
- **Thư mục lưu trữ ảnh gốc:** `Thông tin/Anh` và `Thông tin/Cap-nhat`.
- **Thư mục ảnh hiển thị (Web):** `images/`.
- **Kho lưu trữ GitHub:** `https://github.com/hungniwaco-stack/hotelsomphuquy`

## 2. Tiêu chuẩn UI/UX & Thiết kế
- **Phong cách:** Premium, hiện đại, sang trọng (Glassmorphism, Bento Grid).
- **Giao diện sáng/tối (Dark Mode):** Đã tích hợp Dark Mode quản lý qua `localStorage` trong `script.js` và biến màu (CSS Variables) trong `style.css`.
- **Bố cục Thẻ phòng (Room Cards):** 
  - Khách hàng ƯA THÍCH thiết kế thẻ phòng theo **chiều dọc** (Vertical Layout): Ảnh nằm vuông vắn ở phía trên (chiều cao khoảng 250px), nội dung giới thiệu, tiện ích và giá phòng nằm phía dưới.
  - *Lưu ý:* Không sử dụng layout ngang (Horizontal) cho thẻ phòng ngủ vì ảnh sẽ bị bóp hẹp, khó nhìn.
- **Tiêu chuẩn CTA (Call to Action):** Luôn đi kèm thông điệp khuyến mãi để tăng chuyển đổi (VD: `Đặt Ngay (-30%)` và hiển thị giá cũ gạch ngang mờ).

## 3. Quy tắc làm việc với Hình ảnh & Đường dẫn
- **Nguyên tắc đặt tên:** TUYỆT ĐỐI KHÔNG để khoảng trắng hoặc ký tự tiếng Việt có dấu trong tên file ảnh (VD: Thay vì `Banner (2).png`, hãy đổi thành `banner.png`). Điều này giúp tránh lỗi hiển thị trên trình duyệt và lỗi URL Encoding khi đẩy lên GitHub.
- **Cập nhật hình ảnh:** Khi cập nhật các ảnh phòng ngủ/cảnh quan, luôn sao chép ảnh từ thư mục `Thông tin/Anh` vào thư mục `images/` và tham chiếu đường dẫn tương đối (VD: `images/01.jpg`).

## 4. Cấu trúc nội dung (Copywriting)
- **Thông điệp cốt lõi:** "Không chỉ là nơi lưu trú — mà là cảm giác thoải mái như ở nhà."
- **Tiện ích chính (Bento Grid):** Xe đưa đón sân bay, Wifi miễn phí, Hỗ trợ tận tâm.
- **Thư viện ảnh tham quan:** Sử dụng lại thiết kế Thẻ phòng dọc (Room Card) để hiển thị các danh thắng lân cận như Biển Bình Sơn, Tháp Po Klong Garai, Đồi cát Nam Cương... nhằm tái sử dụng CSS và tạo sự đồng bộ.

## 5. Các bước Deploy (Nếu cần)
- Do website là file HTML/CSS/JS thuần, có thể deploy ngay lập tức bằng GitHub Pages, Netlify hoặc Vercel mà không cần build step (`npm run build`).

---
> **Prompt Instruction for AI:** Trong các cuộc hội thoại tương lai, khi làm việc với dự án này, hãy luôn đọc file `PROJECT_CONTEXT.md` này đầu tiên để hiểu rõ toàn bộ ngữ cảnh mà không cần hỏi lại người dùng.
