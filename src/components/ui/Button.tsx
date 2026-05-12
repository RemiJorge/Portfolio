import type { ReactNode, ComponentProps } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./ui.module.css";

function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> {
  const out = { ...obj };
  for (const k of keys) {
    delete out[k];
  }
  return out;
}

type Variant = "primary" | "ghost";

type Base = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type InternalLink = Base & {
  href: string;
  external?: false;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ExternalLink = Base & {
  href: string;
  external: true;
} & Omit<ComponentProps<"a">, "href" | "className" | "children" | "target" | "rel">;

type NativeButton = Base & {
  href?: undefined;
  external?: undefined;
} & ComponentProps<"button">;

export type ButtonProps = InternalLink | ExternalLink | NativeButton;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;
  const v =
    variant === "primary" ? styles.buttonPrimary : styles.buttonGhost;

  if ("href" in props && props.href) {
    if (props.external) {
      const p = props as ExternalLink;
      const { href } = p;
      const anchorProps = omit(p, [
        "href",
        "external",
        "variant",
        "className",
        "children",
      ]);
      return (
        <a
          href={href}
          className={clsx(v, className)}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {children}
        </a>
      );
    }
    const p = props as InternalLink;
    const { href } = p;
    const linkProps = omit(p, [
      "href",
      "external",
      "variant",
      "className",
      "children",
    ]);
    return (
      <Link href={href} className={clsx(v, className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const p = props as NativeButton;
  const { type = "button", ...btnProps } = omit(p, [
    "variant",
    "className",
    "children",
  ]);
  return (
    <button type={type} className={clsx(v, className)} {...btnProps}>
      {children}
    </button>
  );
}
