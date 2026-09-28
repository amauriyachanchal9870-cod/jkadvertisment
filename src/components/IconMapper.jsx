import React from 'react';
import { 
  Share2, 
  Megaphone, 
  Palette, 
  Video, 
  MessageSquare, 
  PhoneCall, 
  Radio, 
  Headphones, 
  Camera, 
  Compass, 
  Target, 
  Sparkles, 
  TrendingUp, 
  Lightbulb, 
  Layers, 
  Briefcase, 
  CheckCircle, 
  MessageCircle, 
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Check,
  Send,
  HelpCircle,
  Award
} from 'lucide-react';

const icons = {
  Share2,
  Megaphone,
  Palette,
  Video,
  MessageSquare,
  PhoneCall,
  Radio,
  Headphones,
  Camera,
  Compass,
  Target,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Layers,
  Briefcase,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Check,
  Send,
  HelpCircle,
  Award
};

export const DynamicIcon = ({ name, className = "w-5 h-5", size = 20, ...props }) => {
  const IconComponent = icons[name] || Sparkles;
  return <IconComponent className={className} size={size} strokeWidth={2} {...props} />;
};

export default DynamicIcon;
