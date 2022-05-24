import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Home() {
  const Container = styled.div`
    display: flex;
    width: 500px;
  `

  const list = styled.div`
    display: flex;
  `

  const Frame = styled.div`
    width: 400px;
    height: 300px;
  `

  const Title = styled.div`
    position: fixed;
    top: 0px;
  `
  // react Hook For State Handler
  const [data, setData] = useState({  data: [] })

  // Fetch Function
  useEffect(() => {
    if (!data) return
    fetch('./data.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        // store Data in State Data Variable
        setData(data)
      })
      .catch(function (err) {
        console.log(err, ' error')
      })
  }, [data])

  return (
    // <div className="">
    <>
      <Title>title</Title>
      <Title> {data.locationName}</Title>
      <Container>
        {
          // use data State Variable For Get Data Use JavaScript Map Mathod
          data &&
            data.data.map((data, key) => {
              return (
                <Frame key={key}>
                  <Frame key={key}>
                    {data.name && <ul>{data.name}</ul>}
                    {data.mail && <ul>{data.mail}</ul>}
                    {data.age && <ul>{data.age}</ul>}
                  </Frame>
                </Frame>
              )
            })
        }
      </Container>
    </>
  )
}
