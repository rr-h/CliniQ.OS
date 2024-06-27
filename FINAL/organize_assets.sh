#!/bin/bash

# Function to create directories and move files based on the build manifest
organize_files() {
    local base_dir=$1
    local manifest_content=$2

    # Parse and organize files according to the manifest
    echo "$manifest_content" | grep -oP '(?<="source":").*?(?=")' | while IFS= read -r file; do
        # Extract the directory path
        dir_path=$(dirname "$file")
        # Create the directory if it doesn't exist
        mkdir -p "$base_dir/$dir_path"
        # Move the file to the correct directory
        if [[ -f "$base_dir/$(basename $file)" ]]; then
            mv "$base_dir/$(basename $file)" "$base_dir/$file"
            echo "Moved: $(basename $file) to $base_dir/$file"
        else
            echo "File not found: $(basename $file)"
        fi
    done
}

# Validate arguments
if [[ $# -ne 3 ]]; then
    echo "Usage: $0 <base_directory> <build_manifest_file> <ssg_manifest_file>"
    exit 1
fi

base_directory=$1
build_manifest_file=$2
ssg_manifest_file=$3

# Check if base directory exists
if [[ ! -d $base_directory ]]; then
    echo "Base directory not found: $base_directory"
    exit 1
fi

# Check if build manifest file exists
if [[ ! -f $build_manifest_file ]]; then
    echo "Build manifest file not found: $build_manifest_file"
    exit 1
fi

# Check if ssg manifest file exists
if [[ ! -f $ssg_manifest_file ]]; then
    echo "SSG manifest file not found: $ssg_manifest_file"
    exit 1
fi

# Read and organize files based on the build manifest
build_manifest_content=$(cat "$build_manifest_file")
organize_files "$base_directory" "$build_manifest_content"

# Read and organize files based on the ssg manifest (if necessary)
ssg_manifest_content=$(cat "$ssg_manifest_file")
# Process the SSG manifest if it contains any relevant information
# This part depends on the exact structure and needs of your project
# Here, we assume it might have similar "source" fields as the build manifest
organize_files "$base_directory" "$ssg_manifest_content"

echo "File organization completed."
