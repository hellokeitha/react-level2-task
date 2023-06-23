import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { data } from "../shared/data";
import styled from "styled-components";

const StTodos = styled.div`
  width: 200px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const switchBorderColor = (color) => {
  switch (color) {
    case false:
      return "blue";
    case true:
      return "red";
    default:
      return "red";
  }
};

function Home() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState(data);

  return (
    <div>
      <h2>Home Todos</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodos = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };

          setTodos([...todos, newTodos]);
          console.log(data);
        }}
      >
        <input
          placeholder="title here"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          placeholder="contents here"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>save!</button>
      </form>

      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact
      </button>
      <h2>Working</h2>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((item) => {
          return (
            <>
              <StTodos borderColor={switchBorderColor(item.isDone)}>
                <div key={item.id}>
                  <Link to={`/details/${item.id}`}>Details</Link>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.contents}</p>
                  <p>{item.isDone.toString()}</p>

                  <button
                    onClick={() => {
                      const newTodos = todos.map((todo) => {
                        if (todo.id === item.id) {
                          return { ...todo, isDone: !todo.isDone };
                        } else {
                          return todo;
                        }
                      });
                      setTodos(newTodos);
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      const delTodos = todos.filter((todo) => {
                        return todo.id !== item.id;
                      });
                      setTodos(delTodos);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </StTodos>
            </>
          );
        })}
      <h2>Done</h2>
      {todos
        .filter((todo) => todo.isDone === true)
        .map((item) => {
          return (
            <>
              <StTodos borderColor={switchBorderColor(item.isDone)}>
                <div key={item.id}>
                  <Link to={`/details/${item.id}`}>Details</Link>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.contents}</p>
                  <p>{item.isDone.toString()}</p>

                  <button
                    onClick={() => {
                      const newTodos = todos.map((todo) => {
                        if (todo.id === item.id) {
                          return { ...todo, isDone: !todo.isDone };
                        } else {
                          return todo;
                        }
                      });
                      setTodos(newTodos);
                    }}
                  >
                    완료취소
                  </button>
                  <button
                    onClick={() => {
                      const delTodos = todos.filter((todo) => {
                        return todo.id !== item.id;
                      });
                      setTodos(delTodos);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </StTodos>
            </>
          );
        })}
    </div>
  );
}

export default Home;
