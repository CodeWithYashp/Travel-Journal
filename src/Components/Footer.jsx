import React from "react";

export default function Footer() {
  return (
    <footer>
      <small>&copy; {new Date().getFullYear()} Yash Pandey</small>
      <ul className="socials--list">
        <li>
          <a href="https://github.com/CodeWithYashp" target="_blank">
            <img src="/social-github.png" className="socials" alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yash-sharma-22200b201/"
            target="_blank"
          >
            <img src="/social-linkedin.png" className="socials" alt="" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/131_yash" target="_blank">
            <img src="/social-twitter.png" className="socials" alt="" />
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/CodeWithYashp/" target="_blank">
            <img src="/leetCode.png" className="socials" alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
