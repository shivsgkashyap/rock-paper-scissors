import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <p>Copyright © {new Date().getFullYear()} Shiv Kashyap</p>
      <a href="https://github.com/shivsgkashyap" target="_blank">
        <img src="/images/github.png" alt="Github Logo" />
      </a>
    </footer>
  );
}
