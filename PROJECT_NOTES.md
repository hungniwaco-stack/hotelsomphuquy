# Sớm Phú Quý Hotel - Project Knowledge Base

Tệp này lưu trữ các thông tin quan trọng và thói quen làm việc được đúc kết từ quá trình phát triển website, giúp AI trong các phiên làm việc sau có thể hiểu và thao tác chính xác mà không cần hỏi lại người dùng.

## 1. Thông tin chung về dự án
- **Vị trí thư mục local:** `D:\Hungniwaco\Claude Code\som-phu-quy-hotel`
- **Kho lưu trữ GitHub:** `https://github.com/hungniwaco-stack/som-phu-quy-hotel.git` (hoặc `hotelsomphuquy.git`).
- **Môi trường triển khai:** Vercel. Mọi thay đổi code sau khi được đẩy (`git push`) lên nhánh `main` sẽ tự động được Vercel cập nhật lên live website. Do đó, quy trình chuẩn sau khi sửa code/thêm ảnh là phải tạo commit và push lên GitHub.

## 2. Quản lý Hình ảnh (Quan trọng)
- **KHÔNG sử dụng link ảnh từ bên ngoài (CDN, Booking.com, v.v.):** Các link này thường bị lỗi hiển thị (403 Forbidden) do chính sách chống hotlink hoặc lỗi CORS khi deploy lên Vercel.
- **Quy trình chuẩn khi cập nhật ảnh:**
  1. Người dùng sẽ tải ảnh trực tiếp vào khung chat.
  2. AI cần tìm ảnh đó trong bộ nhớ tạm (`.tempmediaStorage` của thư mục hội thoại).
  3. Copy ảnh đó vào thư mục `images/` của dự án (đặt tên cho dễ nhớ, ví dụ: `hero-exterior.jpg`, `room-1.jpg`, `attraction-1.jpg`).
  4. Cập nhật `index.html` để sử dụng đường dẫn tương đối (ví dụ: `url('images/room-1.jpg')`).

## 3. Cấu trúc Giao diện (UI/UX)
- Website là một Landing Page tĩnh (HTML, CSS, JS).
- **Tính đồng bộ của các thẻ (Cards):** Tất cả các mục hiển thị danh sách (Phòng Nghỉ Sang Trọng, Đi Gần, Đi Trong Nửa Ngày, Đi Xa Hơn Chút) đều đã được chuẩn hóa để sử dụng chung cấu trúc `.room-card` chứa ảnh nền (`.room-img`).
  - *Lưu ý:* Không sử dụng `.review-card` (chỉ chứa icon) cho các mục địa điểm du lịch để đảm bảo giao diện luôn bắt mắt và đồng nhất.

## 4. Đặc điểm nội dung
- **Khách sạn:** Sớm Phú Quý Hotel.
- **Vị trí:** Ninh Phước - Khánh Hòa / khu vực Phan Rang - Ninh Thuận (Các điểm du lịch lân cận bao gồm: Biển Bình Sơn, Tháp Po Klong Garai, Đồi Cát Nam Cương, Làng Gốm Bàu Trúc, Vườn Nho, Bờ Kè Khánh Hội, Hang Rái, Vịnh Vĩnh Hy, Vườn Quốc Gia Núi Chúa).

## 5. Quy trình làm việc tiêu chuẩn của AI
1. Nhận yêu cầu từ người dùng (thường kèm ảnh).
2. Xử lý ảnh lưu vào local (`images/`).
3. Dùng tool `multi_replace_file_content` hoặc `replace_file_content` để sửa `index.html`.
4. Chạy lệnh: `git add .`, `git commit -m "..."`, và `git push`.
5. Thông báo cho người dùng F5 lại trang Vercel để kiểm tra.
