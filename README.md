# Memory Safe Guard - Ứng dụng Quản lý Mật khẩu An toàn

![Memory Safe Guard](./src/assets/password-hero.png)

## Giới thiệu

Memory Safe Guard là ứng dụng quản lý mật khẩu hiện đại, an toàn và dễ sử dụng, được phát triển với giao diện người dùng đẹp mắt và trải nghiệm người dùng tuyệt vời. Ứng dụng cho phép người dùng lưu trữ, quản lý và bảo vệ thông tin đăng nhập của họ một cách an toàn ngay trong trình duyệt.

### Tính năng chính

- **Lưu trữ mật khẩu an toàn**: Lưu trữ thông tin đăng nhập một cách an toàn với IndexedDB
- **Tìm kiếm nhanh chóng**: Tìm kiếm mật khẩu theo tên dịch vụ hoặc tên đăng nhập
- **Quản lý mật khẩu**: Thêm, chỉnh sửa và xóa thông tin đăng nhập
- **Hiển thị/Ẩn mật khẩu**: Xem mật khẩu khi cần thiết
- **Sao chép nhanh**: Sao chép tên đăng nhập và mật khẩu vào clipboard
- **Tạo mật khẩu ngẫu nhiên**: Tạo mật khẩu mạnh và ngẫu nhiên
- **Dữ liệu cục bộ**: Tất cả dữ liệu được lưu trữ cục bộ trong trình duyệt, không có máy chủ bên ngoài
- **Giao diện hiện đại**: Thiết kế đẹp mắt với Tailwind CSS và shadcn/ui

## Công nghệ sử dụng

### Frontend
- **React**: Thư viện JavaScript để xây dựng giao diện người dùng
- **TypeScript**: Ngôn ngữ lập trình JavaScript với kiểu dữ liệu tĩnh
- **Vite**: Công cụ build hiện đại, nhanh chóng
- **Tailwind CSS**: Framework CSS tiện ích
- **shadcn/ui**: Thư viện UI components dựa trên Radix UI
- **React Router**: Thư viện định tuyến cho React
- **Lucide React**: Thư viện biểu tượng
- **date-fns**: Thư viện xử lý ngày tháng
- **React Hook Form**: Thư viện quản lý form với hiệu suất cao
- **React Query**: Thư viện quản lý trạng thái và fetching data
- **Sonner**: Thư viện hiển thị thông báo toast

### Lưu trữ dữ liệu
- **IndexedDB**: Cơ sở dữ liệu cục bộ trong trình duyệt
  - Dữ liệu được lưu trữ vĩnh viễn trong trình duyệt
  - Dữ liệu KHÔNG bị mất khi làm mới trang
  - Không cần kết nối internet để sử dụng

### Công cụ phát triển
- **ESLint**: Công cụ phân tích mã tĩnh để phát hiện và sửa lỗi
- **SWC**: Trình biên dịch JavaScript/TypeScript nhanh hơn Babel
- **PostCSS**: Công cụ chuyển đổi CSS với JavaScript
- **Path Alias**: Cấu hình alias '@/' cho đường dẫn tương đối

## Cấu trúc dự án

```
src/
├── assets/         # Chứa tài nguyên tĩnh như hình ảnh, font chữ
├── components/     # Các components UI tái sử dụng
│   ├── ui/         # Các components UI cơ bản từ shadcn/ui
│   ├── PasswordCard.tsx    # Component hiển thị thông tin mật khẩu
│   ├── PasswordForm.tsx    # Form thêm/chỉnh sửa mật khẩu
│   └── SearchBar.tsx       # Thanh tìm kiếm mật khẩu
├── db/             # Mã nguồn liên quan đến IndexedDB
│   └── db.ts       # Quản lý kết nối và thao tác với IndexedDB
├── hooks/          # Custom React hooks
│   └── use-passwords.ts    # Hook quản lý trạng thái và thao tác với mật khẩu
├── lib/            # Thư viện và tiện ích
│   └── utils.ts    # Các hàm tiện ích
├── pages/          # Các trang của ứng dụng
│   └── Index.tsx   # Trang chính của ứng dụng
├── types/          # Định nghĩa kiểu dữ liệu TypeScript
│   └── password.ts # Định nghĩa kiểu dữ liệu cho mật khẩu
├── App.tsx         # Component gốc của ứng dụng
└── main.tsx        # Điểm khởi đầu của ứng dụng
```

## Cấu hình dự án

