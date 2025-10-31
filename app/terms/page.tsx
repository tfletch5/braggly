import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Braggly",
  description: "Braggly's terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mb-12">
            Last Updated: October 27, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                By accessing or using Braggly's website and services, you agree
                to be bound by these Terms of Service ("Terms"). If you do not
                agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                2. Services Description
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Braggly provides AI-powered digital marketing and automation
                services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Social media automation</li>
                <li>AI content generation</li>
                <li>Email marketing automation</li>
                <li>SEO optimization</li>
                <li>Chatbot development</li>
                {/* <li>Ad campaign automation</li> */}
                <li>Business process automation</li>
              </ul>
              <p className="text-[var(--text-secondary)] mb-4">
                Specific services will be outlined in your service agreement or
                proposal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                3. Use of Services
              </h2>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Eligibility
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                You must be at least 18 years old and have the authority to
                enter into these Terms on behalf of yourself or your business.
              </p>

              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Acceptable Use
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                You agree to use our services only for lawful purposes. You will
                not:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute harmful, offensive, or illegal content</li>
                <li>Attempt to circumvent security measures</li>
                <li>
                  Use our services to spam or engage in deceptive practices
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                4. Client Responsibilities
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Grant necessary access to platforms and tools</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>
                  Comply with platform policies (e.g., Google, Facebook,
                  LinkedIn)
                </li>
                <li>Pay invoices according to agreed terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                5. Payment Terms
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Payment terms will be specified in your service agreement.
                Generally:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Services are billed monthly in advance</li>
                <li>Payment is due within 7 days of invoice date</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are handled on a case-by-case basis</li>
                <li>Cancellation requires 30 days written notice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                6. Intellectual Property
              </h2>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Our IP
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Braggly retains all rights to our methodologies, processes,
                tools, and proprietary systems. You may not copy, modify, or
                reverse-engineer our systems without permission.
              </p>

              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Client IP
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                You retain ownership of your brand, trademarks, and business
                information. Content created for you (copy, graphics, campaigns)
                becomes your property upon payment in full, subject to any
                third-party licenses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                7. Confidentiality
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Both parties agree to keep confidential information private. We
                will not disclose your business strategies, data, or proprietary
                information to third parties without your consent, except as
                required by law or necessary to provide services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                8. Service Level and Warranties
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We will provide services with professional care and skill.
                However:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>We do not guarantee specific results or outcomes</li>
                <li>
                  Marketing results depend on many factors outside our control
                </li>
                <li>
                  We cannot control third-party platform changes (e.g.,
                  algorithm updates)
                </li>
                <li>
                  Services are provided "as is" without warranties beyond those
                  stated
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>
                  Braggly is not liable for indirect, incidental, or
                  consequential damages
                </li>
                <li>
                  Our total liability is limited to the fees paid in the 12
                  months preceding the claim
                </li>
                <li>
                  We are not responsible for third-party platform policies,
                  suspensions, or changes
                </li>
                <li>
                  You assume all risk for decisions made based on our
                  recommendations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                10. Termination
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Either party may terminate services with 30 days written notice.
                We may terminate immediately if you:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Breach these Terms</li>
                <li>Fail to pay invoices</li>
                <li>Engage in unethical or illegal practices</li>
              </ul>
              <p className="text-[var(--text-secondary)] mb-4">
                Upon termination, you must pay for services rendered. We will
                assist with transition for 30 days (if fees are current).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                11. Indemnification
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                You agree to indemnify Braggly against claims arising from your
                use of services, content you provide, or violation of these
                Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Any disputes will first be addressed through good-faith
                negotiation. If unresolved, disputes will be subject to binding
                arbitration or mediation before pursuing litigation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We may update these Terms periodically. Material changes will be
                communicated via email or website notice. Continued use of
                services after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                14. Governing Law
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                These Terms are governed by the laws of the United States,
                without regard to conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                15. Contact Information
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                For questions about these Terms, contact us:
              </p>
              <ul className="list-none text-[var(--text-secondary)] space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@braggly.com"
                    className="text-[var(--primary)] hover:underline"
                  >
                    support@braggly.com
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.braggly.com"
                    className="text-[var(--primary)] hover:underline"
                  >
                    https://www.braggly.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
