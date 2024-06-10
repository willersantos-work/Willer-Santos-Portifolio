"use client";
import { Poppins } from "next/font/google";
import React, { ReactNode } from "react";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"]
});

interface IBaseLayoutProps {
    children: ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => (
    <div className={`relative isolate overflow-hidden h-screen ${poppins.className}`}>{children}</div>
);
