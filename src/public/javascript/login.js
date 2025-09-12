const headerContainer = document.querySelector('.header-container');
headerContainer.style.display = "none"

const submitDk = document.querySelector("#submitDk")

submitDk.addEventListener("click", async (e) => {
    e.preventDefault();
    const usernameDK = document.querySelector("#usernameDK").value;
    const fullnameDK = document.querySelector("#fullnameDK").value;
    const passwordDK = document.querySelector("#passwordDK").value;
    const emailDK = document.querySelector("#emailDK").value;
    const user = {
      userName: usernameDK,
      fullName: fullnameDK,
      email: emailDK,
      pass: passwordDK
    };
    console.log(user);
    try {

    const res = await fetch("http://localhost:8888/login/sigup-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)})

        const data = await res.json();

        if (res.ok) {
        //   alert("Đăng ký thành công!");
          window.location.href = "/login"; // chuyển hướng về login
        } else {
          alert(data.message || "Đăng ký thất bại!");
        }
      } catch (err) {
        console.error(err);
        alert("Lỗi kết nối server!");
      }
})
const submitDn = document.querySelector("#submitDn")

submitDn.addEventListener("click", async (e) => {
    e.preventDefault();

    const user = {
      email: document.querySelector("#emailDn").value,
      pass: document.querySelector("#passDn").value,
    };

    try {
      const res = await fetch("/login/login-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        // alert("Đăng nhập thành công!");
        // ví dụ: lưu user vào localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        // chuyển hướng sang trang chủ
        window.location.href = "/";
      } else {
        alert(data.message || "Đăng nhập thất bại!");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối server!");
    }
  });
