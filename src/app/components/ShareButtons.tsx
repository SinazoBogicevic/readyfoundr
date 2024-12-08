"use client";

import { Check, Copy, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    },
  ];

  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>Copy link</span>
          </>
        )}
      </button>
      <div className="w-px h-4 bg-gray-700" />
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            title={`Share on ${link.name}`}
          >
            <Icon className="w-5 h-5" />
            <span className="sr-only">Share on {link.name}</span>
          </a>
        );
      })}
    </div>
  );
}
