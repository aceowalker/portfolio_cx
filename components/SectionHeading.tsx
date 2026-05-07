type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-slate-200/82 sm:text-lg">{body}</p> : null}
    </div>
  );
}
