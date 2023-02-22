##############################################
# Hide files from directory
##############################################

import os, constant, ctypes

# Global variables
path = constant.FILES_FOLDER
attribute = constant.FILE_ATTRIBUTE_HIDDEN

# Hide files from directory function
def hide_files_from_directory(files):

    for file in files:
        ret = ctypes.windll.kernel32.SetFileAttributesW(path + "\\" + file, attribute)

        if ret:
            print('attribute set to Hidden')
        else:  # return code of zero indicates failure -- raise a Windows error
            raise ctypes.WinError()

    # Open folder with hidden files
    path = os.path.realpath(path)
    os.startfile(path)

# Run function
files = os.listdir(path)
hide_files_from_directory(files)
