import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  //   const location = useLocation();

  return (
    <div>
      Contact Here blabla
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <Link to="http://hellokeitha.tistory.com">블로그 바로가기</Link>
    </div>
  );
};

export default Contact;
