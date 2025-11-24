import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form
      className="grid gap-3 sm:gap-4"
      action="https://formspree.io/f/xqaybbkg"
      method="POST"
    >
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">
          Name
        </label>
        <Input name="name" required placeholder="Your full name" />
      </div>
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">
          Email
        </label>
        <Input
          type="email"
          name="email"
          required
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">
          Phone Number
        </label>
        <Input
          type="tel"
          name="phone"
          required
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs sm:text-sm font-medium">
          Message
        </label>
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
