#!/bin/bash

# Define the central DigestedCode directory
central_digested_code_dir="/home/rr-h/Documents/DigestedCode"

# Get the current directory as the root directory
root_dir="$(pwd)"

# Define the output file name based on the root directory name
output_file="$(basename "$root_dir").txt"

# Clear the output file if it exists
> "$output_file"

# Function to process files
process_files() {
  local dir="$1"
  find "$dir" \( -name "node_modules" -o -name "DigestedCode" -o -name "fonts" -o -name "package-lock.json" -o -name ".git" \) -prune -o -type f \( ! -iname "*.jpg" ! -iname "*.jpeg" ! -iname "*.png" ! -iname "*.zip" ! -iname "*.gif" ! -iname "*.bmp" ! -iname "*.svg" ! -iname "*.webp" ! -iname "*.gz" ! -iname "*.ico" ! -iname "*.otf" ! -iname "*.icon" ! -iname "*.heic" ! -iname "*.heif" ! -iname "*.tff" ! -iname "*.ttf" ! -iname "*.tiff" ! -iname "*.dll" ! -iname "*.map" ! -iname "*.docx" ! -iname "*.xlsx" ! -iname "*.xls" ! -iname "*.pdb" ! -iname "*.cache" ! -iname "*.mp3" ! -iname "*.mp4" ! -iname "*.woff" ! -iname "*.woff2" ! -iname "*.pack" ! -iname "*.woff2" \) -print | while read -r file; do
    # Check if the file name starts with "bak." or "1"
    basename=$(basename "$file")
    if [[ "$basename" == bak.* || "$basename" == 1* ]]; then
      echo "Ignoring file: $file"
      continue
    fi

    # Temporary file to store processed content
    tmp_file=$(mktemp)

    # Process each line of the file
    while IFS= read -r line; do
      # Check if the line is longer than 1000 characters (adjust as needed)
      if [[ ${#line} -gt 1000 ]]; then
        echo "Ignoring long base64 line: $line"
      else
        echo "$line" >> "$tmp_file"
      fi
    done < "$file"

    # Get the filename in capitals
    filename=$(basename "$file")
    filename_upper=$(echo "$filename" | tr '[:lower:]' '[:upper:]')

    # Write the filename to the output file
    echo "$filename_upper" >> "$output_file"
    echo "" >> "$output_file"

    # Write the processed file content to the output file
    cat "$tmp_file" >> "$output_file"
    echo -e "\n\n" >> "$output_file"

    # Remove the temporary file
    rm "$tmp_file"
  done
}

# Start processing from the current directory
process_files "$root_dir"

echo "All files have been processed and consolidated into $output_file."

# Function to split text file into 7 equal parts
split_text_file() {
    local input_file=$1
    local input_filename=$(basename "$input_file")
    local output_prefix="${input_filename}_part_"
    
    # Check if the file exists
    if [[ ! -f $input_file ]]; then
        echo "File not found!"
        exit 1
    fi

    # Create the subdirectory in the central DigestedCode directory
    output_dir="$central_digested_code_dir/$input_filename"
    rm -rf "$output_dir"
    mkdir -p "$output_dir"
    
    # Calculate total number of lines in the file
    total_lines=$(wc -l < "$input_file")
    
    # Calculate lines per part
    lines_per_part=$(( (total_lines + 9) / 7 ))  # Add 9 to ensure rounding up

    # Split the file
    split -l $lines_per_part -d --additional-suffix=.txt "$input_file" "$output_dir/$output_prefix"

    # Rename the files to have sequential numbering starting from 1
    counter=1
    for file in $output_dir/${output_prefix}*; do
        mv "$file" "$output_dir/${output_prefix}${counter}.txt"
        echo "Created $output_dir/${output_prefix}${counter}.txt"
        ((counter++))
    done
}

# Call the function with the generated output file
split_text_file "$output_file"