### Vite
Dự án sử dụng Vite làm công cụ build với các cấu hình sau:
- Port mặc định: 8080
- Plugin: React với SWC, Lovable Tagger (chỉ trong môi trường development)
- Alias path: '@' trỏ đến thư mục './src'

### TypeScript
Dự án sử dụng TypeScript với các cấu hình sau:
- Tham chiếu đến các file cấu hình: tsconfig.app.json và tsconfig.node.json
- Alias path: '@/*' trỏ đến './src/*'
- Các tùy chọn bổ sung: noImplicitAny: false, skipLibCheck: true, allowJs: true, strictNullChecks: false

## Cài đặt và Sử dụng

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Cài đặt

```sh
# Bước 1: Clone repository
git clone <YOUR_GIT_URL>

# Bước 2: Di chuyển vào thư mục dự án
cd memory-safe-guard

# Bước 3: Cài đặt các dependencies
npm install
# hoặc
yarn install

# Bước 4: Khởi chạy ứng dụng ở chế độ development
npm run dev
# hoặc
yarn dev
```

Sau khi chạy lệnh trên, ứng dụng sẽ được khởi chạy tại `http://localhost:8080`.

### Các lệnh có sẵn

```sh
# Khởi chạy ứng dụng ở chế độ development
npm run dev

# Build ứng dụng cho production
npm run build

# Build ứng dụng cho development
npm run build:dev

# Kiểm tra lỗi với ESLint
npm run lint

# Xem trước bản build
npm run preview
```

### Hướng dẫn sử dụng chi tiết

#### Thêm mật khẩu mới
1. Nhấn vào nút "Thêm mật khẩu" ở góc trên bên phải
2. Điền thông tin vào form:
   - Dịch vụ: Tên trang web hoặc ứng dụng (ví dụ: Facebook, Gmail)
   - Tên đăng nhập: Email hoặc tên người dùng của bạn
   - Mật khẩu: Mật khẩu của bạn (có thể sử dụng nút "Tạo mật khẩu" để tạo mật khẩu ngẫu nhiên)
3. Nhấn "Lưu" để thêm mật khẩu

#### Xem và quản lý mật khẩu
1. Tất cả mật khẩu được hiển thị dưới dạng thẻ trên trang chính
2. Mỗi thẻ hiển thị tên dịch vụ, tên đăng nhập và mật khẩu (được ẩn mặc định)
3. Các tùy chọn trên mỗi thẻ:
   - Nhấn vào biểu tượng mắt để hiển thị/ẩn mật khẩu
   - Nhấn vào biểu tượng sao chép để sao chép tên đăng nhập hoặc mật khẩu
   - Nhấn vào biểu tượng chỉnh sửa để cập nhật thông tin
   - Nhấn vào biểu tượng xóa để xóa mật khẩu

#### Tìm kiếm mật khẩu
1. Sử dụng thanh tìm kiếm ở phía trên để lọc mật khẩu theo dịch vụ hoặc tên đăng nhập
2. Kết quả tìm kiếm sẽ được cập nhật ngay lập tức khi bạn nhập

### Build cho production

```sh
npm run build
# hoặc
yarn build
```

Các file build sẽ được tạo trong thư mục `dist`.

## Bảo mật

Memory Safe Guard lưu trữ tất cả dữ liệu mật khẩu cục bộ trên trình duyệt của bạn sử dụng IndexedDB. Dữ liệu không được gửi đến bất kỳ máy chủ nào, đảm bảo rằng thông tin nhạy cảm của bạn luôn ở trong tầm kiểm soát của bạn.

Tuy nhiên, hãy lưu ý rằng:
- Nếu bạn xóa dữ liệu trình duyệt, mật khẩu của bạn cũng sẽ bị xóa
- Mật khẩu được lưu trữ dưới dạng văn bản thuần túy trong IndexedDB, vì vậy hãy đảm bảo rằng máy tính của bạn được bảo mật
- Không sử dụng ứng dụng này trên máy tính công cộng hoặc thiết bị không đáng tin cậy
- Luôn đăng xuất khỏi trình duyệt khi sử dụng trên thiết bị dùng chung

### Cách IndexedDB hoạt động trong ứng dụng

Memory Safe Guard sử dụng IndexedDB để lưu trữ mật khẩu với cấu trúc sau:
- Database name: 'password-manager'
- Object store: 'passwords'
- Mỗi mật khẩu được lưu trữ với cấu trúc:
  - id: Định danh duy nhất (UUID)
  - service: Tên dịch vụ hoặc trang web
  - username: Tên đăng nhập hoặc email
  - password: Mật khẩu
  - updatedAt: Thời gian cập nhật gần nhất

