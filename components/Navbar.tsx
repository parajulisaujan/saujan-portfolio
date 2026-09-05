"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { navigation, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      document.documentElement.dataset.theme =
        saved === "dark" || saved === "light"
          ? saved
          : media.matches
            ? "dark"
            : "light";
    };
    sync();
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  function changeTheme() {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="nav-inner">
        <a
          className="brand"
          href="#top"
          aria-label={`${site.name}, back to top`}
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            sp<span>.</span>
          </span>
          <span className="brand-name">{site.name}</span>
        </a>
        <nav
          className={`navigation ${open ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            href={site.github}
            aria-label="Saujan on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
          {site.linkedin && (
            <a
              className="nav-linkedin"
              href={site.linkedin}
              aria-label="Saujan on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} />
            </a>
          )}
          <span className="nav-divider" />
          <button
            onClick={changeTheme}
            aria-label="Toggle color theme"
            className="icon-button"
          >
            <Moon className="moon-icon" size={18} />
            <Sun className="sun-icon" size={18} />
          </button>
          <button
            ref={toggle}
            className="menu-button icon-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
