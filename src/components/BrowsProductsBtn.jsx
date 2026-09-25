import clsx from "clsx";
import { Link } from "react-router";

export default function BrowsProductsBtn({ children, className }) {
  return <Link className={clsx(className)} to="/products">{children}</Link>;
}
