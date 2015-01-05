#!/bin/bash

for i in {1..100}
do
~/Documents/Projects/github/cstipkovic/gecko-dev/js/src/build_OPT.OBJ/js/src/js -e 'start = new Date(); compile(snarf("/Users/cstipkovic/Documents/Projects/github/cstipkovic/Parallel-Computing-Javascript/bug-reports/689368/parse-tests/gmail_combined.js")); end = new Date(); print(end - start)'
done

#for ((a = 0; a < LIMIT; a++)) do
#	echo $TABLE_TIME[a]
#done
