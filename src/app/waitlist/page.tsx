import IntakeForm from "@/components/IntakeForm";

export const metadata = {
  title: "Join the waitlist — Greg Baehr",
  description:
    "Request access to Greg Baehr's Fractional CAIO waitlist. Intake form for operating companies.",
};

export default function Waitlist() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <p className="eyebrow mb-8">
            <span className="num not-italic mr-2">—</span> Waitlist
          </p>
          <h1 className="serif text-[44px] md:text-[80px] leading-[0.98] tracking-tight max-w-[16ch]">
            Request <span className="italic">access</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed muted">
            The roster is small by design. Tell me about your company and what
            you&rsquo;re trying to solve. I review every intake personally and
            reply within 72 hours if there&rsquo;s a fit.
          </p>
        </div>
      </section>

      <div className="hairline" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <IntakeForm />
        </div>
      </section>
    </>
  );
}
