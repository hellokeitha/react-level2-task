import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../shared/data";

function Details() {
  const params = useParams();

  //   어떤 todo 인지 찾아보기
  const foundData = data.find((item) => {
    return item.id === params.id;
    //parseInt() : 숫자형식으로 바꿔주는 함수
  });
  console.log("foundData", foundData);

  const navigate = useNavigate();

  return (
    <div>
      Details
      <p>{foundData.id}</p>
      <p>{foundData.title}</p>
      <p>{foundData.contents}</p>
      <p>{foundData.isDone.toString()}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </button>
      {/* <Link to='/Home'>홈 페이지로 이동하기</Link> */}
    </div>
  );
}

export default Details;
