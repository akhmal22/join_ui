//import React from 'react'
// POST for register request method

export function postRegisterExperience(name,comp,start,end,desc){
  fetch('http://35.223.215.2:5000/license/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      company: comp,
      start_date: start,
      end_date: end,
      description: desc
    })
  }).then(res => {return res.json()})
  .then(json => {console.log(json)});
}

export function postRegisterLicense(name,comp,start,end,desc){
  fetch('http://35.223.215.2:5000/license/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      company: comp,
      start_date: start,
      end_date: end,
      description: desc
    })
  }).then(res => {return res.json()})
  .then(json => {console.log(json)});
}

export function postRegisterPortfolio(name,desc,start,end,url){
  fetch('http://35.223.215.2:5000/portfolio/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      description: desc,
      start_date: start,
      end_date: end,
      url: url
    })
  }).then(res => {return res.json()})
  .then(json => {console.log(json)});
}

export function postRegisterSkill(name, familiarity){
  fetch('http://35.223.215.2:5000/skill/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      familiarity: familiarity,
      user_id: localStorage.getItem('user_id')
    })
  }).then(res => {return res.json()})
  .then(json => {console.log(json)});
}

export function putEditUser(fname,uname,phone,addr,email,passwd,org,pos){
  fetch('http://35.223.215.2:5000/user/update/'+localStorage.getItem('user_id'),{
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullname: fname,
      username: uname,
      phone: phone,
      address: addr,
      email: email,
      password: passwd,
      organization: org,
      position: pos
    })
  })
}

export function postRegisterUser(username, email, password) {
  fetch('http://35.223.215.2:5000/user/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullname: "null",
      username: username,
      phone: "null",
      address: "null",
      email: email,
      password: password,
      organization: "null",
      position: "null"
    })
  }).then(response => {return response.json()})
  .then(json => {console.log(json)});
  setTimeout(() => window.location.reload(), 1000);
}

export function getUsers(){
  if(localStorage.getItem("access_token")!==null){
    fetch('http://35.223.215.2:5000/users',{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.status === 401){
        alert('token expired')
        postLogoutUser()
      }else{
        console.log('ok')
      }
    })
  }
}

export function postRegisterProject(name, desc, type, due_date, req_collab){
  fetch('http://35.223.215.2:5000/project/register',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      description: desc,
      type: type,
      due_date: due_date,
      num_req_collaborator: req_collab,
      user_id: localStorage.getItem('user_id')
    })
  })
}

// POST for login request method
export function postLoginUser(username, password) {  
  fetch('http://35.223.215.2:5000/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
    })
  }).then(response => {return response.json()})
  //.then(json => console.log(json))
  .then(store => {localStorage.setItem('access_token', store.access_token);
                  localStorage.setItem('refresh_token', store.refresh_token);
                  localStorage.setItem('user_id', store.user_id)})
}

// POST logout user
export function postLogoutUser() {
  fetch('http://35.223.215.2:5000/user/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      },
      body: JSON.stringify({
    })
  }).then(response => {return response.json()})
  .then(json => console.log(json));
  localStorage.clear()
  setTimeout(() => window.location.reload(), 1000);
}

// PUT request method
export function putContacts(firstParam, secondParam) {
  const param = firstParam;
  fetch('http://35.223.215.2:5000/user/update/' + param, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone: secondParam
    })
  }).then(response => {return response.json()})
  .then(json => {console.log(json)})
}

// DELETE request method
export function deleteContacts(firstParam) {
  const param = firstParam;
  fetch('http://35.223.215.2:5000/user/' + param, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(json => {console.log(json)});
}