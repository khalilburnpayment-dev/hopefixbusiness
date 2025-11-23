import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormPopup({ isOpen, onClose }: ContactFormPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
            <m.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 280,
                damping: 35,
                mass: 0.9
              }}
              className="w-full max-w-sm rounded-2xl bg-white shadow-2xl pointer-events-auto overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header with dark blue */}
              <div className="relative bg-blue-900 px-5 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="absolute right-3 top-3 sm:right-4 sm:top-4 p-1 rounded-full hover:bg-white/20 transition-colors text-white"
                  aria-label="Close form"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-xl sm:text-2xl font-bold text-white pr-8">Get Started Today</h2>
                <p className="mt-1 text-xs sm:text-sm text-white/90">Let's help you set up and grow your business.</p>
              </div>

              {/* Content - scrollable on mobile */}
              <div className="px-5 py-4 sm:px-6 sm:py-5 overflow-y-auto flex-1">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Reach our team for business setup, compliance, tax and IP support.
                  We'll get back within one business day.
                </p>

                {/* Call CTA with WhatsApp Button */}
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 rounded-lg bg-blue-50 border border-blue-200 p-3 sm:p-3">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Call us directly</p>
                      <p className="mt-1 text-base sm:text-lg font-bold text-blue-900">+971 55 649 6873</p>
                    </div>
                    <a
                      href="https://wa.me/+971556496873"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-full rounded-lg bg-green-500 px-3 py-3 sm:px-4 hover:bg-green-600 transition-colors flex-shrink-0"
                      aria-label="Contact us on WhatsApp"
                    >
                      <span className="text-xs sm:text-sm font-medium text-white">WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Form */}
                <div className="mt-4 sm:mt-6">
                  <ContactForm />
                </div>
              </div>
            </m.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
