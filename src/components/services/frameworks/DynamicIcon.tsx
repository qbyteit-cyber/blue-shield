import {
    Network, Search, FileSignature, BarChart3, Users, ShieldAlert, BadgeCheck, Link,
    Globe, Truck, Scale, Activity, FileText, CheckCircle2, Siren,
    Lock, FileWarning, UserCheck, Shield, FileSearch, Fingerprint, EyeOff, Gavel,
    Building2, Server, Eye, FileSpreadsheet, ShieldCheck, Zap, Database, Share2,
    LucideIcon, LucideProps
} from "lucide-react";

export type IconName =
    | "Network" | "Search" | "FileSignature" | "BarChart3" | "Users" | "ShieldAlert" | "BadgeCheck" | "Link"
    | "Globe" | "Truck" | "Scale" | "Activity" | "FileText" | "CheckCircle2" | "Siren"
    | "Lock" | "FileWarning" | "UserCheck" | "Shield" | "FileSearch" | "Fingerprint" | "EyeOff" | "Gavel"
    | "Building2" | "Server" | "Eye" | "FileSpreadsheet" | "ShieldCheck" | "Zap" | "Database" | "Share2";

const iconMap: Record<string, LucideIcon> = {
    Network, Search, FileSignature, BarChart3, Users, ShieldAlert, BadgeCheck, Link,
    Globe, Truck, Scale, Activity, FileText, CheckCircle2, Siren,
    Lock, FileWarning, UserCheck, Shield, FileSearch, Fingerprint, EyeOff, Gavel,
    Building2, Server, Eye, FileSpreadsheet, ShieldCheck, Zap, Database, Share2
};

interface DynamicIconProps extends LucideProps {
    name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
    const Icon = iconMap[name];
    if (!Icon) return null;
    return <Icon {...props} />;
}
