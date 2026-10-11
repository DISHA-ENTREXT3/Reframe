import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Brand() {
  return <Link to="/" className="brand" aria-label="Reframe Studios home"><span className="brand-symbol" aria-hidden="true"><i /><i /></span><span>reframe<span className="brand-small">STUDIOS</span></span></Link>;
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{["Approach", "Services", "Work", "About"].map(item => <Link key={item} to="/" hash={item.toLowerCase()}>{item}</Link>)}</nav><div className="header-actions"><Button asChild variant="editorial" className="header-contact"><Link to="/contact">Talk to us <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{["Approach", "Services", "Work", "About"].map(item => <Link key={item} to="/" hash={item.toLowerCase()} onClick={() => setOpen(false)}>{item}<ArrowUpRight size={18} /></Link>)}</nav>}</header>;
}