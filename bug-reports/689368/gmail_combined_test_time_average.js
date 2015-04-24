var path_compiled = "/Users/cstipkovic/Documents/Projects/github/cstipkovic/Parallel-Computing-Javascript/bug-reports/689368/parse-tests/gmail_combined.js",
    testHits = 100,
    total = 0;

function gmail_combined () {
    for (i =0; i < testHits; i++) {
        start = new Date();
        compile(snarf(path_compiled));
        end = new Date();
        print(end - start);
        total += end - start;
    }

    print('\nAverage: ' + total / testHits);
}
gmail_combined();
// dis(gmail_combined);
