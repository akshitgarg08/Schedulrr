"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function CopyUrlButton({ username }) {
  const [origin, setOrigin] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${origin}/${username}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={handleCopy}
      aria-label="Copy your scheduling link"
      type="button"
      disabled={!username || !origin}
      tabIndex={0}
    >
      <Copy className="w-4 h-4" />
      {copied ? "Copied!" : "Copy Link"}
    </Button>
  );
}