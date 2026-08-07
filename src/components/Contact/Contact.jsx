import { useState } from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import Reveal from "../common/Reveal";
import MotionCard from "../common/MotionCard";
import GradientButton from "../common/GradientButton";
import { personal } from "../../data/portfolioData";
import "./Contact.css";

const infoItems = (p) => [
  { icon: <FiMail />, label: "Email", value: p.email, href: `mailto:${p.email}` },
  { icon: <FiMapPin />, label: "Location", value: p.location, href: "#" },
  { icon: <FiLinkedin />, label: "LinkedIn", value: "priyadharshini-t", href: p.linkedin },
  { icon: <FiGithub />, label: "GitHub", value: "priyadharshinit291", href: p.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus(null), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="section-sub">
            Have a project in mind or an opportunity to share? My inbox is open.
          </p>
        </Reveal>

        <div className="contact__grid row g-4">
          <div className="col-12 col-lg-5">
            <Reveal direction="left" className="h-100">
              <MotionCard className="glass-card contact__info h-100">
              {infoItems(personal).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact__info-row"
                >
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              ))}
              </MotionCard>
            </Reveal>
          </div>

          <div className="col-12 col-lg-7">
            <Reveal direction="right" delay={0.1} className="h-100">
              <MotionCard className="glass-card contact__form-wrap h-100">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row row g-3">
                  <div className="contact__field col-12 col-sm-6">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      className="form-control"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="contact__field col-12 col-sm-6">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    className="form-control"
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="What's this about?"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <GradientButton type="submit" variant="primary" icon={<FiSend />}>
                  Send Message
                </GradientButton>
                {status === "sent" && <p className="contact__status">Thanks! Your message has been noted.</p>}
              </form>
              </MotionCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
