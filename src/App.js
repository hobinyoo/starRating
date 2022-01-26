import { Route, Routes } from "react-router-dom";
import React from "react";

import MyWeek from "./myweek";
import MyDay from "./myday";
import styled from "styled-components";


function App() {

  const data = [
    {
      title: "월"
    },
    {
      title: "화"
    },
    {
      title: "수"
    },
    {
      title: "목"
    },
    {
      title: "금"
    },
    {
      title: "토"
    },
    {
      title: "일"
    },
    ];
  
  return (
    <div className="App">
      <Container>
        <Title>내 일주일은?</Title>
        <Line />

        <Routes>
          <Route path="/" element={<MyWeek data={data} />} />
          <Route path="/myday/:title" element={<MyDay data={data}/>} />
          </Routes>
      </Container>
    </div>
  );
}



const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 10px;
  margin: 100px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  `;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
  `;

const Line = styled.hr`
  margin: 16px 10px;
  border: 1px dotted #ddd;
  `;

export default App;