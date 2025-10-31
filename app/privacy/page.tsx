import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Braggly",
  description: "Braggly's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mb-12">
            Last Updated: October 27, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                1. Introduction
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Braggly ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Personal Information
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Fill out a contact form or consultation request</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with our services</li>
                <li>Communicate with us via email or other channels</li>
              </ul>
              <p className="text-[var(--text-secondary)] mb-4">
                This information may include: name, email address, phone number,
                company name, website URL, and any other information you choose
                to provide.
              </p>

              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                We may automatically collect certain information about your
                device and how you interact with our website, including:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Deliver our services and fulfill contractual obligations
                </li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  perform services on our behalf (e.g., email service providers,
                  analytics tools)
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any
                  merger, sale of company assets, or acquisition
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly
                  authorize us to share your information
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                5. Data Security
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] mb-4 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data
                  in a portable format
                </li>
              </ul>
              <p className="text-[var(--text-secondary)] mb-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:support@braggly.com"
                  className="text-[var(--primary)] hover:underline"
                >
                  support@braggly.com
                </a>
                .
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We use cookies and similar tracking technologies to collect and
                track information about your browsing activities. You can
                control cookies through your browser settings. Note that
                disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information in accordance with this
                Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                12. Contact Us
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
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
