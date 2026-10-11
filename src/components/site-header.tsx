import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Reframe Studios home">
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>
        reframe<span className="brand-small">STUDIOS</span>
      </span>
    </Link>
  );
}
const navLinks = [
  { label: "Approach", to: "/", hash: "approach" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Our Works", to: "/our-works" },
  { label: "About Us", to: "/about-us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.hash ? (
              <Link key={item.label} to={item.to} hash={item.hash}>
                {item.label}
              </Link>
            ) : (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header-actions">
          <Button asChild variant="editorial" className="header-contact">
            <Link to="/contact">
              Talk to us <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((item) =>
            item.hash ? (
              <Link key={item.label} to={item.to} hash={item.hash} onClick={() => setOpen(false)}>
                {item.label}
                <ArrowUpRight size={18} />
              </Link>
            ) : (
              <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
                <ArrowUpRight size={18} />
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
