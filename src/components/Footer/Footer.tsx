import "./Footer.scss"; // ← ファイル名・大文字小文字も一致させる

const Footer = () => {
  return (
    <>
      <p className="footer">Double-click to edit a todo</p>
      <p className="footer">Created by the TodoMVC Team</p>
      <p className="footer">Part of TodoMVC</p>
    </>
  );
};

export default Footer;
