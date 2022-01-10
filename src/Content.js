import "./App.css";
import React, { useState, useEffect } from "react";

function Content(props) {
  const { content } = props;
  return (
    <div className="flex-wrapper">
      <div className="flex-item">
        <div>
          <img
            className="img-head"
            src={content.photos[0]}
            alt="blank"
            width="190px"
            height="100%"
          />
        </div>
        <div className="flex-content">
          <h2 className="font500"> {content.title} </h2>
          <p className="font400 f-14 text" style={{ color: "#AEAEAE" }}>
            {content.description}
          </p>
          <div>
            <p className="readmore font400 f-14 mgt-10 ">
              <a href={content.url}>อ่านต่อ</a>
            </p>
          </div>
          <p className="font400 f-12 collect" style={{ color: "#AEAEAE" }}>
            {content.tags.join(" ")}
          </p>
          <div className="flex-item-image">
            <img
              className="flex-img-content"
              src={content.photos[1]}
              alt="blank"
              width="auto"
              height="100px"
            />
            <img
              className="flex-img-content"
              src={content.photos[2]}
              alt="blank"
              width="auto"
              height="100px"
            />
            <img
              className="flex-img-content"
              src={content.photos[3]}
              alt="blank"
              width="auto"
              height="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
