import definePlugin from "@utils/types";

export default definePlugin({
    name: "WriteUpperCase",
    description: "you wtite an uppercase in each first sentence",
    authors: [
        {
            id: 0n,
            name: "jus_search_on_BD",
        },
    ],
    patches: [],
    // Delete these two below if you are only using code patches
    start() {},
    stop() {},
});