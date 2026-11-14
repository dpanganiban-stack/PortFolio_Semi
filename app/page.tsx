import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section
      className="relative left-1/2 -ml-[50vw] -mt-8 -mb-8 flex min-h-[calc(100vh-4rem)] w-screen items-center justify-center overflow-hidden bg-slate-950 bg-cover bg-center px-6 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=85')",
      }}
    >
      <div className="mx-auto max-w-5xl text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hello, I&apos;m{" "}
          <span className="text-blue-500">Darryl Panganiban</span>
        </h1>
        <p className="mt-3 text-lg sm:text-xl">
          Mobile Gaming Skills <span aria-hidden="true">•</span> Digital Drawing{" "}
          <span aria-hidden="true">•</span> Coding
        </p>
        <Link
          href="/about"
          className={buttonVariants({
            size: "lg",
            className:
              "mt-8 h-12 rounded-md bg-blue-600 px-5 text-lg text-white hover:bg-blue-700",
          })}
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
