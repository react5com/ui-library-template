export * from './config';

export function ta(t: Function, key: string, options?: any): string[] | null {
  const a = t(key, { ...options, returnObjects: true }) as unknown;
  return Array.isArray(a) ? a as string[] : null;
}

export function to(t: Function, key: string, options?: any): unknown | null {
  const a = t(key, { ...options, returnObjects: true }) as unknown;
  return a;
}
