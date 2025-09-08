import fs from "fs/promises"

export async function readPosts(){
    try {
        const data = await fs.readFile("./posts.json", "utf8");
        console.log("File content:", data);
        return data
    } catch (error) {
        console.error("Error reading file:", error);
    }
}
