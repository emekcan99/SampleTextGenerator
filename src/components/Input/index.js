import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchText } from "../../redux/textSlice/textSlice";
import "./styles.css";
function Input() {
  const [html, setHtml] = useState("text");

  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    let url = `https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${html}`;

    dispatch(fetchText(url));
  }, [dispatch, number, html]);

  console.log(html);
  console.log(number);

  return (
    <div>
      <div>
        <h1 className="heading">React sample text generator app</h1>
      </div>
    <hr className="hr"></hr>
      <div className="Input">
        <label htmlFor="paragraph" className="label">
          paragraph
        </label>
        <input
          type="number"
          className="paragraph"
          min={1}
          onChange={(e) => setNumber(e.target.value)}
          placeholder={number}
        ></input>
        <label htmlFor="include html" className="label">
          {" "}
          include html{" "}
        </label>
        <select
          className="include html"
          onChange={(e) => setHtml(e.target.value)}
        >
          <option>text</option>
          <option>html</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
