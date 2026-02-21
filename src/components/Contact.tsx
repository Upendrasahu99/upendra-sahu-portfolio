import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <section id="contact">
      <FadeIn>
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-base-content/55 text-sm md:text-base leading-relaxed mt-4 max-w-md">
          I&apos;m currently open to new opportunities and collaborations. Whether you have a project
          in mind or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:upendra@example.com"
          className="btn btn-primary btn-sm mt-6 rounded-full px-7 font-medium"
        >
          Send an email →
        </a>
      </FadeIn>
    </section>
  );
}
