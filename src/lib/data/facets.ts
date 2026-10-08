import type { CategoryFacetGroup } from '$lib/types';

export const CATEGORY_FACETS: Record<string, CategoryFacetGroup[]> = {
  cases: [
    {
      id: 'caseStyle',
      title: 'Case Style & Finish',
      options: [
        { id: 'clear', label: 'Clear & Transparent', badge: 'Popular' },
        { id: 'frosted', label: 'Matte & Frosted' },
        { id: 'armor', label: 'Rugged Armor' },
        { id: 'slim', label: 'Ultra-Slim / Minimal' },
        { id: 'leather', label: 'Leather & PU' }
      ]
    },
    {
      id: 'features',
      title: 'Special Features',
      options: [
        { id: 'magsafe', label: 'MagSafe Compatible', badge: 'Magnet' },
        { id: 'kickstand', label: '360° Ring Kickstand' },
        { id: 'camera-slider', label: 'Camera Slider' },
        { id: 'drop-certified', label: 'Mil-Grade Drop Protection' }
      ]
    }
  ],
  'screen-glass': [
    {
      id: 'glassType',
      title: 'Glass / Film Type',
      options: [
        { id: 'hd-clear', label: 'Ultra-HD Clear 9H', badge: 'Clear' },
        { id: 'privacy', label: '28° Anti-Spy Privacy', badge: 'Private' },
        { id: 'matte', label: 'Matte Anti-Glare (Gaming)' },
        { id: 'uv-liquid', label: 'UV Liquid Curved Glass' }
      ]
    },
    {
      id: 'coverage',
      title: 'Coverage & Fit',
      options: [
        { id: 'case-friendly', label: 'Case-Friendly Fit' },
        { id: 'edge-to-edge', label: 'Edge-to-Edge Full Coverage' }
      ]
    },
    {
      id: 'installation',
      title: 'Inclusions & Kit',
      options: [
        { id: 'auto-align', label: 'Auto-Alignment Tray Included', badge: 'Easy' },
        { id: 'multi-pack', label: '2-Pack Value Set' }
      ]
    }
  ],
  chargers: [
    {
      id: 'wattage',
      title: 'Output Wattage',
      options: [
        { id: '20w-30w', label: '20W – 30W (Phone Fast)', badge: 'Phone' },
        { id: '45w', label: '45W (Samsung SFC 2.0)', badge: 'SFC' },
        { id: '65w-67w', label: '65W – 67W (Laptop / Multi)', badge: 'Laptop' },
        { id: '100w-plus', label: '100W+ (Desktop / Ultra)', badge: '100W+' }
      ]
    },
    {
      id: 'ports',
      title: 'Port Configuration',
      options: [
        { id: 'single-c', label: '1x USB-C Port' },
        { id: 'dual-c', label: 'Dual USB-C (2x C)' },
        { id: 'multi-port', label: '3+ Ports (USB-C + USB-A)' }
      ]
    },
    {
      id: 'tech',
      title: 'Charging Technology',
      options: [
        { id: 'gan', label: 'GaN Technology', badge: 'Cool' },
        { id: 'pps', label: 'Samsung 45W PPS' }
      ]
    }
  ],
  cables: [
    {
      id: 'connector',
      title: 'Connector Type',
      options: [
        { id: 'c-to-c', label: 'USB-C to USB-C', badge: 'Type-C' },
        { id: 'c-to-lightning', label: 'USB-C to Lightning', badge: 'iOS' },
        { id: 'a-to-c', label: 'USB-A to USB-C' }
      ]
    },
    {
      id: 'length',
      title: 'Cable Length',
      options: [
        { id: '1m', label: '1 Meter (3.3 ft)' },
        { id: '2m', label: '2 Meters (6.6 ft)' },
        { id: '3m', label: '3 Meters (10 ft)' }
      ]
    },
    {
      id: 'power',
      title: 'Power Rating',
      options: [
        { id: '60w', label: '60W Fast Charging' },
        { id: '100w', label: '100W Laptop Grade' },
        { id: '240w', label: '240W Ultra-Power (E-Marker)' }
      ]
    }
  ],
  magsafe: [
    {
      id: 'subType',
      title: 'Accessory Type',
      options: [
        { id: 'powerbank', label: 'Magnetic Power Banks', badge: 'Battery' },
        { id: 'wallet', label: 'Magnetic Wallets & Card Holders' },
        { id: 'car-mount', label: 'MagSafe Car Vent Mounts' },
        { id: 'charging-stand', label: '3-in-1 Charging Stands' },
        { id: 'ring-holder', label: 'Magnetic Ring Grips & Stands' }
      ]
    },
    {
      id: 'magneticStrength',
      title: 'Magnet Strength',
      options: [
        { id: 'halbach', label: 'Ultra-Strong Halbach Array', badge: 'Strong' },
        { id: 'standard', label: 'Standard N52 MagSafe' }
      ]
    }
  ],
  audio: [
    {
      id: 'audioStyle',
      title: 'Wearing Style',
      options: [
        { id: 'tws', label: 'True Wireless Earbuds (TWS)', badge: 'TWS' },
        { id: 'over-ear', label: 'Over-Ear Headphones' },
        { id: 'neckband', label: 'Sports Neckband' },
        { id: 'wired', label: 'Type-C / 3.5mm Wired' }
      ]
    },
    {
      id: 'noiseControl',
      title: 'Noise Cancellation',
      options: [
        { id: 'anc', label: 'Active Noise Cancelling (ANC)', badge: 'ANC' },
        { id: 'enc', label: 'ENC Call Clear Microphones' },
        { id: 'transparency', label: 'Transparency Mode' }
      ]
    },
    {
      id: 'features',
      title: 'Key Audio Features',
      options: [
        { id: 'low-latency', label: 'Low-Latency Gaming Mode' },
        { id: 'ipx', label: 'Water / Sweat Resistant' }
      ]
    }
  ]
};
