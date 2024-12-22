import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <form className="space-y-4 mb-8">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </form>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Other Ways to Reach Me</h2>
        <p>
          <strong>Email:</strong>{" "}
          <Link
            href="mailto:hacker@example.com"
            className="text-green-400 hover:underline"
          >
            hacker@example.com
          </Link>
        </p>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            +1 (234) 567-890
          </Link>
        </p>
        <p>
          <strong>Telegram:</strong>{" "}
          <Link
            href="https://t.me/hackername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            @hackername
          </Link>
        </p>
        <p>
          <strong>Viber:</strong>{" "}
          <Link
            href="viber://chat?number=+1234567890"
            className="text-green-400 hover:underline"
          >
            +1 (234) 567-890
          </Link>
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Send Coffee</h2>
        <Button>Buy Me a Coffee</Button>
      </div>
    </div>
  );
}
