import definePlugin from "@utils/types";

export default definePlugin({
    name: "SplitLargeMessages",
    description: "split long lines of text into multiple messages",
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