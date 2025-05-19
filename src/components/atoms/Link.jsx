import { Link } from "react-router-dom";

export default function LinkText({
  to = "/",
  children = "Link",
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`text-sm text-primary hover:underline font-medium text-textLink-light max-sm:text-xs${className}`}
    >
      {children}
    </Link>
  );
}
