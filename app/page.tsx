import Link from "next/link";
import { ArrowRight, Megaphone, MousePointerClick, MessagesSquare, RefreshCcw, Globe, Workflow, Smartphone, ChartNoAxesCombined } from "lucide-react";

const growthSteps = [
  { title: "Attract", icon: Megaphone, description: "Bring the right customers to your business through digital marketing, social media, SEO, and content." },
  { title: "Capture", icon: MousePointerClick, description: "Convert interest into inquiries with purposeful websites, landing pages, and contact experiences." },
  { title: "Nurture", icon: MessagesSquare, description: "Keep customer conversations moving with email and SMS campaigns, CRM workflows, and smart follow-up." },
  { title: "Recover", icon: RefreshCcw, description: "Reconnect with missed inquiries, unconverted estimates, and customers ready to come back." },
];

const capabilities = [
  { title: "Digital Marketing & SEO", icon: ChartNoAxesCombined, description: "Build visibility and attract customers who need what you offer." },
  { title: "Social Media Management", icon: Megaphone, description: "Stay visible, build trust, and engage your audience consistently." },
  { title: "Websites & Landing Pages", icon: Globe, description: "Make it easy for interested customers to take the next step." },
  { title: "Automation & AI Systems", icon: Workflow, description: "Respond faster, follow up consistently, and reduce repetitive work." },
  { title: "Custom Software (Web & Mobile)", icon: Smartphone, description: "Build or connect the tools your business needs to grow." },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#061C36] via-[#092E55] to-[#0F52BA] py-20 text-white lg:py-28">
        <div className="container-custom mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6AC5FF]">Braggly · Your Digital Growth Partner</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Turn Your Marketing Into a Growth System.</h1>
          <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">Attract more customers, capture more inquiries, nurture relationships, and recover missed business. Braggly combines digital marketing, automation, and custom software to build a connected growth system for your business.</p>
          <p className="mb-9 text-xl font-semibold text-[#6AC5FF]">We give you a reason to brag.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#061C36] hover:bg-slate-100">Book a Growth Consultation <ArrowRight className="h-5 w-5" /></Link>
            <Link href="/services" className="rounded-lg border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">Explore Our Solutions</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#061C36] sm:text-4xl">Four Steps to Better Customer Growth</h2>
            <p className="text-lg text-slate-600">Getting noticed is only the beginning. We help you connect the stages that turn customer interest into lasting relationships.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {growthSteps.map(({title, icon: Icon, description}) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#0F52BA]"><Icon className="h-6 w-6" /></div>
                <h3 className="mb-3 text-xl font-bold text-[#061C36]">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#061C36] sm:text-4xl">The Right Tools. One Growth Partner.</h2>
            <p className="text-lg text-slate-600">Your business doesn't need more disconnected tools. It needs the right combination of strategy, marketing, technology, and execution.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({title, icon: Icon, description}) => (
              <article key={title} className="rounded-xl bg-white p-7 shadow-sm">
                <Icon className="mb-4 h-8 w-8 text-[#0F52BA]" />
                <h3 className="mb-3 text-lg font-semibold text-[#061C36]">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/services" className="font-semibold text-[#0F52BA] hover:underline">Explore our solutions →</Link></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#0F52BA]">A practical way to begin</p>
            <h2 className="mb-4 text-3xl font-bold text-[#061C36]">Stop Losing Customers Who Already Found You.</h2>
            <p className="mb-4 text-lg text-slate-600">Already getting website inquiries but struggling to follow up? The <strong>$500 Lead Capture & Follow-Up Sprint</strong> is a focused starting engagement to improve how inquiries are collected and answered.</p>
            <p className="text-sm text-slate-500">We'll confirm the deliverables and timeline before work begins. More complex systems are scoped separately.</p>
          </div>
          <div className="rounded-2xl bg-[#061C36] p-10 text-white">
            <p className="mb-3 text-4xl font-bold">$500</p>
            <h3 className="mb-4 text-2xl font-semibold">Lead Capture & Follow-Up Sprint</h3>
            <p className="mb-7 text-white/80">One defined improvement to your inquiry capture and initial follow-up process.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#39A7F6] px-5 py-3 font-semibold text-[#061C36] hover:bg-[#6AC5FF]">Discuss the Sprint <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#061C36] py-16 text-white">
        <div className="container-custom mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready for a Reason to Brag?</h2>
          <p className="mb-8 text-lg text-white/80">Tell us where customers fall through the cracks. We'll help you find a practical path forward.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#061C36] hover:bg-slate-100">Let's Talk Growth <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
