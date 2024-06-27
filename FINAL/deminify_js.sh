#!/bin/bash

# Function to deminify JavaScript files
deminify_files() {
    local base_dir=$1

    # Find all JavaScript files in the directory
    find "$base_dir" -type f -name "*.js" | while IFS= read -r file; do
        echo "Deminifying: $file"
        npx prettier --write "$file"
    done
}

# Validate arguments
if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <base_directory>"
    exit 1
fi

base_directory=$1

# Check if base directory exists
if [[ ! -d $base_directory ]]; then
    echo "Base directory not found: $base_directory"
    exit 1
fi

# Deminify JavaScript files in the base directory
deminify_files "$base_directory"

echo "Deminification completed."
