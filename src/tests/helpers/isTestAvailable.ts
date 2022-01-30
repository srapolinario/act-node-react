export default function isTestAvailable(ex: unknown): boolean {
  try {
    const objectStringify = JSON.stringify(ex);
    if (objectStringify === "{}") {
      return false;
    }
    return true;
  } catch (e) {
    return true;
  }
}
