# 🎨 Icon Mapping Guide

## Updated Icons for Better Context

All icons have been updated to be more contextually relevant to their service types.

---

## 📦 POS & Retail Systems

| Package | Icon | Reasoning |
|---------|------|-----------|
| **POS Basic** | `CreditCard` | Represents payment/cashier functionality |
| **POS Standard** | `Receipt` | POS with inventory tracking = Receipt |
| **POS Pro** | `Store` | Full retail/store management system |

---

## 📋 Queue Management Systems

| Package | Icon | Reasoning |
|---------|------|-----------|
| **Queue Basic** | `ClipboardList` | Queue = Ordered list management |
| **Queue Standard** | `Users` | Multiple counters = Multiple users |
| **Queue Premium** | `Monitor` | Display screen for queue system |

---

## ⏰ Attendance Systems

| Package | Icon | Reasoning |
|---------|------|-----------|
| **Attendance Basic** | `Clock` | Time tracking = Clock |
| **Attendance Standard** | `MapPin` | GPS/Location tracking |
| **Attendance Premium** | `UserCog` | User management & settings |

---

## 🌐 Website Development

### Landing Pages
| Package | Icon | Reasoning |
|---------|------|-----------|
| **Landing Page Basic** | `MousePointer2` | Click/Conversion focused |
| **Landing Page Premium** | `Sparkles` | Premium/Special features |
| **Landing Page Pro** | `Award` | Award-winning/Best quality |

### Company Profile
| Package | Icon | Reasoning |
|---------|------|-----------|
| **Company Profile Basic** | `Globe` | Web presence |
| **Company Profile Standard** | `Building2` | Business/Corporate |
| **Company Profile Pro** | `Crown` | Premium corporate |

### E-Commerce
| Package | Icon | Reasoning |
|---------|------|-----------|
| **E-Commerce Basic** | `ShoppingBag` | Shopping/Products |
| **E-Commerce Premium** | `Store` | Full online store |
| **E-Commerce Pro** | `Crown` | Premium e-commerce |

---

## 📅 Booking Systems

| Package | Icon | Reasoning |
|---------|------|-----------|
| **Booking Basic** | `CalendarCheck` | Calendar with confirmation |
| **Booking Standard** | `CalendarClock` | Time slot management |
| **Booking Premium** | `UserCheck` | User verification/DP |

---

## ✈️ Travel & Tourism

| Package | Icon | Reasoning |
|---------|------|-----------|
| **Travel Basic** | `Plane` | Travel/Flight |
| **Travel Premium** | `Map` | Destination/Navigation |
| **Travel Pro** | `Globe` | Global travel system |

---

## 🔧 Website Revamp

| Package | Icon | Reasoning |
|---------|------|-----------|
| **Revamp Basic** | `Wrench` | Tools/Fix/Repair |
| **Revamp Premium** | `Settings` | Settings/Upgrade |
| **Revamp Pro** | `Rocket` | Launch/Transform |

---

## 🎯 Icon Selection Guidelines

When choosing icons for new services, consider:

1. **Direct Association**: Icon should immediately relate to the service
   - ✅ `Calendar` for booking
   - ❌ `Zap` for booking

2. **Progressive Enhancement**: Higher tiers should show progression
   - Basic: `CalendarCheck` (simple booking)
   - Standard: `CalendarClock` (with time)
   - Premium: `UserCheck` (with verification)

3. **Industry Standards**: Use commonly recognized symbols
   - 💳 Payment = `CreditCard`
   - 📦 Inventory = `Package`
   - 👥 Users = `Users`

4. **Avoid Generic Icons**: Don't use these for specific services
   - ❌ `Zap` (too generic)
   - ❌ `Activity` (unclear meaning)
   - ❌ `Network` (too technical)

---

## 📚 Available Icon Categories

### Business & Commerce
`Store`, `ShoppingCart`, `CreditCard`, `Receipt`, `ShoppingBag`

### Calendar & Time
`Calendar`, `CalendarCheck`, `CalendarClock`, `Clock`

### Users & People
`Users`, `UserCheck`, `UserCog`, `Briefcase`

### Location & Travel
`MapPin`, `Map`, `Plane`, `Compass`, `Hotel`

### Tech & Development
`Code2`, `Database`, `Server`, `Monitor`, `Globe`

### Design & Marketing
`Palette`, `PenTool`, `Megaphone`, `Eye`, `MousePointer2`

### Tools & Actions
`Settings`, `Wrench`, `Hammer`, `RefreshCw`

### Premium & Special
`Crown`, `Star`, `Sparkles`, `Award`, `Rocket`

---

## 🔄 How to Update Icons

1. **Import the icon** in `constants/pricing.ts`:
   ```typescript
   import { NewIcon } from 'lucide-react';
   ```

2. **Update the package**:
   ```typescript
   {
     id: 'service-basic',
     icon: NewIcon, // Add comment explaining why
     // ...
   }
   ```

3. **Add comment** explaining the choice:
   ```typescript
   icon: CalendarCheck, // Booking = Calendar with check
   ```

---

## ✅ Benefits of Contextual Icons

- 🎯 **Better UX**: Users instantly understand the service
- 🎨 **Visual Hierarchy**: Different icons for different tiers
- 📱 **Mobile Friendly**: Clear icons work better on small screens
- 🌍 **Universal**: Icons transcend language barriers

---

**Last Updated**: 2025-11-28
**Total Icons Updated**: 25+ packages
