import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          ✦ React Router Navigation
        </p>

        <h1 className="text-4xl font-black leading-tight sm:text-6xl">
          Navigate freely.
          <span className="block text-cyan-400">No page reloads.</span>
        </h1>

        <p className="mt-6 max-w-xl leading-7 text-slate-400">
          Explore a modern React website with smooth navigation between
          Home, About, and Contact using React Router.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/about"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discover More →
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
        <div className="mb-6 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <p className="text-sm text-slate-400">YOUR WEBSITE</p>
        <h2 className="mt-3 text-3xl font-bold">One App. Three Pages.</h2>

        <div className="mt-8 space-y-3">
          {["Home — /", "About — /about", "Contact — /contact"].map(
            (item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-950/70 p-4 text-slate-200"
              >
                <span className="mr-3 text-cyan-400">↗</span>
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}