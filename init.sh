#!/bin/bash
echo -n ProjectName: 
read PROJECT_NAME

#結果を表示
echo $PROJECT_NAME

cat README.md | sed "s/##PROJECT_NAME##/${PROJECT_NAME}/g" > README.md
cat package.json | sed "s/##PROJECT_NAME##/${PROJECT_NAME}/g" > package.json
