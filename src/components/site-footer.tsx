import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./site-header";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">LET’S START A CONVERSATION</span>
            <h2>
              Your thinking deserves
              <br />a wider audience.
            </h2>
          </div>
          <Button asChild variant="editorialOutline" className="footer-cta">
            <Link to="/contact">
              Let’s talk <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="footer-bottom">
          <Brand />
          <span>Content & storytelling for private markets.</span>
          <div>
            <Link to="/our-works">Our Works</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
          <small>© {new Date().getFullYear()} Reframe Studios</small>
        </div>
      </div>
    </footer>
  );
}
