<div align="center">
  <h1>🛒 React Native E-commerce App</h1>
  <h3>Mobile Application - Firebase Integration</h3>

  <p align="center">
    <img src="https://img.shields.io/badge/Framework-React%20Native-61DAFB?style=for-the-badge&logo=react" alt="React Native" />
    <img src="https://img.shields.io/badge/Toolchain-Expo-000020?style=for-the-badge&logo=expo" alt="Expo" />
    <img src="https://img.shields.io/badge/Backend-Firebase-FFCA28?style=for-the-badge&logo=firebase" alt="Firebase" />
    <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Navigation-React%20Navigation-6b52ae?style=for-the-badge&logo=react" alt="React Navigation" />
  </p>

  <p>
    <i>[Tiếng Việt bên dưới / Vietnamese version below]</i>
  </p>
</div>

<details open>
<summary><h2>🇺🇸 English Version</h2></summary>

### 1. Overview
This is a React Native E-commerce application built with Expo. It provides a complete UI and flow for a shopping application, including user authentication, product browsing by various tech categories, cart management, and user profile handling. The app integrates directly with Firebase for authentication and database management.

### 2. Objectives & Features
- **User Authentication**: Secure Login, Registration, and Forgot Password features powered by Firebase Authentication.
- **Product Browsing**: Browse products by categories such as Phones, Laptops, Desktops, Tablets, and Headphones.
- **Cart Management**: Add products to cart, update quantities, remove items, and checkout via React Context API.
- **Search Functionality**: Quickly search for products across all categories.
- **Profile & History**: View user profile, order history, and notifications.
- **Custom Navigation**: Uses `@react-navigation/native-stack` for smooth screen transitions and a custom bottom `DockBar` for quick access.

### 3. System Architecture & Tech Stack
- **Framework**: React Native (Expo)
- **Navigation**: React Navigation (`@react-navigation/native-stack`)
- **State Management**: React Context API (`CartContext`)
- **Backend Services**: Firebase (Authentication & Firestore)
- **Local Storage**: AsyncStorage (`@react-native-async-storage/async-storage`)
- **UI & Styling**: React Native Paper, React Native Vector Icons, React Native Linear Gradient

### 4. Directory Structure
```text
React-Native-Ecommerce-FireBase
├── App.js                     # Main entry point and Navigation Stack setup
├── app.json                   # Expo configuration file
├── package.json               # Project dependencies and scripts
├── firebase-config.example.js # Firebase configuration template
├── assets/                    # Static assets like splash screen and app icon
└── components/                # React Native components and screens
    ├── About.js               # About the app screen
    ├── Cart.js                # Shopping cart screen
    ├── CartContext.js         # Context API for state management of cart & orders
    ├── Category.js            # Top categories component
    ├── Checkout.js            # Checkout process screen
    ├── Desktop.js             # Desktop products category screen
    ├── Dockbar.js             # Custom bottom navigation dock bar
    ├── ForgotPasswordScreen.js# Password recovery screen
    ├── Headphone.js           # Headphone products category screen
    ├── History.js             # Order history screen
    ├── Home.js                # Main home screen with banners and product feed
    ├── Laptop.js              # Laptop products category screen
    ├── Login.js               # User login screen
    ├── Mobile.js              # Mobile phone products category screen
    ├── Notification.js        # User notifications screen
    ├── OnlinePayment.js       # Online payment component view
    ├── ProductDetail.js       # Detailed view for a single product
    ├── Profile.js             # User profile screen
    ├── Register.js            # User registration screen (writes to Firestore)
    ├── ScreenWrapper.js       # Wrapper component for layout & safe area
    ├── Tablet.js              # Tablet products category screen
    ├── User.js                # User dashboard/menu screen
    ├── YourOrder.js           # Placed orders screen
    ├── Icon/                  # Local directory for icon images
    └── Picture/               # Local directory for app images/banners
```

### 5. Getting Started

**Prerequisites**
- Node.js (v18 or newer recommended)
- Expo CLI (`npm install -g expo-cli`)
- A Firebase project setup

**Installation**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/PhucAn04/React-Native-Ecommerce-FireBase.git
   cd React-Native-Ecommerce-FireBase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password) and Firestore Database.
   - Copy your Firebase config object.
   - Duplicate or rename `firebase-config.example.js` to `firebase-config.js`.
   - Update `firebase-config.js` with your Firebase project credentials.

4. **Start the application**:
   ```bash
   npx expo start
   ```
   - Press `a` to run on an Android emulator/device.
   - Press `i` to run on an iOS simulator (requires macOS).
   - Press `w` to run on the web.

</details>

---

<details open>
<summary><h2>🇻🇳 Tiếng Việt</h2></summary>

### 1. Tổng quan
Đây là một ứng dụng Thương mại điện tử React Native được xây dựng với Expo. Ứng dụng cung cấp giao diện người dùng và luồng hoàn chỉnh cho một ứng dụng mua sắm, bao gồm xác thực người dùng, duyệt sản phẩm theo các danh mục công nghệ khác nhau, quản lý giỏ hàng và xử lý hồ sơ người dùng. Ứng dụng tích hợp trực tiếp với Firebase để xác thực và quản lý cơ sở dữ liệu.

