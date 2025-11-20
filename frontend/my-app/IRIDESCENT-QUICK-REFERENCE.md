# Iridescent Background - Quick Reference

## 🎨 Visual Features

### Color Flow Sequence
```
Purple (#8b5cf6) → Pink (#ec4899) → Blue (#3b82f6) → Teal (#14b8a6) → Loop
```

### Animation Speeds
| Element | Duration | Type |
|---------|----------|------|
| Main Gradient | 20s | Continuous flow |
| Overlay Gradient | 25s | Reverse flow |
| Shimmer | 8s | Sweep effect |
| Orb Float | 30-38s | Gentle movement |
| Pulse Glow | 8-12s | Breathing effect |

## 📐 Layout

```
┌─────────────────────────────────────┐
│  [Purple Orb]         [Pink Orb]    │
│                                      │
│              [Center Glow]           │
│                                      │
│  [Blue Orb]           [Teal Orb]    │
└─────────────────────────────────────┘
```

## 🎯 Key Properties

### Orb Configuration
```javascript
Purple: 384px (w/h), blur(80px), top-1/4 left-1/4
Pink:   480px (w/h), blur(90px), top-1/3 right-1/4
Blue:   448px (w/h), blur(85px), bottom-1/4 left-1/3
Teal:   416px (w/h), blur(88px), bottom-1/3 right-1/3
Center: 640px (w/h), blur(100px), centered
```

### Opacity Levels
- Color Orbs: 18-40%
- Shimmer: 15%
- Noise: 3%
- Vignette: 30%

## 🚀 Quick Start

1. **Install** (already done):
   ```javascript
   import FullScreenIridescentBackground from '@/components/ui/FullScreenIridescentBackground';
   ```

2. **Use**:
   ```jsx
   <FullScreenIridescentBackground />
   ```

3. **Done!** The background is now active.

## ⚙️ Customization Hotspots

### Make it MORE vibrant:
Line 77-79: Change `opacity-80` to `opacity-90`

### Make it LESS vibrant:
Line 77-79: Change `opacity-80` to `opacity-60`

### Speed UP animations:
Lines 69-79: Reduce animation durations (e.g., `20s` → `10s`)

### Slow DOWN animations:
Lines 69-79: Increase animation durations (e.g., `20s` → `30s`)

### Adjust blur intensity:
Lines 108+: Change blur values (e.g., `blur(80px)` → `blur(120px)`)

## 💡 Pro Tips

1. **Text Contrast**: The dark vignette ensures white text remains readable
2. **Performance**: Uses GPU-accelerated transforms for smooth 60fps
3. **Layering**: `-z-10` keeps it behind all content
4. **Responsiveness**: Automatically scales to any screen size

## 🎭 Effect Breakdown

```
Layer 1: Dark base gradient (depth)
Layer 2: Animated color gradient (main effect)
Layer 3: Shimmer sweep (glassy shine)
Layer 4-8: Floating orbs (atmosphere)
Layer 9: Glass blur (soft glow)
Layer 10: Noise texture (depth)
Layer 11: Vignette (focus)
```

## 🔧 Troubleshooting

**Background too bright?**
→ Increase vignette opacity (line 191)

**Animations too fast?**
→ Increase duration values in keyframes

**Want sharper orbs?**
→ Reduce blur values on orb styles

**Need more contrast?**
→ Darken base gradient colors (line 70)

---

**TL;DR**: Drop it in, it works beautifully! 🎨✨
