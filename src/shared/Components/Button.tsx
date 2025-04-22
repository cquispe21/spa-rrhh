interface ButtonIPropsItems {
  text?: string;
  style?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
export default function Button({
  style,
  icon,
  onClick,
  disabled,
  text,
  type,
}: ButtonIPropsItems) {
  return (
      <button
        className={`bg-[#374151] hover:bg-[#313a48] text-sm duration-400 transition-all font-medium   text-[#FFFFFF]  py-2 px-2 rounded-md ${style}`}
        type={type || "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
        {text}
      </button>
  );
}
