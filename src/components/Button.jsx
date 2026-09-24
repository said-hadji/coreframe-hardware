import clsx from "clsx";

const styles = {
  discover_new:
    "inline-flex px-10 py-3.5 rounded-full bg-purple hover:bg-white text-black/80 font-display font-medium cp",
  show_more: "text-sm text-white/60 hover:text-white/80 flex-align gap-2",
  notify_user:
    "bg-purple hover:bg-white py-2 rounded-full text-center text-black/80 font-display font-medium",
  shop_deals:
    "w-fit inline-flex px-5 py-2.5 bg-purple hover:bg-blue-50 text-black font-medium font-display rounded-full",
};

export default function Button({
  as: As = "a",
  children,
  variant,
  style,
  onClick,
  ...props
}) {
  return (
    <As
      style={style}
      onClick={onClick}
      className={clsx("cp", { relative: variant === "cart_button" }, styles[variant])}
      {...props}
    >
      {children}
    </As>
  );
}
