import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-6 rounded-md border bg-green-50 p-4 text-sm text-green-800">
        Thanks—your message has been sent.
      </div>
    );
  }

  return (
    <form
      className="grid gap-3 sm:gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">Email</label>
        <Input
          type="email"
          name="email"
          required
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">Phone Number</label>
        <Input name="phone" required placeholder="+971 55 649 6873" />
      </div>
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">Message</label>
        <Textarea
          name="message"
          required
          placeholder="Tell us what you need help with"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full text-xs sm:text-sm">
        Send message
      </Button>
    </form>
  );
}
