import {
  Bot, Target, Code, Search, Share2, MessageSquare, Mail, Brain,
  Shield, Building2, Lightbulb, Heart, Eye, TrendingUp, Users, Zap,
  MessageCircle, Star, Settings, Mic, BarChart3, Clock, GraduationCap,
  Building, DollarSign, Laptop, type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  Bot, Target, Code, Search, Share2, MessageSquare, Mail, Brain,
  Shield, Building2, Lightbulb, Heart, Eye, TrendingUp, Users, Zap,
  MessageCircle, Star, Settings, Mic, BarChart3, Clock, GraduationCap,
  Building, DollarSign, Laptop,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component className={cn("w-5 h-5", className)} />
}
