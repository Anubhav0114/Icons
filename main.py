print("Hello World")
import os

# Specify the path to the directory you want to list files from
directory_path = './sayam/ionicons'

# Get a list of file names in the directory
file_names = os.listdir(directory_path)

outCount = 1
sharpCount = 1
# Print the full file names
for file_name in file_names:
    outline = file_name.endswith('outline.svg')
    sharp = file_name.endswith('sharp.svg')
    if outline:
        os.rename("./sayam/ionicons/"+file_name,'./sayam/outline')
        outCount = outCount+1
        print("outline:- "+file_name)
        print("Moved")
    else:
        print("not outline")
    if sharp:
        sharpCount = sharpCount+1
        print("sharp:- "+file_name)
    else:
        print("not sharp")

print(file_names)
print(outCount)
print(sharpCount)