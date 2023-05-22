import styles from "./comments.module.scss";
import React, { useState } from "react";
import uuid from "react-uuid";
import comments from "../../comments.json";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  let newComment = { id: uuid(), title: comment };
  function addComment() {
    setCommentList([newComment, ...commentList]);
    setComment("");
  }

  function deleteComment(id) {
    let deleteComment = [...commentList].filter((item) => item.id !== id);
    setCommentList(deleteComment);
  }

  return (
    <div>
      <h2>Комментарии</h2>
      <div className={styles.comments_block}>
        {commentList.map((item) => (
          <div key={item.id} className={styles.comments}>
            <div
              className={
                item.id === newComment.id ? styles.commentnew : styles.item
              }
            >
              {item.title}
            </div>
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
        className={styles.textarea}
        placeholder="Напишите что-нибудь..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div>
        <button className={styles.button_save} onClick={addComment}>
          Отправить
        </button>
      </div>
    </div>
  );
}
