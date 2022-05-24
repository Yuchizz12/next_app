import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Other() {
  const [users, setUsers] = useState([])

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) {
      return res.json()
    })
    .then(function (users) {
      // store Data in State Data Variable
      setData(data)
    })
    .catch(function (err) {
      console.log(err, ' error')
    })

  return (
    // <div className="">
    <>
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
