import css from "./Header.module.css";

export const Header = () => {
  return (
    <nav>
      <svg className={css.svg}>
        <use href="../../public/svg/logo.svg#logo"></use>
      </svg>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Documentation</li>
      </ul>
    </nav>
  );
};
