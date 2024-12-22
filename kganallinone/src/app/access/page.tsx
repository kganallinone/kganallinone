"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Access() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "h4ck3r") {
      setMessage("Access granted! Welcome to the secret area.");
    } else {
      setMessage("Access denied. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8">Restricted Access</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="password"
          placeholder="Enter access code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("granted") ? "text-green-400" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
