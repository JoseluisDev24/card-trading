import { Suspense } from "react";
import HelpContent from "@/components/help/HelpContent";

export default function Help() {
  
  return (
    <Suspense fallback={<div>Loading help center...</div>}>
      <HelpContent />
    </Suspense>
  );
}
