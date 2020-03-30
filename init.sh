#!/usr/bin/env bash

echo "Your CMS is $CMT"
yarn contentful login --mt $CMT
yarn contentful space use --space-id $SPACE_ID --environment-id $ENVIRONMENT_ID
