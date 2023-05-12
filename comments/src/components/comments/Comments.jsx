import styles from "./comments.module.scss";
import React, { useState } from "react";
import uuid from "react-uuid";
import comments from "../../comments.json";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  function saveComment() {
    setCommentList([...commentList, { id: uuid(), title: comment }]);
    setComment("");
  }

  function deleteComment(id) {
    let newComment = [...commentList].filter((item) => item.id !== id);
    setCommentList(newComment);
  }

  return (
    <div className={styles.container}>
      <h2>Комментарии</h2>
      <div className={styles.comments}>
        {commentList.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <button
              className={styles.button}
              onClick={() => deleteComment(item.id)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      <textarea
        rows="5"
        cols="20"
        placeholder="Напишите что-нибудь..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div>
        <button className={styles.button} onClick={saveComment}>
          Отправить
        </button>
      </div>
    </div>
  );
}
