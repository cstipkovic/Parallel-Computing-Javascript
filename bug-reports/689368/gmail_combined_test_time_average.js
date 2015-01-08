var path_compiled = "/Users/cstipkovic/Documents/Projects/github/cstipkovic/Parallel-Computing-Javascript/bug-reports/689368/parse-tests/gmail_combined.js";

start = new Date();
compile(snarf(path_compiled));
end = new Date();
print(end - start);
gc();

