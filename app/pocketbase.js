import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL);
pb.autoCancellation(false); // disables abort on client reuse

export { pb };
