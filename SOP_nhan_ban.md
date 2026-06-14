# Quy Trình Nhân Bản Dự Án (SOP)

Tài liệu này hướng dẫn cách nhân bản "Cỗ máy đúc Website" này cho một khách sạn / khách hàng mới.

## 1. Chuẩn bị Thư mục & Môi trường
1. Copy toàn bộ thư mục của dự án này sang một thư mục mới (vd: `D:\Hungniwaco\Claude Code\hotel-hoang-hon`).
2. **QUAN TRỌNG:** Xóa thư mục ẩn `.git` ở dự án mới để nó không dính dáng tới lịch sử code của dự án cũ.
3. Mở Terminal / PowerShell tại thư mục mới.
4. Nạp lại 2 bộ kỹ năng cho AI:
   - `https://github.com/anthropics/skills`
   - `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`
5. Khởi tạo một **New Conversation** hoàn toàn mới với Claude để bắt đầu code cho dự án mới, đảm bảo AI không bị lẫn lộn bối cảnh. Nhớ gửi file `project_guidelines.md` và `config.json` cho AI đọc ở câu lệnh đầu tiên.

## 2. Thiết lập Dữ liệu Khách sạn
Mở file `config.json` và sửa lại tất cả các nội dung text:
- `HOTEL_NAME`
- `HOTEL_SUBTITLE`
- `PHONE_NUMBER`, `PHONE_LINK`, `ZALO_LINK`
- `ADDRESS`
- `MAP_URL`...

## 3. Quản lý Hình ảnh
1. Xóa toàn bộ file trong `images/hotel-gallery/`.
2. Chép toàn bộ file ảnh thi công thực tế của khách hàng mới vào thư mục đó.
3. Đổi tên ảnh thành số nguyên `1.jpg`, `2.jpg`, `3.jpg` (bạn có thể nhờ AI đổi tên tự động).
4. Thay các ảnh logo, ảnh nền banner ở `images/` (đổi tên cho trùng khớp với file cũ).

## 4. Build Website
Mở Terminal tại thư mục gốc dự án mới và chạy lệnh:
```bash
npm run build
```
Lệnh này sẽ tự động thay toàn bộ thông tin từ `config.json` và sinh ra lưới ảnh tự động từ thư mục `hotel-gallery/`, đúc ra file `index.html` hoàn chỉnh chỉ trong 1 giây.

## 5. Tùy chỉnh Giao Diện (Theme)
Mở file `style.css` và tìm đoạn:
```css
:root {
  --primary-color: #d4af37; /* Đổi màu tại đây */
}
```
Hãy sửa màu `--primary-color` theo tông màu thương hiệu của khách sạn mới. Toàn bộ nút bấm, điểm nhấn trên website sẽ tự động đổi màu theo!
