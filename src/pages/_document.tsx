import { Metadata } from "next";
import { Head, Html, Main, NextScript } from "next/document";

export const metadata: Metadata = {
    title: "Willer Santos | Software Engineer",
    description: "Portifolio do Willer Poveda Santos"
};

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <title>Willer Santos | Software Engineer</title>
                <meta name="description" content="Willer Santos | Software Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
