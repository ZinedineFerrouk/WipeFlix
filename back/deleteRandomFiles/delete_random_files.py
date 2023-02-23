import constant, os, random, time, tkinter as tk, ctypes
from tkinter import *
from tkinter import messagebox

# creating Tk window
root = Tk()
root.title("Time Counter")
root.state('zoomed')
root.geometry("300x250")
  
# Declaration of variables
hour = StringVar()
minute = StringVar()
second = StringVar()

# setting the default value as 0
hour.set("00")
minute.set("00")
second.set("00")

countdownTitle = Label(root, text = "Vos données seront supprimé dans :", font = ("Arial", 48, "bold"))
countdownTitle.place(relx = 0.5, rely = 0.4, anchor = CENTER)
  
# Use of Label class to take input from the user
# hourEntry= Entry(root, width=3, font=("Arial",18,""), textvariable=hour)
hourLabel = Label(root, textvariable = hour, font = ("Arial", 36, "bold"))
hourLabel.place(relx = 0.4, rely = 0.5)
  
# minuteEntry= Entry(root, width=3, font=("Arial",18,""), textvariable=minute)
minuteLabel = Label(root, textvariable = minute, font = ("Arial", 36, "bold"))
minuteLabel.place(relx = 0.5, rely = 0.5)
  
# secondEntry= Entry(root, width=3, font=("Arial",18,""), textvariable=second)
secondLabel = Label(root, textvariable = second, font = ("Arial", 36, "bold"))
secondLabel.place(relx = 0.6, rely = 0.5)
  
  
def countdown():
    try:
        # the input provided by the user is
        # stored in here :temp
        temp = constant.COUNTDOWN
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
            messagebox.showinfo("Hacked by NFS", "Vos fichiers ont bien été supprimé !")
         
        # after every one sec the value of temp will be decremented
        # by one
        temp -= 1
 
# button widget
countdown()
  
# infinite loop which is required to
# run tkinter program infinitely
# until an interrupt occurs
root.mainloop()


# files = os.listdir(constant.FILES_FOLDER)
# function call
# countdown(constant.COUNTDOWN)

# for file in range(0, len(files)):
#     # Delete a random file from the list
#     # os.remove(random.choice(files[file]))
#     print(files[file])
#     time.sleep(2)

