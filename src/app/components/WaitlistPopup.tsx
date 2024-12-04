"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import validateEmail from "@/lib/validateEmail";
import { X } from "lucide-react";
import { useState } from "react";
import AnimatedEmailSent from "./AnimatedEmailSent";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export default function WaitlistPopup({
  isOpen,
  onClose,
  initialEmail,
}: WaitlistPopupProps) {
  const [email, setEmail] = useState(initialEmail || "");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (validateEmail(email) === false) {
      setError("Please enter a valid email");
      return;
    }

    if (!firstName) {
      setError("Please enter your name");
      return;
    }

    setIsSubmitting(true);

    const data: {
      waitlist_id: number;
      first_name: string;
      last_name: string;
      email: string;
    } = {
      waitlist_id: 22756,
      email: email,
      first_name: firstName,
      last_name: "",
    };

    const url = "https://api.getwaitlist.com/api/v1/signup";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setIsSubmitting(false);
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        setError("Something went wrong. Please try again.");
      });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
        <Button
          variant="ghost"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>

        {isEmailSent ? (
          <AnimatedEmailSent isAnimating={isEmailSent} />
        ) : (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Join The Waitlist
              </h2>
              <p className="text-gray-600">
                We&apos;ll let you know what the next steps are
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setError("");
                  }}
                  className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
                />
              </div>
              {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
