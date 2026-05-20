import { Suspense, lazy, useEffect } from "react";
import { CursorFollower } from "../ui/CursorFollower";
import { ScrollProgress } from "./ScrollProgress";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

export function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-dvh bg-bg">
      <CursorFollower />
      <ScrollProgress />
      <NavBar />
      <div className="pt-nav">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

/** Lazy map chunk — keeps Leaflet off initial home bundle */
export const LazyIndiaCoverageMap = lazy(() =>
  import("../maps/IndiaCoverageMap").then((m) => ({
    default: m.IndiaCoverageMap,
  })),
);
