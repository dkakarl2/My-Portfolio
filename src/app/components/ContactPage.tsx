import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";
import { useState } from "react";
import imgImage54 from "figma:asset/ba81c99bc9fa2a7a974274dd5278fe652f58f7ca.png"; // Doodle character

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeelqnrz";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _replyto: formState.email
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="overflow-x-hidden">
        <Navigation />

        <main className="pt-32 pb-20 px-8 lg:px-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Column: Text & Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-['Caveat_Brush'] text-6xl lg:text-7xl mb-6 text-black">
                  Let's Connect!
                </h1>

                <p className="font-['Inter'] text-xl text-[#484848] leading-relaxed mb-12">
                  I'm currently looking for new opportunities. Whether you have a question,
                  a project proposal, or just want to say hi, I'll try my best to get back to you!
                </p>




              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#f9f9f9] p-8 lg:p-12 rounded-[24px] border border-[#eee]"
              >
                {isSubmitted ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-[#dfffcc] rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-['Caveat_Brush'] text-3xl mb-4">Message Sent!</h3>
                    <p className="font-['Inter'] text-[#484848] max-w-sm">
                      Thanks for reaching out! I've received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 font-['Caveat_Brush'] text-xl text-[#00A3E0] hover:text-black transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block font-['Caveat_Brush'] text-2xl text-black mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-[#D0D0D0] focus:border-black py-3 outline-none font-['Inter'] text-lg transition-colors placeholder:text-[#999]"
                        placeholder="What's your name?"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-['Caveat_Brush'] text-2xl text-black mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-[#D0D0D0] focus:border-black py-3 outline-none font-['Inter'] text-lg transition-colors placeholder:text-[#999]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-['Caveat_Brush'] text-2xl text-black mb-2">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-[#D0D0D0] focus:border-black py-3 outline-none font-['Inter'] text-lg transition-colors resize-none placeholder:text-[#999]"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 font-['Inter'] text-sm mb-4">{error}</p>
                    )}

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-['Caveat_Brush'] text-xl overflow-hidden transition-all hover:bg-[#333] hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
