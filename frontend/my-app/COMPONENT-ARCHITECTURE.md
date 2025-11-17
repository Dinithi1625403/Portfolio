# 🎨 Visual Component Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│                   <section> Hero                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │           <BackgroundParticles />                 │  │
│  │  • Gradient Background                            │  │
│  │  • 5 Floating Particles                           │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │            <WindowContainer>                      │  │
│  │  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │  │
│  │  ┃     <WindowHeaderBar />                   ┃  │  │
│  │  ┃  ● ● ●     "Portfolio v2.0"              ┃  │  │
│  │  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │  │
│  │  ┃                                           ┃  │  │
│  │  ┃         <HeroLayout>                      ┃  │  │
│  │  ┃  ┌─────────────┐  ┌──────────────────┐   ┃  │  │
│  │  ┃  │             │  │  <HeroText />    │   ┃  │  │
│  │  ┃  │  <HeroImage>│  │  • Badge         │   ┃  │  │
│  │  ┃  │             │  │  • Title         │   ┃  │  │
│  │  ┃  │  [Profile]  │  │  • Subtitle      │   ┃  │  │
│  │  ┃  │             │  │                  │   ┃  │  │
│  │  ┃  │   Image     │  │  <HeroButtons /> │   ┃  │  │
│  │  ┃  │             │  │  [Outlined]      │   ┃  │  │
│  │  ┃  │             │  │  [Filled]        │   ┃  │  │
│  │  ┃  └─────────────┘  └──────────────────┘   ┃  │  │
│  │  ┃                                           ┃  │  │
│  │  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Component Breakdown

### 1️⃣ BackgroundParticles
```
Purpose: Animated background layer
Contains: Gradient + 5 floating orbs
Position: Absolute, behind everything
Z-index: 0
```

### 2️⃣ WindowContainer
```
Purpose: Main glass window wrapper
Style: Glassmorphism + floating animation
Children: WindowHeaderBar + HeroLayout
Z-index: 10
```

### 3️⃣ WindowHeaderBar
```
Purpose: OS-style title bar
Elements: 3 colored dots + title text
Position: Top of window
```

### 4️⃣ HeroLayout
```
Purpose: Two-column responsive layout
Left: HeroImage
Right: HeroText + HeroButtons
Responsive: Stacks on mobile
```

### 5️⃣ HeroImage
```
Purpose: Profile picture with effects
Features: Hover zoom, purple glow
Size: Responsive (mobile → desktop)
```

### 6️⃣ HeroText
```
Purpose: Text content container
Contains:
  • Badge (with pulsing dot)
  • Title (with gradient name)
  • Subtitle (with purple accent)
Animations: Staggered fade-in-up
```

### 7️⃣ HeroButtons
```
Purpose: CTA buttons
Types:
  • Secondary: Outlined, glass effect
  • Primary: Filled gradient
Effects: Hover glow, smooth transitions
```

---

## 🎨 Visual Styling Hierarchy

```css
COLORS
├── Background
│   ├── black → slate-900 → purple-950
│   └── Particles: purple-300 to purple-600 (various opacities)
│
├── Window
│   ├── Background: black/40
│   ├── Border: white/10
│   └── Shadow: purple-500/20
│
├── Header Bar
│   ├── Background: gray-800 → gray-700
│   ├── Dots: red-500, yellow-500, green-500
│   └── Title: gray-400
│
├── Badge
│   ├── Background: purple-500/20
│   ├── Border: purple-400/30
│   └── Text: purple-300
│
├── Title
│   ├── Main: white
│   └── Name: purple-400 → purple-600 gradient
│
├── Subtitle
│   ├── Main: gray-300
│   └── Accent: purple-400
│
└── Buttons
    ├── Secondary
    │   ├── Border: purple-400/50
    │   └── Hover: purple-400 glow
    │
    └── Primary
        ├── Background: purple-500 → purple-600
        └── Hover: purple-400 → purple-500
```

---

## 🌊 Animation Flow

```
Timeline (0s → 5s)

0.0s  Component mounts
      ├── BackgroundParticles: Start floating
      └── WindowContainer: Start gentle float

0.0s  HeroText Badge fades in ↑
      └── animation-delay: 0s

0.1s  HeroText Title fades in ↑
      └── animation-delay: 0.1s

0.2s  HeroText Subtitle fades in ↑
      └── animation-delay: 0.2s

0.3s  HeroButtons fade in ↑
      └── animation-delay: 0.3s

∞     Continuous animations
      ├── Badge dot: pulse (2s)
      ├── Window: float up/down (5s)
      ├── Particles: pulse/bounce (4-8s)
      └── Image hover: zoom (0.7s on hover)
```

---

## 📱 Responsive Breakpoints

```
MOBILE (< 640px)
┌────────────────┐
│  ┌──────────┐  │
│  │  Image   │  │ 
│  └──────────┘  │
│                │
│  Text Content  │
│  Badge         │
│  Title         │
│  Subtitle      │
│                │
│  [Button 1]    │
│  [Button 2]    │
└────────────────┘

TABLET (640-1024px)
┌─────────────────────────┐
│  ┌────────┐  Text       │
│  │ Image  │  Badge      │
│  │        │  Title      │
│  │        │  Subtitle   │
│  └────────┘             │
│             [Btn] [Btn] │
└─────────────────────────┘

DESKTOP (> 1024px)
┌────────────────────────────────────┐
│  ┌──────────┐    Text Content      │
│  │          │    Badge              │
│  │  Image   │    Hi, I am Name      │
│  │          │    Subtitle text      │
│  │          │                       │
│  └──────────┘    [Button] [Button] │
└────────────────────────────────────┘
```

---

## 🎭 State Diagram

```
Component States:

WindowContainer
├── Default: bg-black/40, shadow-purple-500/20
└── Hover: shadow-purple-500/30, border-white/20

HeroImage
├── Default: scale(1), no overlay
└── Hover: scale(1.05), gradient overlay

HeroButtons (Secondary)
├── Default: border-purple-400/50
└── Hover: border-purple-400, bg-purple-400/10

HeroButtons (Primary)
├── Default: purple-500 → purple-600
└── Hover: purple-400 → purple-500, shadow glow

Badge
└── Default: Pulsing dot animation (continuous)
```

---

## 🔄 Data Flow

```
Parent Component (Hero.js)
    ↓
Props passed down
    ↓
┌───────────────────┐
│ WindowContainer   │ ← className (optional)
│   ↓               │
│   WindowHeaderBar │ ← title
│   ↓               │
│   HeroLayout      │ ← leftContent, rightContent
│     ↓             │
│     ├─ HeroImage  │ ← src, alt
│     └─ HeroText   │ ← badge, name, subtitle
│         HeroButtons│ ← primaryText, onPrimaryClick
└───────────────────┘

User Interactions
    ↓
onClick handlers
    ↓
Parent component functions
(handleKnowMore, handleKnowProfile)
```

---

**This modular architecture allows you to mix and match components to create unlimited hero variations! 🎨**
