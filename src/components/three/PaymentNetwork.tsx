"use client";

import dynamic from "next/dynamic";

const PaymentNetworkScene = dynamic(
  () => import("./PaymentNetworkScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative">
          {/* Elegant loading indicator matching the gold accent */}
          <div className="w-14 h-14 rounded-full border-2 border-accent-gold/20" />
          <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-transparent border-t-accent-gold/60 animate-spin" />
        </div>
      </div>
    ),
  }
);

export function PaymentNetwork() {
  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[480px]">
      <PaymentNetworkScene />
    </div>
  );
}
