# This repository is about me, practicing javascript advanced knowledge so that i won't forget them, so i can touch some grass and get a real job later :(

Live Website:
<a href="https://trandangkhoi.github.io/Javascript-Advanced-Knowledge/index.html">Go to deployed website</a>

# Local Storage là gì ?

- Local Storage là kho lưu trữ ở dưới dạng local, lưu bên trong trình duyệt của máy tính và có type là một object
- Một vài điều thú vị và ưu điểm của Local Storage:
  - là Javascript thuần! Thứ gây ức chế nhất về cookies đó là nó cần được tạo bởi web server ! Nếu bạn đang build một static site đơn giản thì việc dùng Local Storage đồng nghĩa với các webpage của bạn có thể chạy độc lập với bất kì server nào -> không cần ngôn ngữ BE nào hay logic nào để lưu data trong browser
  - Một điều nữa về local storage đó là nó không có nhiều size constraint (ràng buộc kích cỡ) như cookies. Local Storage cung cấp ít nhất 5MB data storage qua tất cả các web browser, hơn rất nhiều so với cookies (max 4KB)
    -> Chính 2 điều trên làm cho Local Storage trở nên hữu ích nếu bạn cache một số app data trong browser để dùng sau. Vì với 4KB là không nhiều, local storage là một trong những option thay thế duy nhất
- Đã có ưu điểm thì cũng phải có nhược điểm, vậy local storage có gì những gì không tốt
  - Local Storage cực kì basic, API rất đơn giản:
  * Nó chỉ có thể lưu string data -> Nó trở nên vô dụng khi muốn lưu trữ các loại data phức tạp hơn.
  * Nó có đồng bộ -> đồng nghĩa mỗi local storage operation bạn chạy sẽ chỉ được một lần duy nhất
  * Các web worker không thể dùng nó, nếu bạn muốn build một app tận dụng background process để tăng hiệu suất, các chrome extensions, bạn không thể dùng local storage vì nó không có sẵn cho các web server
  * Nó vẫn giới hạn size của data bạn có thể lưu trữ. Đây là một khoản khá hạn hẹp cho những người build app mà có lượng data lớn hoặc cần phải function offline
  * Tính bảo mật kém bởi các hacker có thể sử dụng Cross Site Scripting (XSS), DNS spoofing attacks... để tấn công.
    -> Túm cái váy lại thì, chỉ nên dùng local storage khi cần các info có sẵn mà không quá nhạy cảm, không cần dùng cho các app cao cấp, không quá 5MB và chỉ chứa string data
- CHÚ Ý:
  - Không lưu các JSON Web Tokens(JWT) trong local storage
  - Nếu các link bạn nhúng vào website bị hack thì các hacker có thể dễ dàng lấy hết thông tin trong local storage của người dùng
