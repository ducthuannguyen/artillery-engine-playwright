#! /bin/bash

for scenarioFile in `ls scenarios/*.yml` ; do
  artillery run -e staging ./$scenarioFile
done

# ref: https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/