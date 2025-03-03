"use client"; // Required in Next.js

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
import { Button, Dropdown } from "react-bootstrap";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary">
        <Sun className="me-2" /> Theme
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setTheme("light")}>
          <Sun className="me-2" /> Light
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>
          <Moon className="me-2" /> Dark
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("system")}>
          System
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
