export async function saveImageFromUrl(url: string, filePath: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching image: ${response.statusText}`);
  }

  const imageBlob = await response.blob();
  const arrayBuffer = await imageBlob.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  await Deno.writeFile(filePath, uint8Array);
}

export async function readBlobFromFile(completePath: string): Promise<any> {
  try {
    const fileContent = await Deno.readFile(completePath);

    return new Blob([fileContent]);
  } catch (error: any) {
    throw new Error(`Error reading data from file: ${error.message}`);
  }
}

export async function getBase64StringFromImage(path: string): Promise<string> {
  const fileBuffer = await Deno.readFile(path);
  let binary = "";
  const bytes = new Uint8Array(fileBuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64Image = btoa(binary);
  const extension = path.split(".").pop() || "png";

  return `data:image/${extension};base64,${base64Image}`;
}


export async function readFromFile(completePath: string): Promise<any> {
  try {
    const fileContent = await Deno.readFile(completePath);
    
    return fileContent;

  } catch (error:any) {
    throw new Error(`Error reading data from file: ${error.message}`);
  }
}

export async function readTextFromFile(completePath: string): Promise<any> {
  try {
    const fileContent = await readFromFile(completePath);
    const text = new TextDecoder().decode(fileContent);
    
    if (!text) {
      return "";
    }

    return text;

  } catch (error: any) {
    throw new Error(`Error reading text from file: ${error.message}`);
  }
}

export async function readJsonFromFile(completePath: string): Promise<any> {
  try {      
    const text = await readTextFromFile(completePath)
    if (text) {
      return "";
    }

    const jsonData = JSON.parse(text);

    return jsonData;
  } catch (error: any) {
    throw new Error(`Error reading JSON data from file: ${error.message}`);
  }
}

export async function writeToFile(completePath: string, data: string): Promise<void> {
  try {
    await Deno.writeFile(completePath, new TextEncoder().encode(data));
  } catch (error: any) {
    throw new Error(`Error writing JSON data to file: ${error.message}`);
  }
}

export async function writeJsonToFile(completePath: string, data: any): Promise<void> {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    writeToFile(completePath, jsonString);
  } catch (error: any) {
    throw new Error(`Error writing JSON data to file: ${error.message}`);
  }
}