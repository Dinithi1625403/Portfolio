# 📋 Component Props Reference Card

Quick reference for all component props and their defaults.

---

## 1. WindowContainer

```typescript
Props:
  children: ReactNode           // Required - Content inside window
  className?: string            // Optional - Additional CSS classes

Default className:
  "floating-window bg-black/40 backdrop-blur-xl border 
   border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20"

Example:
  <WindowContainer className="max-w-4xl">
    {children}
  </WindowContainer>
```

---

## 2. WindowHeaderBar

```typescript
Props:
  title?: string               // Optional - Window title
  
Defaults:
  title: "Portfolio v2.0"

Example:
  <WindowHeaderBar title="Dinithi Portfolio v2.0" />
```

---

## 3. HeroImage

```typescript
Props:
  src?: string                 // Optional - Image path
  alt?: string                 // Optional - Alt text
  className?: string           // Optional - Additional classes
  
Defaults:
  src: "/Profile.jpg"
  alt: "Profile Picture"

Size:
  Mobile:  w-72 h-80
  Desktop: w-80 h-96

Example:
  <HeroImage 
    src="/my-photo.jpg"
    alt="My Profile Picture"
  />
```

---

## 4. HeroText

```typescript
Props:
  badge?: string               // Optional - Badge text
  name?: string                // Optional - Name in title
  subtitle?: string            // Optional - Highlight text
  description?: string         // Optional - Description text
  className?: string           // Optional - Additional classes
  
Defaults:
  badge: "WordPress Developer"
  name: "Dinithi"
  subtitle: "WordPress plugin"
  description: "experiences."

Text Output:
  Badge: "WordPress Developer"
  Title: "Hi, I am Dinithi"
  Subtitle: "I build WordPress plugin experiences."

Example:
  <HeroText
    badge="Full Stack Developer"
    name="John Doe"
    subtitle="amazing web apps"
    description="with React & Node.js"
  />
```

---

## 5. HeroButtons

```typescript
Props:
  primaryText?: string          // Optional - Primary button text
  secondaryText?: string        // Optional - Secondary button text
  onPrimaryClick?: () => void   // Optional - Primary click handler
  onSecondaryClick?: () => void // Optional - Secondary click handler
  className?: string            // Optional - Additional classes
  
Defaults:
  primaryText: "Know More"
  secondaryText: "Know Profile"

Button Order:
  [Secondary (Outlined)]  [Primary (Filled)]

Example:
  <HeroButtons
    primaryText="Hire Me"
    secondaryText="View Portfolio"
    onPrimaryClick={() => navigate('/contact')}
    onSecondaryClick={() => navigate('/projects')}
  />
```

---

## 6. HeroLayout

```typescript
Props:
  leftContent: ReactNode       // Required - Left column content
  rightContent: ReactNode      // Required - Right column content
  className?: string           // Optional - Additional classes
  
Layout:
  Desktop: Two columns (flex-row)
  Mobile:  Stacked (flex-col)

Gap:
  Desktop: gap-16
  Mobile:  gap-8

Example:
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

## 7. BackgroundParticles

```typescript
Props:
  className?: string           // Optional - Additional classes

Particles:
  5 floating orbs with different:
  • Sizes (w-24 to w-48)
  • Positions
  • Animations (pulse/bounce)
  • Delays (0s to 4s)

Example:
  <BackgroundParticles />
```

---

## 🎨 Common className Overrides

### Sizing
```jsx
className="max-w-4xl"    // Constrain width
className="w-full"       // Full width
className="h-screen"     // Full height
```

### Spacing
```jsx
className="p-8"          // Padding
className="px-12"        // Horizontal padding
className="gap-6"        // Gap between items
```

### Alignment
```jsx
className="justify-center"     // Center horizontally
className="items-center"       // Center vertically
className="text-center"        // Center text
```

### Colors (Theme Override)
```jsx
// Change from purple to blue
className="border-blue-400/30 bg-blue-500/20"

