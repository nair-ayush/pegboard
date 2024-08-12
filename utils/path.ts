function getSeparator(path: string): string {
  return path.includes("/") ? "/" : "\\";
}

export function getCurrentFolderNameFromPath(path: string): string {
  const sep = getSeparator(path);
  const pathAfterSeperation = path.substring(path.lastIndexOf(sep) + 1);
  return pathAfterSeperation;
}
