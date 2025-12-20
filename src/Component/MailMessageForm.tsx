import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_rvl5vhy",
        "template_0sa6fl7",
        form.current,
        "mx34e0NWNcJxnc14l"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log("Email error:", error.text);
          alert("Failed to send the message. Try again later.");
        }
      );
  };
  return (
    <Wrapper>
      <form ref={form} onSubmit={sendEmail} className="form">
        <h3>
          Contact{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Me
          </span>
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-6" />

        <p>Have a project or question? Let’s talk.</p>

        <div className="row">
          <input
            type="text"
            name="full_name"
            placeholder="Enter your Full name..."
            required
          />
          <input
            type="number"
            name="phone_number"
            placeholder="Enter your Phone Number...."
            required
          />
        </div>

        <input
          type="email"
          name="user_email"
          placeholder="Enter your Email Address..."
          required
        />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your message..." required />

        <button type="submit">Send Message</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .form {
    width: 100%;
    max-width: 480px;
    padding: 32px;
    border-radius: 22px;
    box-sizing: border-box;

    /* Clean glass card */

    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
  }

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1px;
    background: black;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p {
    font-size: 15px;
    color: #6b7280;
    margin-bottom: 28px;
    line-height: 1.6;
  }

  .row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  input,
  textarea {
    width: 100%;
    padding: 14px 16px;
    margin-bottom: 16px;
    border-radius: 14px;
    box-sizing: border-box;

    border: 1px solid #e5e7eb;
    background: #ffffff;
    font-size: 14px;
    color: #111827;

    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  textarea {
    min-height: 120px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
  }

  @media (max-width: 640px) {
    .form {
      padding: 20px;
    }

    h3 {
      font-size: 22px;
    }

    .row {
      flex-direction: column;
      gap: 10px;
    }

    textarea {
      min-height: 100px;
    }
  }

  button {
    width: 100%;
    padding: 15px;
    margin-top: 10px;
    border-radius: 16px;
    border: none;

    /* Correct gradient button */
    background: linear-gradient(to right, #7c3aed, #4f46e5);
    color: #ffffff;

    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(79, 70, 229, 0.35);
  }

  button:active {
    transform: translateY(0);
  }
  @media (max-width: 640px) {
    .form {
      padding: 20px;

      /* REMOVE glass / card look on mobile */
      background: transparent;
      border: none;
      box-shadow: none;
    }

    h3 {
      font-size: 22px;
    }

    .row {
      flex-direction: column;
      gap: 10px;
    }

    textarea {
      min-height: 100px;
    }
  }
  @media (max-width: 640px) {
    input,
    textarea {
      background: rgba(255, 255, 255, 0.9);
    }
  }
`;

export default Form;
