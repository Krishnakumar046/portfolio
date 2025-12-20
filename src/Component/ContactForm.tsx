import { Locate, Mail, Phone } from "lucide-react";
import Lottie from "lottie-react";
import Form from "./MailMessageForm";
import { MailMan } from "./Lottiefiles/MailLottieJson";

const ContactForm = () => {
  const contactMethods = [
    {
      label: "Email",
      icon: Mail,
      text: "krishnakrish6046@gmail.com",
    },
    {
      label: "Phone",
      icon: Phone,
      text: "+91 9538976046",
    },
    {
      label: "Location",
      icon: Locate,
      text: "Chennai, Tamil Nadu, India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Get In{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>

              <div className="mt-4 mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600" />

              <p className="max-w-xl text-gray-600 font-medium text-lg leading-relaxed">
                Feel free to reach out. Whether you have a project idea, a
                question, or just want to connect — I’ll get back to you soon.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 border border-gray-100 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <method.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{method.label}</p>
                    <p className="text-base font-medium text-gray-800">
                      {method.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center lg:justify-start">
            {/* DESKTOP LOTTIE (RIGHT SIDE) */}
            <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[360px] opacity-90 pointer-events-none">
              <Lottie animationData={MailMan} loop />
            </div>

            {/* FORM CARD */}
            <div className="relative w-full max-w-lg rounded-2xl  p-8 shadow-xl border border-gray-100 overflow-hidden">
              {/* MOBILE BACKGROUND LOTTIE */}
              <div className=" absolute inset-0 top-30 lg:hidden  pointer-events-none">
                <Lottie
                  animationData={MailMan}
                  loop
                  style={{ filter: "blur(1.5px)" }}
                  className="scale-150"
                />
              </div>

              {/* Soft overlay to keep text readable */}
              <div className="absolute  lg:hidden" />

              {/* FORM CONTENT */}
              <div className="relative z-10">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
