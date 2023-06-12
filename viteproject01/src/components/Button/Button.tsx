import styles from "./Button.module.css";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClike: () => void;
}
const Button = ({ children, onClike, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join("  ")}
      onClick={onClike}
    >
      {children}{" "}
    </button>
  );
};
