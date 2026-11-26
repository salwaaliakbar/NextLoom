import Image from "next/image";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <a href="#top" className="brand" aria-label="NextLoom home">
      <Image src="/logo.svg" alt="" width={size} height={size} priority />
      <span>Next<strong>Loom</strong></span>
    </a>
  );
}
