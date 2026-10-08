import rawDeviceTree from './joy-telecom-device-tree.json';
import type { DeviceTree, DeviceTypeNode, DeviceBrand, DeviceModel } from '$lib/types';
import {
  SmartPhone01Icon,
  Tablet01Icon,
  Watch01Icon,
  HeadsetIcon
} from '@hugeicons/core-free-icons';

export const DEVICE_TREE: DeviceTree = rawDeviceTree as DeviceTree;

// Device type icon mapping
export const DEVICE_ICONS: Record<string, any> = {
  phone: SmartPhone01Icon,
  tablet: Tablet01Icon,
  watch: Watch01Icon,
  audio: HeadsetIcon
};

/**
 * Authentic brand logo URLs from official SVG CDN (Simple Icons)
 * with official high-res website favicons for brands not in Simple Icons.
 */
export const BRAND_LOGOS: Record<string, string> = {
  apple: 'https://cdn.simpleicons.org/apple/000000',
  samsung: 'https://cdn.simpleicons.org/samsung/1428A0',
  google: 'https://cdn.simpleicons.org/google',
  xiaomi: 'https://cdn.simpleicons.org/xiaomi/FF6900',
  oneplus: 'https://cdn.simpleicons.org/oneplus/F5010C',
  vivo: 'https://cdn.simpleicons.org/vivo/008CD6',
  oppo: 'https://cdn.simpleicons.org/oppo/007337',
  realme: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://realme.com&size=128',
  nothing: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://nothing.tech&size=128',
  motorola: 'https://cdn.simpleicons.org/motorola/00143B',
  honor: 'https://cdn.simpleicons.org/honor/000000',
  lenovo: 'https://cdn.simpleicons.org/lenovo/E2231A',
  amazfit: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amazfit.com&size=128',
  huawei: 'https://cdn.simpleicons.org/huawei/CF0A2C',
  garmin: 'https://cdn.simpleicons.org/garmin/007CC3',
  sony: 'https://cdn.simpleicons.org/sony/000000',
  'anker-soundcore': 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://soundcore.com&size=128',
  jbl: 'https://cdn.simpleicons.org/jbl/FF3300'
};

export function getBrandLogo(brandId: string): string {
  return BRAND_LOGOS[brandId] || `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${brandId}.com&size=128`;
}

/**
 * Returns all top-level device types with their associated icons and metadata
 */
export function getDeviceTypes() {
  return DEVICE_TREE.map(node => ({
    id: node.id,
    label: node.label,
    sublabel: node.sublabel,
    badge: node.badge,
    icon: DEVICE_ICONS[node.id] || SmartPhone01Icon,
    brandCount: node.brands.length
  }));
}

/**
 * Returns all brands for a specific device type
 */
export function getBrandsForType(deviceTypeId: string | null): DeviceBrand[] {
  if (!deviceTypeId) return [];
  const node = DEVICE_TREE.find(t => t.id === deviceTypeId);
  return node ? node.brands : [];
}

/**
 * Returns popular brands for quick-access grid in a device category
 */
export function getPopularBrands(deviceTypeId: string | null): DeviceBrand[] {
  const brands = getBrandsForType(deviceTypeId);
  return brands.filter(b => b.isPopular);
}

/**
 * Returns all models for a specific device type and brand
 */
export function getModelsForBrand(deviceTypeId: string | null, brandId: string | null): DeviceModel[] {
  if (!deviceTypeId || !brandId) return [];
  const brands = getBrandsForType(deviceTypeId);
  const brand = brands.find(b => b.id === brandId);
  return brand ? brand.models : [];
}

/**
 * Returns all distinct series names for a brand's models (with "All" as first item)
 */
export function getSeriesChipsForBrand(models: DeviceModel[]): string[] {
  const seriesSet = new Set<string>();
  models.forEach(m => {
    if (m.series) seriesSet.add(m.series);
  });
  return ['All', ...Array.from(seriesSet)];
}

/**
 * Multi-attribute search matching model name, series, and regional aliases
 */
export function filterModelsWithAliases(
  models: DeviceModel[],
  query: string,
  selectedSeries: string = 'All'
): { model: DeviceModel; matchedAlias?: string }[] {
  let list = models;
  if (selectedSeries && selectedSeries !== 'All') {
    list = list.filter(m => m.series === selectedSeries);
  }

  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) {
    return list.map(model => ({ model }));
  }

  const results: { model: DeviceModel; matchedAlias?: string }[] = [];

  for (const m of list) {
    // 1. Direct name match
    if (m.name.toLowerCase().includes(cleanQuery)) {
      results.push({ model: m });
      continue;
    }

    // 2. Alias match
    const matchedAlias = m.aliases?.find(a => a.toLowerCase().includes(cleanQuery));
    if (matchedAlias) {
      results.push({ model: m, matchedAlias });
      continue;
    }

    // 3. Series match
    if (m.series && m.series.toLowerCase().includes(cleanQuery)) {
      results.push({ model: m });
    }
  }

  return results;
}

/**
 * Lookup a model by slug across the entire catalog
 */
export function getModelBySlug(slug: string): { model: DeviceModel; brand: DeviceBrand; deviceType: DeviceTypeNode } | null {
  for (const deviceType of DEVICE_TREE) {
    for (const brand of deviceType.brands) {
      const model = brand.models.find(m => m.slug === slug || m.id === slug);
      if (model) {
        return { model, brand, deviceType };
      }
    }
  }
  return null;
}
