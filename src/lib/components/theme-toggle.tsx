'use client';

import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    return (
        <label htmlFor="themeController" className="swap swap-rotate">
            <input
                type="checkbox"
                id="themeController"
                hidden={true}
                aria-hidden={true}
                className="theme-controller"
            />
            <Sun className="swap-on fill-current" />
            <Moon className="swap-off fill-current" />
        </label>
    );
}
