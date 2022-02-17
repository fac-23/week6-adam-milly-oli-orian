import Link from "next/link";

export default function Links({ url, text }) {
  return (
    <Link href={url}>
      <a>{text}</a>
    </Link>
  );
}
