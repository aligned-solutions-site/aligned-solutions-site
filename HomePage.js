
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <nav className="mb-8 flex justify-center gap-6 text-blue-700 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Empowering Communities. Building Contractors. Restoring Lives.
        </h1>
        <p className="text-lg text-blue-600 mb-8">
          Aligned Solutions Group LLC partners with local governments, small businesses, and reentry programs to deliver impactful services, startup coaching, and housing solutions across North Carolina.
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-700 hover:bg-blue-800">Partner With Us</Button>
          <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">Start Your Business</Button>
        </div>
      </section>
      {/* ...rest of the content truncated for brevity in deployment... */}
    </main>
  );
}
