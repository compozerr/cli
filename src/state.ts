export const State = {
    getAsync: async <T>(key: string): Promise<T | null> => {
        const kv = await Deno.openKv("/tmp/kv.db");

        const value = (await kv.get([key])).value as T | null;

        kv.close();

        return value;
    }
}