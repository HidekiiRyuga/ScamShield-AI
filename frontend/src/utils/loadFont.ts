export async function loadFontAsBase64(
  fontUrl: string
) {
  const response = await fetch(fontUrl);

  const blob = await response.blob();

  return new Promise<string>((resolve) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result =
        reader.result as string;

      resolve(
        result.split(",")[1]
      );
    };

    reader.readAsDataURL(blob);
  });
}