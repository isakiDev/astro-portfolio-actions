export const copyTextToClipboard = (textToCopy: string) => {
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(textToCopy);
  }
}