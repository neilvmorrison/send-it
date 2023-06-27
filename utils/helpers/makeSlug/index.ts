export default function makeSlug(name: string): string {
  const slugRegex = /[^\w]/g;
  return name.replace(slugRegex, "").toLocaleLowerCase();
}
