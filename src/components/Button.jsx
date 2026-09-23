import clsx from "clsx";

const styles = {
  discover_new:
    "inline-flex px-10 py-3.5 rounded-2xl bg-blue-200 hover:bg-blue-50 text-black/80 font-display font-medium cp",
  show_more: "text-sm text-white/60 hover:text-white/80 flex-align gap-2",
  notify_user:
    "bg-blue-300 hover:bg-blue-100 py-2 rounded-full text-center text-black/80 font-display font-medium",
};

export default function Button({ as: As = "a", children, type, href = "" }) {
  return (
    <As
      className={clsx("cp", { relative: type === "cart_button" }, styles[type])}
      href={href}
    >
      {children}
    </As>
  );
}
