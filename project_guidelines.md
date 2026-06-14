# Cẩm nang Thiết kế & Kỹ thuật - Master Template Khách Sạn

Tài liệu này lưu trữ các quyết định, phong cách thiết kế và bài học kỹ thuật quan trọng. Khi bạn copy thư mục này sang một dự án mới, hãy dùng tài liệu này để tham chiếu nhằm duy trì tính đồng bộ, thẩm mỹ và hiệu năng.

## 1. Kiến trúc SSG (Static Site Generator) & Template
- **Không sửa `index.html` thủ công:** File này tự động được tạo ra (compile). Mọi sửa đổi HTML cần làm tại `src/template.html`.
- **Cấu hình tập trung:** Mọi dữ liệu (Tên khách sạn, số điện thoại, địa chỉ, link MXH) đều được lưu ở `config.json`. Chỉ cần sửa ở đây là đủ.
- **Quy trình Build:** Gõ lệnh `npm run build` (chạy script `scripts/build.js`) để hệ thống kết hợp `template.html` và `config.json` tạo ra file `index.html` cuối cùng.

## 2. Quản Lý & Xử Lý Hình Ảnh (Gallery)
- **Cơ chế đọc thư mục tự động:** Script `build.js` sẽ tự động quét thư mục `images/hotel-gallery/`, đếm số ảnh và sinh ra lưới HTML tương ứng.
- **Quy tắc sắp xếp tên file:** Code build sử dụng hàm sắp xếp bằng trị số (numeric sort) thay vì bảng chữ cái. Bạn cứ đánh số tự nhiên `1.jpg`, `2.jpg`... `22.jpg` là máy sẽ xếp đúng. Không lo lỗi `22.jpg` đứng trước `6.jpg`.
- **Loại trừ hình ảnh không phù hợp:** Thường thì nên loại trừ ảnh cận cảnh mặt lễ tân hoặc nhân sự cụ thể để thư viện ảnh mang tính tổng quan cảnh quan kiến trúc, trừ khi khách hàng yêu cầu cụ thể.

## 3. Phong Cách Typography & CSS
- **Chữ trên nền ảnh (Hero/Banner):** Luôn dùng đổ bóng `text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7)` để chữ rõ ràng và nổi bật bất kể màu ảnh nền.
- **Hạn chế in hoa toàn bộ (All-caps):** Với các câu Slogan dài, dùng chữ thường (có viết hoa chữ cái đầu) thay vì All-caps để không làm nặng nề giao diện.
- **Letter-spacing:** Giữ khoảng cách chữ nhỏ (`0.5px` thay vì `2px`) để văn bản dài liền mạch, tối ưu cho màn hình di động.

## 4. Hiệu Ứng Chuyển Động (Animations)
- **Lỗi chớp chữ trước khi tải ảnh:** Áp dụng `opacity: 0; animation-fill-mode: forwards;` cho mọi thẻ text trong banner. Chữ tuyệt đối không được hiện lên cho tới khi animation chính thức được kích hoạt, để tránh tình trạng chữ hiện lên nền trắng trong lúc ảnh nặng chưa tải xong.
- **Hiệu ứng lưới (Grid Delay):** Sinh tự động qua build.js. Các ảnh trong lưới 3 cột sẽ xen kẽ `delay-1`, `delay-2` để xuất hiện theo hình sóng.
