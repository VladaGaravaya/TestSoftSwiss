import styles from "./Button.module.scss";

const Button = ({ type }) => {
  return (
    <button class={type === "outlined" ? styles.outlinedCta : styles.ctaButton}>
      Learn more
    </button>
  );
};

export default Button;
