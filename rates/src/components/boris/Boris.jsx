import React, { useState } from "react";

export default function Boris(props) {
  const [isStartEdit, setStartEdit] = useState(false);
  const valueee = "123";
  const data = [{ name: "bbbb" }, { name: "yyyy" }];

  return (
    <div>
      {data.map((value) => (
        <div>
          <h2>{value.name}</h2>
          <input value={value.name} />
        </div>
      ))}

      {isStartEdit ? (
        <div>
          <input disabled={true} readOnly={true} value={valueee} />
          <button onClick={() => setStartEdit(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setStartEdit(true)}>Edit</button>
      )}
    </div>
  );
}