### 2. Mục tiêu & Các tính năng
- **Xác thực người dùng**: Đăng nhập an toàn, Đăng ký và Quên mật khẩu được cung cấp bởi Firebase Authentication.
- **Duyệt sản phẩm**: Duyệt các sản phẩm theo danh mục như Điện thoại, Laptop, Máy tính để bàn, Máy tính bảng và Tai nghe.
- **Quản lý giỏ hàng**: Thêm sản phẩm vào giỏ hàng, cập nhật số lượng, xóa các mặt hàng và thanh toán thông qua React Context API.
- **Chức năng tìm kiếm**: Tìm kiếm nhanh các sản phẩm trên tất cả các danh mục.
- **Hồ sơ & Lịch sử**: Xem hồ sơ người dùng, lịch sử đơn hàng và thông báo.
- **Điều hướng tùy chỉnh**: Sử dụng `@react-navigation/native-stack` để chuyển đổi màn hình mượt mà và thanh điều hướng `DockBar` tùy chỉnh ở dưới cùng để truy cập nhanh.

### 3. Kiến trúc hệ thống & Công nghệ sử dụng
- **Framework**: React Native (Expo)
- **Điều hướng**: React Navigation (`@react-navigation/native-stack`)
- **Quản lý trạng thái**: React Context API (`CartContext`)
- **Dịch vụ Backend**: Firebase (Authentication & Firestore)
- **Lưu trữ cục bộ**: AsyncStorage (`@react-native-async-storage/async-storage`)
- **Giao diện (UI & Styling)**: React Native Paper, React Native Vector Icons, React Native Linear Gradient

### 4. Cấu trúc thư mục
```text
React-Native-Ecommerce-FireBase
├── App.js                     # Điểm vào chính và thiết lập Navigation Stack
├── app.json                   # Tệp cấu hình Expo
├── package.json               # Các dependencies và script của dự án
├── firebase-config.example.js # Mẫu cấu hình Firebase
├── assets/                    # Các tài nguyên tĩnh như splash screen và biểu tượng ứng dụng
└── components/                # Các components và màn hình React Native
    ├── About.js               # Màn hình giới thiệu ứng dụng
    ├── Cart.js                # Màn hình giỏ hàng
    ├── CartContext.js         # Context API quản lý trạng thái giỏ hàng & đơn đặt hàng
    ├── Category.js            # Component danh mục nổi bật
    ├── Checkout.js            # Màn hình quá trình thanh toán
    ├── Desktop.js             # Màn hình danh mục sản phẩm Máy tính để bàn
    ├── Dockbar.js             # Thanh điều hướng tùy chỉnh ở dưới cùng
    ├── ForgotPasswordScreen.js# Màn hình khôi phục mật khẩu
    ├── Headphone.js           # Màn hình danh mục sản phẩm Tai nghe
    ├── History.js             # Màn hình lịch sử đơn hàng
    ├── Home.js                # Màn hình trang chủ chính với banner và danh sách sản phẩm
    ├── Laptop.js              # Màn hình danh mục sản phẩm Laptop
    ├── Login.js               # Màn hình đăng nhập người dùng
    ├── Mobile.js              # Màn hình danh mục sản phẩm Điện thoại di động
    ├── Notification.js        # Màn hình thông báo cho người dùng
    ├── OnlinePayment.js       # Component view thanh toán trực tuyến
    ├── ProductDetail.js       # Giao diện chi tiết cho một sản phẩm
    ├── Profile.js             # Màn hình hồ sơ người dùng
    ├── Register.js            # Màn hình đăng ký người dùng (ghi vào Firestore)
    ├── ScreenWrapper.js       # Component bọc layout & vùng an toàn (safe area)
    ├── Tablet.js              # Màn hình danh mục sản phẩm Máy tính bảng
    ├── User.js                # Màn hình điều khiển/menu người dùng
    ├── YourOrder.js           # Màn hình các đơn hàng đã đặt
    ├── Icon/                  # Thư mục cục bộ cho hình ảnh icon
    └── Picture/               # Thư mục cục bộ cho hình ảnh/banner của ứng dụng
```

### 5. Hướng dẫn cài đặt

**Yêu cầu hệ thống**
- Node.js (phiên bản v18 hoặc mới hơn được khuyến nghị)
- Expo CLI (`npm install -g expo-cli`)
- Thiết lập một dự án Firebase

**Cài đặt**
1. **Clone kho lưu trữ**:
   ```bash
   git clone https://github.com/PhucAn04/React-Native-Ecommerce-FireBase.git
   cd React-Native-Ecommerce-FireBase
   ```

2. **Cài đặt các dependencies**:
   ```bash
   npm install
   ```

3. **Cấu hình Firebase**:
   - Tạo một dự án Firebase trong [Firebase Console](https://console.firebase.google.com/).
   - Bật Authentication (Email/Password) và Firestore Database.
   - Sao chép đối tượng cấu hình Firebase của bạn.
   - Nhân bản hoặc đổi tên `firebase-config.example.js` thành `firebase-config.js`.
   - Cập nhật `firebase-config.js` với thông tin đăng nhập dự án Firebase của bạn.

4. **Chạy ứng dụng**:
   ```bash
   npx expo start
   ```
   - Nhấn `a` để chạy trên trình giả lập/thiết bị Android.
   - Nhấn `i` để chạy trên trình giả lập iOS (yêu cầu macOS).
   - Nhấn `w` để chạy trên web.

</details>