// Change from purple to green
className="border-green-400/30 bg-green-500/20"
```

---

## 🎯 Common Prop Patterns

### Pattern 1: Simple Hero (No Image)
```jsx
<WindowContainer>
  <WindowHeaderBar title="Welcome" />
  <div className="p-12 text-center">
    <HeroText {...yourTextProps} />
    <HeroButtons {...yourButtonProps} />
  </div>
</WindowContainer>
```

### Pattern 2: Side-by-Side Hero
```jsx
<WindowContainer>
  <WindowHeaderBar title="Portfolio" />
  <HeroLayout
    leftContent={<HeroImage {...imageProps} />}
    rightContent={
      <>
        <HeroText {...textProps} />
        <HeroButtons {...buttonProps} />
      </>
    }
  />
</WindowContainer>
```

### Pattern 3: Reversed Layout
```jsx
<HeroLayout
  leftContent={
    <>
      <HeroText {...textProps} />
      <HeroButtons {...buttonProps} />
    </>
  }
  rightContent={<HeroImage {...imageProps} />}
/>
```

---

## 🎨 Prop Value Examples

### Badge Examples
```javascript
"WordPress Developer"
"Full Stack Developer"
"UI/UX Designer"
"React Specialist"
"Available for Hire"
"Freelancer"
"Open Source Contributor"
```

### Name Examples
```javascript
"Dinithi"
"Your Name"
"Portfolio"
"Welcome"
```

### Subtitle Examples
```javascript
"WordPress plugin experiences"
"beautiful web applications"
"stunning user interfaces"
"scalable cloud solutions"
"innovative mobile apps"
"data-driven insights"
```

### Button Text Examples
```javascript
// Primary (Action)
"Know More"
"Hire Me"
"Get Started"
"View Portfolio"
"Contact Now"
"Download CV"
"Let's Talk"

// Secondary (Alternative)
"Know Profile"
"View Work"
"Learn More"
"See Projects"
"My Resume"
"Schedule Call"
"Explore"
```

---

## 🔧 TypeScript Types (Optional)

If you want to add TypeScript, here are the types:

```typescript
// WindowContainer.tsx
interface WindowContainerProps {
  children: React.ReactNode;
  className?: string;
}

// WindowHeaderBar.tsx
interface WindowHeaderBarProps {
  title?: string;
}

// HeroImage.tsx
interface HeroImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

// HeroText.tsx
interface HeroTextProps {
  badge?: string;
  name?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

// HeroButtons.tsx
interface HeroButtonsProps {
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

// HeroLayout.tsx
interface HeroLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}

// BackgroundParticles.tsx
interface BackgroundParticlesProps {
  className?: string;
}
```

---

## 📦 Complete Example with All Props

```jsx
<section className="min-h-screen relative flex items-center justify-center px-4">
  <BackgroundParticles className="opacity-80" />
  
  <div className="relative z-10 w-full max-w-6xl mx-auto">
    <WindowContainer className="hover:scale-[1.01] transition-transform">
      <WindowHeaderBar title="Dinithi Portfolio v2.0" />
      
      <HeroLayout
        className="p-16"
        leftContent={
          <HeroImage 
            src="/Profile.jpg"
            alt="Dinithi - WordPress Developer"
            className="shadow-2xl"
          />
        }
        rightContent={
          <>
            <HeroText
              badge="WordPress Developer"
              name="Dinithi"
              subtitle="WordPress plugin"
              description="experiences."
              className="space-y-8"
            />
            <HeroButtons
              primaryText="Know More"
              secondaryText="Know Profile"
              onPrimaryClick={() => scrollTo('#about')}
              onSecondaryClick={() => scrollTo('#projects')}
              className="pt-6"
            />
          </>
        }
      />
    </WindowContainer>
  </div>
</section>
```

---

## ✅ Validation Checklist

Before using a component, ensure:

- [ ] All required props are provided
- [ ] Image paths are correct (start with `/`)
- [ ] Click handlers are functions
- [ ] className doesn't conflict with default styles
- [ ] Text content is not too long (readability)
- [ ] Alt text is descriptive for images

---

**Keep this card handy for quick reference! 🚀**
