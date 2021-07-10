const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries(type) {
  const entries = await client.getEntries({ content_type: type });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchPages() {
  const res = await fetchEntries("page");
  const pages = await res.map((c) => {
    return c.fields;
  });
  return pages;
}

export async function fetchPage(slug) {
  return (await fetchPages()).find((page) => page.slug === slug);
}

export async function fetchCard(id) {
  return await client.getEntry(id);
}

export default { fetchEntries, fetchPages };
