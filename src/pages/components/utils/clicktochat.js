import React, { ReactElement } from "react";

const URL = "https://wa.me";

export default function ClickToChat({ numero, message, children, onClick }) {
  let url = `${URL}/${numero}`;

  if (message) {
    url += `/?text=${encodeURI(message)}`;
  }

  return (
    <a
      aria-label="Chat on WhatsApp"
      className="wspchat "
      onClick={(e) => {
        window.open(url);

        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </a>
  );
}
