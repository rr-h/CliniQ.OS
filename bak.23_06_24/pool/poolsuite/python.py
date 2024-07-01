import os
import re

# Define the source file and the destination directory
SOURCE_FILE = './chunk-vendors.611cb757.js'
DEST_DIR = './src/modules'

# Create the destination directory if it doesn't exist
os.makedirs(DEST_DIR, exist_ok=True)

# Function to extract function code from the source file
def extract_function(function_id, output_file):
    try:
        in_function = False
        brace_count = 0
        function_code = []

        with open(SOURCE_FILE, 'r') as file:
            for line in file:
                # Debug: Print lines being read
                print(f"Reading line: {line.strip()}")

                if re.search(fr"{function_id}: function", line):
                    in_function = True
                    brace_count = 1  # Start counting braces
                    function_code.append(f"(self['webpackChunkpoolsuite'] = self['webpackChunkpoolsuite'] || []).push([ [998], {{ {function_id}: function(e, t, n) {{\n")
                    function_code.append(line)
                    # Debug: Print when the function start is detected
                    print(f"Detected start of function {function_id}")
                    continue

                if in_function:
                    function_code.append(line)
                    brace_count += line.count('{')
                    brace_count -= line.count('}')
                    
                    if brace_count == 0:
                        in_function = False
                        function_code.append(f"}} ]); export default function {function_id}() {{}}\n")
                        # Debug: Print when the function end is detected
                        print(f"Detected end of function {function_id}")
                        break

        if function_code:
            with open(output_file, 'a') as f:
                f.writelines(function_code)
            print(f"Extracted function {function_id} to {output_file}")
        else:
            print(f"Failed to extract function {function_id} to {output_file}")

    except Exception as e:
        print(f"An error occurred while extracting function {function_id}: {e}")

# Ensure the function file is created or overwritten
def ensure_file(function_id, output_file):
    extract_function(function_id, output_file)

# UA Parser Module
ensure_file(29293, f"{DEST_DIR}/UaParser.js")

# HTTP Request Module
ensure_file(46037, f"{DEST_DIR}/HttpRequest.js")

# Axios Initialization and Configuration
ensure_file(48438, f"{DEST_DIR}/AxiosConfig.js")

# Cancel Token Module
ensure_file(63648, f"{DEST_DIR}/CancelToken.js")

# Utility Functions Module
utils_file = f"{DEST_DIR}/utils.js"
for function_id in [37540, 42449, 53117, 72617, 91023]:
    ensure_file(function_id, utils_file)

# Add module exports to utils.js
with open(utils_file, 'a') as f:
    f.write("export default function utils() {\n  // Exported utils functions\n}\n")

# Create or overwrite the main module file
MAIN_MODULE = './src/MainModule.js'
os.makedirs(os.path.dirname(MAIN_MODULE), exist_ok=True)
with open(MAIN_MODULE, 'w') as f:
    f.write("""
import UAParser from './modules/UaParser';
import httpRequest from './modules/HttpRequest';
import axiosConfig from './modules/AxiosConfig';
import cancelToken from './modules/CancelToken';
import utils from './modules/utils';

export {
  UAParser,
  httpRequest,
  axiosConfig,
  cancelToken,
  utils
};
""")
print(f"Splitting completed. Check the {DEST_DIR} for the separated modules and {MAIN_MODULE} for the main module.")
