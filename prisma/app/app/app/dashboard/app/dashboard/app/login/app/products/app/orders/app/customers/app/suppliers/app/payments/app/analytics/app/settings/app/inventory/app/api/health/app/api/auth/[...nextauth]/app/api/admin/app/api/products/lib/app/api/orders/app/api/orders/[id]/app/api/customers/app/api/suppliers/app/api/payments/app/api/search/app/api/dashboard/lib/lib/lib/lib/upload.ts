export async function upload(file: File) {
  return {
    success: true,
    filename: file.name,
  };
}
