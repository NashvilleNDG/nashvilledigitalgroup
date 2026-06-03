import {
  Activity, Award, BarChart2, BarChart3, Bot, Brain, Briefcase, Building,
  Building2, Calculator, Calendar, ClipboardList, Clock, Cloud, Code, Cpu,
  DollarSign, Eye, Filter, GraduationCap, Globe, Heart, Home, Image,
  Laptop, Layers, Lightbulb, Mail, Map, MapPin, Megaphone, Mic, Monitor, Moon,
  MessageCircle, MessageSquare, Music, PenTool, Rocket, Scale, Search, Server,
  Settings, Share2, Shield, Smartphone, Sparkles, Star, Store, Target,
  TrendingUp, Users, Utensils, Zap, type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Canonical PascalCase → component map
const iconMap: Record<string, LucideIcon> = {
  Activity, Award, BarChart2, BarChart3, Bot, Brain, Briefcase, Building,
  Building2, Calculator, Calendar, ClipboardList, Clock, Cloud, Code, Cpu,
  DollarSign, Eye, Filter, GraduationCap, Globe, Heart, Home, Image,
  Laptop, Layers, Lightbulb, Mail, Map, MapPin, Megaphone, Mic, Monitor, Moon,
  MessageCircle, MessageSquare, Music, PenTool, Rocket, Scale, Search, Server,
  Settings, Share2, Shield, Smartphone, Sparkles, Star, Store, Target,
  TrendingUp, Users, Utensils, Zap,
}

// Aliases for names that don't map 1:1 to a Lucide export
const aliases: Record<string, string> = {
  BarChart: "BarChart3",
  Chart: "BarChart3",
  Phone: "Smartphone",
  Plug: "Zap",
  Robot: "Bot",
  Analytics: "BarChart3",
  Web: "Globe",
  Mobile: "Smartphone",
  Instagram: "Share2",
  Facebook: "Share2",
  Twitter: "Share2",
}

/**
 * Normalize any icon name to PascalCase.
 * Accepts: "MapPin" (as-is), "map-pin", "map_pin", "mappin", "shield".
 */
function toPascalCase(name: string): string {
  // Already PascalCase (has an uppercase letter and no separators)
  if (!/[-_\s]/.test(name) && /[A-Z]/.test(name)) return name
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
    .join("")
}

export function Icon({ name, className }: { name: string; className?: string }) {
  // Emoji or non-alphanumeric — render directly as text glyph
  if (name && !/^[a-zA-Z][a-zA-Z0-9\-_\s]*$/.test(name)) {
    return <span className={cn("inline-block", className)}>{name}</span>
  }

  let key = toPascalCase(name)
  if (aliases[key]) key = aliases[key]

  // Fallback to Sparkles so an icon box is never empty
  const Component = iconMap[key] ?? Sparkles
  return <Component className={cn("w-5 h-5", className)} />
}
