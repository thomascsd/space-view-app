// Generated by https://quicktype.io

export interface NasaAsset {
  collection: NasaAssetCollection;
}

export interface NasaAssetCollection {
  href: string;
  items: NasaAssetItem[];
  version: string;
}

export interface NasaAssetItem {
  href: string;
}
