import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre - Caroline Assis | Psicóloga Clínica",
    description:
        "Conheça a psicóloga Caroline Assis. Mais de 6 anos de experiência, colaboradora do Instituto de Psiquiatria da USP, proprietária do Instituto Versar de Saúde Mental. Atendimento online a brasileiros no exterior.",
};

export default function SobreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
