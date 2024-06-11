import React, { ReactNode } from "react";
import { BaseLayout } from "../layout/layout";
import { LanguageProvider } from "./language/languageContext";
import { NotificationProvider } from "./notification/notificationContext";

interface IProvidersProps {
    children: ReactNode;
}

export const Providers: React.FC<IProvidersProps> = ({ children }) => (
    <NotificationProvider>
        <LanguageProvider>
            <BaseLayout>{children}</BaseLayout>
        </LanguageProvider>
    </NotificationProvider>
);
