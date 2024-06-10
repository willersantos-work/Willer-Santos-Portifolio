import React, { ReactNode } from "react";
import { BaseLayout } from "../layout/layout";
import { NotificationProvider } from "./notification/notificationContext";

interface IProvidersProps {
    children: ReactNode;
}

export const Providers: React.FC<IProvidersProps> = ({ children }) => (
    <NotificationProvider>
        <BaseLayout>{children}</BaseLayout>
    </NotificationProvider>
);
