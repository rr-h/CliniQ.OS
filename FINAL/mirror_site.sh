#!/bin/bash

# Validate arguments
if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <website_url>"
    exit 1
fi

website_url=$1

# Check if wget is installed
if ! command -v wget &> /dev/null; then
    echo "wget could not be found, please install it first."
    exit 1
fi

# Create a directory for the downloaded website
output_dir="hifilabs_mirror"
mkdir -p $output_dir

# Use wget to mirror the website
wget \
    --mirror \
    --convert-links \
    --adjust-extension \
    --page-requisites \
    --no-clobber \
    --span-hosts \
    --domains=$(echo $website_url | awk -F[/:] '{print $4}') \
    --directory-prefix=$output_dir \
    $website_url

echo "Website mirroring completed. Files are saved in the '$output_dir' directory."
