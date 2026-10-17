export default function About() {
  const features = [
    {
      number: "01",
      title: "Fast Navigation",
      description: "Switch between pages without a full browser reload.",
    },
    {
      number: "02",
      title: "Reusable Components",
      description: "Build clean and maintainable React applications.",
    },
    {
      number: "03",
      title: "Simple Routing",
      description: "Connect URLs to page components using Route.",
    },
  ];

  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        About Our Project
      </p>

      <h1 className="mt-4 text-4xl font-black sm:text-5xl">
        Simple routing. <span className="text-cyan-400">Better UX.</span>
      </h1>

      <p className="mt-5 max-w-2xl leading-7 text-slate-400">
        This project demonstrates client-side routing with React Router.
        Each route renders a different component while keeping the application
        experience smooth and responsive.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
          >
            <span className="text-3xl font-black text-cyan-400">
              {feature.number}
            </span>
            <h2 className="mt-5 text-xl font-bold">{feature.title}</h2>
            <p className="mt-3 leading-6 text-slate-400">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}