import { m } from "framer-motion";

export default function RouteLoader() {
  return (
    <div className="flex items-center justify-center p-6 min-h-[400px]">
      <div className="flex flex-col items-center gap-4">
        <m.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-3 border-transparent border-t-primary rounded-full"
        />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}
