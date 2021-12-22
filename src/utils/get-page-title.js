export default function getPageTitle(pageTitle, title) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
