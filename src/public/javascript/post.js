const postBtn = document.querySelector("#postBtn")
postBtn.addEventListener('click', ()=> {
  const nameSach = document.querySelector('.inputName').value
  const state = document.querySelector('.inputState').value
  const nam_xuat_ban = document.querySelector('.inputYear').value
  const school = document.querySelector('.inputSchool').value
  const des = document.querySelector('.inputDes').value

  const res = fetch('http://localhost:8888/post/sp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nameSach,
      state,
      nam_xuat_ban,
      school,
      des})})
      .then(res => res.json())
      
})