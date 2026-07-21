# TradeLink Website Image Pack

Built specifically around the current `ElDiablo7/tradelink-saas` product journey and colour system.

## Brand palette
- Slate background: `#0f172a`
- TradeLink teal: `#14b8a6`
- Emergency amber: `#f59e0b`
- Tracking blue: `#3b82f6`
- Verified green: `#22c55e`

## Recommended placements

1. **01-homepage-hero-ai-dispatch**
   - Route: `/`
   - Placement: Hero section, underneath the CTA buttons on mobile and as the right-hand visual on desktop.
   - Suggested display: 16:10, `object-cover`, rounded 32px.

2. **02-step-snap-and-describe**
   - Route: `/`
   - Placement: “Snap & Describe” card.
   - Also suitable for step 1 of `/post-job`.

3. **03-step-instant-match**
   - Route: `/`
   - Placement: “Instant Match” card.
   - Visualises the five-nearest-professional broadcast logic.

4. **04-step-live-tracking**
   - Route: `/`
   - Placement: “Live Tracking” card.
   - Also suitable for the match-found state on `/post-job`.

5. **05-trust-vetting-shield**
   - Route: `/`
   - Placement: Right-hand side of “Built on Trust”.
   - Pair with the ID, insurance, qualifications and review checklist.

6. **06-pro-dashboard-live-radar**
   - Routes: `/pricing`, `/register`, `/login`
   - Placement: Professional-facing product preview or Pro pricing visual.
   - It mirrors the real `/trade` dashboard rather than inventing unrelated UI.

7. **07-property-manager-control-centre**
   - Route: `/pricing`
   - Placement: Property Managers tab.
   - Use above or beside the property portfolio pricing tier.

8. **08-emergency-priority-ping**
   - Routes: `/pricing`, `/post-job`
   - Placement: Priority Ping pricing card or the broadcasting state.

9. **09-tradespeople-network**
   - Routes: `/register`, `/pricing`, future About page
   - Placement: Recruitment banner for plumbers, electricians, builders and heating engineers.

10. **10-social-og-card**
   - Purpose: Open Graph / LinkedIn / WhatsApp share image.
   - Exact dimensions: 1200 × 630.

## Formats
- PNG: lossless master files.
- WebP: lighter production files for Next.js.
- Contact sheet: quick visual index.

## Suggested Next.js usage

```tsx
import Image from "next/image";

<Image
  src="/images/tradelink/01-homepage-hero-ai-dispatch.webp"
  alt="TradeLink AI dispatch connecting a homeowner emergency with verified local tradespeople"
  width={1600}
  height={1000}
  priority
  className="w-full rounded-[2rem] border border-slate-700 object-cover shadow-2xl"
/>
```

Recommended public folder:

```text
public/images/tradelink/
```