Dữ liệu được duy trì ngay cả khi làm mới trang nhờ vào tính bền vững của IndexedDB. Ứng dụng sẽ tự động tải lại dữ liệu mỗi khi trang được mở.

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Nếu bạn muốn đóng góp, hãy tạo một pull request hoặc mở một issue để thảo luận về những thay đổi bạn muốn thực hiện.

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## Thông tin dự án

**URL**: https://lovable.dev/projects/d3471dfb-cb23-4cc8-b693-fa05ce90b49c

## Cách chỉnh sửa mã nguồn

Có nhiều cách để chỉnh sửa ứng dụng này:

### Sử dụng Lovable

Truy cập [Lovable Project](https://lovable.dev/projects/d3471dfb-cb23-4cc8-b693-fa05ce90b49c) và bắt đầu nhắn tin.

Các thay đổi được thực hiện qua Lovable sẽ được commit tự động vào repo này.

### Sử dụng IDE ưa thích của bạn

Nếu bạn muốn làm việc cục bộ bằng IDE của riêng mình, bạn có thể clone repo này và push các thay đổi. Các thay đổi được push cũng sẽ được phản ánh trong Lovable.

Yêu cầu duy nhất là cài đặt Node.js & npm - [cài đặt với nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Chỉnh sửa file trực tiếp trong GitHub

- Điều hướng đến (các) file mong muốn.
- Nhấp vào nút "Edit" (biểu tượng bút chì) ở góc trên bên phải của chế độ xem file.
- Thực hiện các thay đổi của bạn và commit các thay đổi.

### Sử dụng GitHub Codespaces

- Điều hướng đến trang chính của repository của bạn.
- Nhấp vào nút "Code" (nút màu xanh lá) gần góc trên bên phải.
- Chọn tab "Codespaces".
- Nhấp vào "New codespace" để khởi chạy môi trường Codespace mới.
- Chỉnh sửa file trực tiếp trong Codespace và commit và push các thay đổi của bạn khi bạn hoàn tất.

## Triển khai

Ứng dụng này có thể được triển khai trên bất kỳ dịch vụ hosting tĩnh nào như Netlify, Vercel, GitHub Pages, hoặc Firebase Hosting.

### Các bước triển khai

1. Build ứng dụng cho production:
   ```sh
   npm run build
   ```

2. Triển khai thư mục `dist/` lên dịch vụ hosting của bạn:

   #### Netlify
   ```sh
   # Cài đặt Netlify CLI (nếu chưa có)
   npm install -g netlify-cli
   
   # Đăng nhập vào Netlify
   netlify login
   
   # Triển khai
   netlify deploy --prod --dir=dist
   ```

   #### Vercel
   ```sh
   # Cài đặt Vercel CLI (nếu chưa có)
   npm install -g vercel
   
   # Đăng nhập vào Vercel
   vercel login
   
   # Triển khai
   vercel --prod
   ```

   #### GitHub Pages
   - Thêm `base` vào file `vite.config.ts` với giá trị là tên repository của bạn
   - Sử dụng GitHub Actions để tự động triển khai khi push lên repository

### Kết nối tên miền tùy chỉnh

Nếu bạn muốn sử dụng tên miền tùy chỉnh cho ứng dụng của mình, hãy tham khảo tài liệu của nhà cung cấp hosting của bạn để biết hướng dẫn cụ thể.

## Kế hoạch phát triển tương lai

Dự án Memory Safe Guard có kế hoạch phát triển các tính năng sau trong tương lai:

- **Mã hóa dữ liệu**: Thêm lớp mã hóa cho dữ liệu được lưu trữ trong IndexedDB
- **Đồng bộ hóa đám mây**: Tùy chọn đồng bộ hóa mật khẩu với dịch vụ đám mây
- **Xác thực hai yếu tố**: Thêm lớp bảo mật bổ sung khi truy cập ứng dụng
- **Xuất/Nhập dữ liệu**: Cho phép người dùng sao lưu và khôi phục dữ liệu
- **Phân loại mật khẩu**: Thêm khả năng phân loại mật khẩu theo nhóm hoặc thẻ
- **Kiểm tra độ mạnh của mật khẩu**: Đánh giá và đề xuất cải thiện mật khẩu
- **Phiên bản di động**: Phát triển phiên bản cho thiết bị di động
