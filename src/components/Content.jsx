import React from "react";

const Content = ({ title, content, heading, values }) => (
  <div className="container my-5">
    <h1 className="mb-5 fw-bold">{title}</h1>
    <p className="fs-5">{content}</p>

    {heading && (
      <div className="my-5">
        <h2 className="mb-5 fw-bold">{heading}</h2>
        <ul className="fs-5" >
          {values.map((value, index) => (
            <li key={index}>
              <strong>{value.title}:</strong> {value.description}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default Content;
