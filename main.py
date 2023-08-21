print("Hello World")
import os
import shutil
# Specify the path to the directory you want to list files from
directory_path = './sayam/cssgo'

# Get a list of file names in the directory
file_names = os.listdir(directory_path)

outCount = 1
sharpCount = 1
# Print the full file names
#Wrap it in func
for file_name in file_names:
    outline = file_name.endswith('outline.svg')
    sharp = file_name.endswith('sharp.svg')
    if outline:
        shutil.move("./sayam/cssgo/"+file_name,'./sayam/fill/')
        outCount = outCount+1
        print("outline:- "+file_name)
        print("Moved")
    elif sharp:
        shutil.move("./sayam/cssgo/"+file_name,'./sayam/stroke/')
        sharpCount = sharpCount+1
        print("sharp:- "+file_name)
    else:
        shutil.move("./sayam/cssgo/"+file_name,'./sayam/normal/')
        print("normal:- "+file_name)

#