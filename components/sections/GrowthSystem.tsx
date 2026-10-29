const stages = [
  { title: "Attract", description: "Reach the right customers through digital marketing, content, social media, and search." },
  { title: "Capture", description: "Turn interest into inquiries, bookings, and sales with effective websites, landing pages, and conversion flows." },
  { title: "Nurture", description: "Build relationships and follow up consistently with email, SMS, CRM workflows, and intelligent automation." },
  { title: "Recover", description: "Reconnect with missed inquiries, abandoned opportunities, and customers who are ready to return." },
];

export default function GrowthSystem() {
  return (
    <section className="bg-white py-20" aria-labelledby="growth-system-title">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">A connected customer growth system</p>
          <h2 id="growth-system-title" className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">From first impression to repeat business.</h2>
          <p className="text-lg text-slate-600">We connect strategy, marketing, automation, and custom web and mobile software so opportunities do not fall through the cracks.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <article key={stage.title} className="rounded-2xl border border-blue-100 bg-slate-50 p-7 shadow-sm">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">{index + 1}</span>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{stage.title}</h3>
              <p className="leading-relaxed text-slate-600">{stage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
