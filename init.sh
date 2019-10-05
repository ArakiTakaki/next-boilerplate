#!/bin/bash
echo -n ProjectName: 
read PROJECT_NAME

#結果を表示
echo $PROJECT_NAME

sed -i '' "s/##PROJECT_NAME##/${PROJECT_NAME}/g" ./README.md
sed -i '' "s/PROJECT_NAME/${PROJECT_NAME}/g" ./package.json
