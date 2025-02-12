import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-border border-b px-8 py-4">
      <div className="">
        <Link className="font-bold text-lg" href="/">
          FastThings
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/"
          className={buttonVariants({ variant: "link", size: "sm" })}
        >
          Features
        </Link>
        <Link
          href="/"
          className={buttonVariants({ variant: "link", size: "sm" })}
        >
          LogIn
        </Link>
        <Link href="/" className={buttonVariants({ size: "sm" })}>
          SignUp
        </Link>
      </div>
    </header>
  );
}
