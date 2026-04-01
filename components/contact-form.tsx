"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

const inputClassName =
  "min-h-12 w-full border border-[0.5px] border-white/25 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-white";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValues(initialValues);
    setIsSubmitted(true);
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-white/70">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={inputClassName}
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-white/70">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className={inputClassName}
            value={values.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-white/70">
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            className={inputClassName}
            value={values.phone}
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-white/70">
          Project Type
          <input
            type="text"
            name="projectType"
            placeholder="New build, renovation, fit-out..."
            className={inputClassName}
            value={values.projectType}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-white/70">
        Message
        <textarea
          name="message"
          placeholder="Tell us about the project scope, location, and preferred timing."
          className={`${inputClassName} min-h-40 resize-y py-4`}
          value={values.message}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center border border-white bg-white px-6 text-sm text-stone-950 transition-colors hover:bg-transparent hover:text-white"
      >
        Submit Enquiry
      </button>
      {isSubmitted ? (
        <p className="border border-[0.5px] border-white/25 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/85" aria-live="polite">
          Thank you. Your enquiry has been received and a team member will be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
