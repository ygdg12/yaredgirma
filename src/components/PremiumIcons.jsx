// Simple inline SVG icons with "premium" outline styling.
// Uses currentColor so the surrounding CSS controls color via `color: ...`.

const commonProps = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  focusable: false,
};

const strokeProps = {
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function LocationPinIcon() {
  return (
    <svg {...commonProps}>
      <path
        {...strokeProps}
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
      />
      <path {...strokeProps} d="M12 10.2a2.2 2.2 0 1 0 0-.1Z" />
    </svg>
  );
}

export function EducationCapIcon() {
  return (
    <svg {...commonProps}>
      <path {...strokeProps} d="M12 3 2.8 8l9.2 5 9.2-5L12 3Z" />
      <path
        {...strokeProps}
        d="M6.3 10.2v5c0 .7.4 1.3 1 1.6l4.7 2.6 4.7-2.6c.6-.3 1-.9 1-1.6v-5"
      />
      <path {...strokeProps} d="M21.2 8v5.2" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg {...commonProps}>
      <path {...strokeProps} d="M9 6V4.8c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6V6" />
      <path
        {...strokeProps}
        d="M4.5 8.2h15c.9 0 1.6.7 1.6 1.6v9.1c0 .9-.7 1.6-1.6 1.6h-15c-.9 0-1.6-.7-1.6-1.6V9.8c0-.9.7-1.6 1.6-1.6Z"
      />
      <path {...strokeProps} d="M8 12.2h8" />
    </svg>
  );
}

export function LightningBoltIcon() {
  return (
    <svg {...commonProps}>
      <path {...strokeProps} d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg {...commonProps}>
      <path {...strokeProps} d="M10.6 13.4 9.2 14.8a4 4 0 0 1-5.7-5.7l1.4-1.4" />
      <path {...strokeProps} d="M13.4 10.6 14.8 9.2a4 4 0 0 1 5.7 5.7l-1.4 1.4" />
      <path {...strokeProps} d="M9 15l6-6" />
    </svg>
  );
}

export function GearIcon() {
  return (
    <svg {...commonProps}>
      <path {...strokeProps} d="M12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" />
      <path
        {...strokeProps}
        d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.2-2-3.5-2.3.7a8.5 8.5 0 0 0-1.7-1l-.3-2.4H10.9l-.3 2.4a8.5 8.5 0 0 0-1.7 1l-2.3-.7-2 3.5 2 1.2a7.9 7.9 0 0 0 0 2l-2 1.2 2 3.5 2.3-.7a8.5 8.5 0 0 0 1.7 1l.3 2.4h4.2l.3-2.4a8.5 8.5 0 0 0 1.7-1l2.3.7 2-3.5-2-1.2Z"
      />
    </svg>
  );
}

export function DatabaseIcon() {
  return (
    <svg {...commonProps}>
      <path {...strokeProps} d="M12 3c5 0 9 1.8 9 4s-4 4-9 4-9-1.8-9-4 4-4 9-4Z" />
      <path {...strokeProps} d="M3 7v10c0 2.2 4 4 9 4s9-1.8 9-4V7" />
      <path {...strokeProps} d="M3 12c0 2.2 4 4 9 4s9-1.8 9-4" />
    </svg>
  );
}

export function PaletteIcon() {
  return (
    <svg {...commonProps}>
      <path
        {...strokeProps}
        d="M12 21c4.4 0 8-2.7 8-7 0-4.4-3.6-9-8-9s-8 3.6-8 8 3.6 9 8 9Z"
      />
      <path {...strokeProps} d="M7.6 12.2h0" />
      <path {...strokeProps} d="M10.1 9.6h0" />
      <path {...strokeProps} d="M13.2 9.6h0" />
      <path {...strokeProps} d="M15.4 12.2h0" />
      <path {...strokeProps} d="M8 12.8c0 1.2 1 2.2 2.2 2.2h1.6" />
    </svg>
  );
}

export function WrenchIcon() {
  return (
    <svg {...commonProps}>
      <path
        {...strokeProps}
        d="M14.3 6.1a4.5 4.5 0 0 0-6 6l-4.2 4.2c-.6.6-.6 1.6 0 2.2.6.6 1.6.6 2.2 0l4.2-4.2a4.5 4.5 0 0 0 6-6l-2.2 2.2-2.2-2.2 2.2-2.2Z"
      />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg {...commonProps}>
      <path
        {...strokeProps}
        d="M22 2 2.7 9.3c-.9.4-.8 1.7.1 2l5.1 1.7 2 6.2c.3 1 1.6 1.2 2.2.4l3.6-4.5 5.1-14c.4-1.2-.8-2.2-1.8-1.7Z"
      />
      <path {...strokeProps} d="M7.9 13l11-9" />
    </svg>
  );
}

export function WhatsappIcon() {
  return (
    <svg {...commonProps}>
      <path
        {...strokeProps}
        d="M20.5 11.8a8.7 8.7 0 0 1-12.9 7.6L3 20l.7-4.6A8.7 8.7 0 1 1 20.5 11.8Z"
      />
      <path
        {...strokeProps}
        d="M9.2 8.9c.1-.3.3-.5.6-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.2.7l-.3.3c-.2.2-.2.4 0 .7.4.7 1 1.2 1.7 1.6.3.2.5.2.7 0l.3-.3c.2-.2.4-.3.7-.2l1.7.7c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.7-.5.2-1.2.2-1.7 0-1.9-.7-3.6-2.4-4.3-4.3-.1-.6-.1-1.2.1-1.7Z"
      />
    </svg>
  );
}

