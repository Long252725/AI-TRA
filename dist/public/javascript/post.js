"use strict";

var postBtn = document.querySelector("#postBtn");
postBtn.addEventListener('click', function () {
  var nameSach = document.querySelector('.inputName').value;
  var state = document.querySelector('.inputState').value;
  var nam_xuat_ban = document.querySelector('.inputYear').value;
  var school = document.querySelector('.inputSchool').value;
  var des = document.querySelector('.inputDes').value;
  var res = fetch('http://localhost:8888/post/sp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nameSach: nameSach,
      state: state,
      nam_xuat_ban: nam_xuat_ban,
      school: school,
      des: des
    })
  }).then(function (res) {
    return res.json();
  });
});