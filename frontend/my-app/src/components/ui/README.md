# Modular Hero Components Documentation

A collection of reusable React + Tailwind CSS components for creating a premium Windows-style floating hero section.

## 🎨 Design System

**Accent Color**: `#A855F7` (Purple-500)

**Style Philosophy**:
- Glassmorphism effects
- Floating animations
- Purple glow on hover
- Dark gradient backgrounds
- Smooth transitions (3-5s ease-in-out)

---

## 📦 Components

### 1. `<WindowContainer>`

**Purpose**: Wraps the entire hero window with glassmorphism and floating animation.

**Props**:
```jsx
{
  children: React.ReactNode,
  className?: string  // Optional additional classes
}
```

**Features**:
- Glass background: `bg-black/40 backdrop-blur-xl`
- Border: `border-white/10`
- Rounded corners: `rounded-2xl`
- Purple shadow with hover effect
- Floating animation (5s infinite)

**Usage**:
```jsx
<WindowContainer>
  {/* Your content here */}
</WindowContainer>
```

---

### 2. `<WindowHeaderBar>`

**Purpose**: Creates a Windows/macOS-style title bar with colored control dots.

**Props**:
```jsx
{
  title?: string  // Default: "Portfolio v2.0"
}
```

**Features**:
- 3 control dots (red, yellow, green)
- Centered title text
- Gradient background
- Hover effects on dots

**Usage**:
```jsx
<WindowHeaderBar title="Dinithi Portfolio v2.0" />
```

---

### 3. `<HeroImage>`

**Purpose**: Displays profile image with elegant hover effects.

**Props**:
```jsx
{
  src?: string,       // Default: "/Profile.jpg"
  alt?: string,       // Default: "Profile Picture"
  className?: string
}
```

**Features**:
- Responsive sizing (w-72 h-80 → w-80 h-96)
- Image zoom on hover
- Purple glow border on hover
- Gradient overlay animation

**Usage**:
```jsx
<HeroImage 
  src="/Profile.jpg"
  alt="Dinithi Profile"
/>
```

---

### 4. `<HeroText>`

**Purpose**: Displays hero text content with badge, title, and subtitle.

**Props**:
```jsx
{
  badge?: string,        // Default: "WordPress Developer"
  name?: string,         // Default: "Dinithi"
  subtitle?: string,     // Default: "WordPress plugin"
  description?: string,  // Default: "experiences."
  className?: string
}
```

**Features**:
- Animated badge with pulsing dot
- Gradient text for name
- Staggered fade-in animations
- Purple accent styling

**Usage**:
```jsx
<HeroText
  badge="WordPress Developer"
  name="Dinithi"
  subtitle="WordPress plugin"
  description="experiences."
/>
```

---

### 5. `<HeroButtons>`

**Purpose**: Displays two CTA buttons with different styles.

**Props**:
```jsx
{
  primaryText?: string,       // Default: "Know More"
  secondaryText?: string,     // Default: "Know Profile"
  onPrimaryClick?: () => void,
  onSecondaryClick?: () => void,
  className?: string
}
```

**Features**:
- Primary: Filled gradient button
- Secondary: Outlined button
- Purple glow on hover
- Rounded-full shape
- Smooth animation effects

**Usage**:
```jsx
<HeroButtons
  primaryText="Know More"
  secondaryText="Know Profile"
  onPrimaryClick={() => console.log('Primary clicked')}
  onSecondaryClick={() => console.log('Secondary clicked')}
/>
```

---

### 6. `<HeroLayout>`

**Purpose**: Arranges content in a responsive two-column layout.

**Props**:
```jsx
{
  leftContent: React.ReactNode,
  rightContent: React.ReactNode,
  className?: string
}
```

**Features**:
- Flex layout (column on mobile, row on desktop)
- Responsive gap spacing
- Centered alignment
- Consistent padding

**Usage**:
```jsx
<HeroLayout
  leftContent={<HeroImage />}
  rightContent={
    <>
      <HeroText />
      <HeroButtons />
    </>
  }
/>
```

---

### 7. `<BackgroundParticles>`

**Purpose**: Creates animated floating particles and gradient background.

**Props**:
```jsx
{
  className?: string
}
```

**Features**:
- Dark gradient background (black → purple)
- 5 floating particles with different sizes
- Pulse and bounce animations
- Staggered animation delays

**Usage**:
```jsx
<BackgroundParticles />
```

---

## 🚀 Complete Hero Section Example

```jsx
import WindowContainer from '../ui/WindowContainer';
import WindowHeaderBar from '../ui/WindowHeaderBar';
import HeroImage from '../ui/HeroImage';
import HeroText from '../ui/HeroText';
import HeroButtons from '../ui/HeroButtons';
import HeroLayout from '../ui/HeroLayout';
import BackgroundParticles from '../ui/BackgroundParticles';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      <BackgroundParticles />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <WindowContainer>
          <WindowHeaderBar title="Portfolio v2.0" />
          
          <HeroLayout
            leftContent={<HeroImage src="/Profile.jpg" alt="Profile" />}
            rightContent={
              <>
                <HeroText
                  badge="WordPress Developer"
                  name="Dinithi"
                  subtitle="WordPress plugin"
                  description="experiences."
                />
                <HeroButtons
                  primaryText="Know More"
                  secondaryText="Know Profile"
                />
              </>
            }
          />
        </WindowContainer>
      </div>
    </section>
  );
}
```

---

## 🎯 Reusability

All components are designed to be reusable across your portfolio:

- **WindowContainer**: Use for any card/modal
- **WindowHeaderBar**: Use for any window-style component
- **HeroButtons**: Reuse in CTAs, forms, sections
- **HeroLayout**: Two-column layouts anywhere
- **BackgroundParticles**: Background for any section

---

## 🎨 Customization

Each component accepts a `className` prop for additional styling:

```jsx
<WindowContainer className="max-w-4xl">
  {/* Custom max-width */}
</WindowContainer>

<HeroButtons 
  className="justify-center"
  primaryText="Download CV"
  secondaryText="Contact Me"
/>
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (lg/xl)

All components are fully responsive and stack appropriately on mobile devices.

---

## ✨ Animation Details

**Fade-in-up**: 0.8s ease-out
**Floating**: 5s ease-in-out infinite
**Hover transitions**: 300-500ms
**Image zoom**: 700ms

All animations use CSS custom keyframes defined in `globals.css`.

---

## 🔧 Dependencies

- Next.js 14+
- React 18+
- Tailwind CSS 3+
- next/image (for optimized images)

---

**Created with ❤️ for modular, reusable, and beautiful UI components**
