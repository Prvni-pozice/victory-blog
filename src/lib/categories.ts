export type CategorySlug = 'novinky' | 'servis' | 'elektricke-dodavky';
export type SubcategorySlug = 'pro-vinare' | 'pro-mesta' | 'sklapecka';

export interface Subcategory {
  slug: SubcategorySlug;
  name: string;
  desc: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  desc: string;
  subcategories?: Subcategory[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'novinky',
    name: 'Novinky',
    desc: 'Nejnovější dění ze světa Victory Auto a elektromobility — uvedení nových modelů, partnerství, dotace a legislativa.',
  },
  {
    slug: 'servis',
    name: 'Servis',
    desc: 'Údržba, péče a technická dokumentace pro provozovatele e-dodávek. Servisní intervaly, zimní příprava, životnost baterie.',
  },
  {
    slug: 'elektricke-dodavky',
    name: 'Elektrické dodávky',
    desc: 'Vše o elektrických užitkových vozech — od pořízení po každodenní provoz. Případové studie z provozu napříč ČR a SR.',
    subcategories: [
      { slug: 'pro-vinare', name: 'Pro vinaře', desc: 'E-dodávky ve vinařském provozu — tichý chod, terén, sklizňové sezóny.' },
      { slug: 'pro-mesta', name: 'Pro města', desc: 'Městské služby, svoz odpadu, údržba zeleně — proč města přecházejí na elektřinu.' },
      { slug: 'sklapecka', name: 'Elektrická sklápěčka', desc: 'Sklápěcí korba, užitečné zatížení, srovnání modelů.' },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubcategory(catSlug: string, subSlug: string): Subcategory | undefined {
  const cat = getCategory(catSlug);
  return cat?.subcategories?.find((s) => s.slug === subSlug);
}

export const SITE = {
  name: 'Victory Auto · Blog',
  brandShort: 'Victory',
  url: 'https://blog.victoryauto.cz',
  mainSiteUrl: 'https://www.victoryauto.cz',
  description: 'Blog o elektrických užitkových vozech, servisu a praxi Victory Auto. Případové studie, srovnání, dotace.',
  phone: '+420 770 123 456',
  email: 'info@victoryauto.cz',
  address: 'Na Pankráci 1683, 140 00 Praha 4',
  social: {
    facebook: 'https://www.facebook.com/victoryauto',
    youtube: 'https://www.youtube.com/@victoryauto',
    linkedin: 'https://www.linkedin.com/company/victory-auto',
  },
  founded: 2018,
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('cs-CZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
