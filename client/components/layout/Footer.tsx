import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xl font-bold">
            Seminant Business Setup & Auditing
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            End-to-end UAE setup and compliance. Onshore & free zones, visas,
            VAT/CT, accounting & audit, trademarks, and real-estate ops—with
            verified sources.
          </p>

          <div className="mt-4">
            <a
              href="https://wa.me/+971556496873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Message on WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <div>
              <div className="mb-2 font-semibold">Explore</div>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" to="/setup">
                    Business Setup
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="inline-block rounded px-1 py-0.5 hover:bg-accent hover:underline" to="/services">
                    Automation Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/why-middle-east">
                    Why Middle East
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold">Compliance & Tax</div>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" to="/tax-legal">
                    VAT & Corporate Tax
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/compliance">
                    Work Permits (MOHRE)
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/compliance">
                    Ejari & DLD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2025 Seminant Business Setup & Auditing. All rights reserved to Seminant Solutions.
      </div>
    </footer>
  );
}
