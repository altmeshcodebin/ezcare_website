import { useEffect } from "react";

export default function PageScrollTop() {
  const { pathname } = '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}