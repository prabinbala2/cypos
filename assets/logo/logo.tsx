import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
