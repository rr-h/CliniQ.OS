import os
import re

# Define the directory containing the files
directory = './clone/hifilabs.co'

# Define the replacement function
def replace_self_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace instances of 'self' with a safe alternative
    content = re.sub(r'self', '(typeof window !== "undefined" ? window : this)', content)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

# Walk through the directory and replace 'self' in all JS files
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.js'):
            file_path = os.path.join(root, file)
            replace_self_in_file(file_path)

print("Replacement complete.")
