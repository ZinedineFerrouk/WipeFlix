# # Show alert box with monitor screen sizes.
# # pyautogui.alert(str(screenWidth) + 'x' + str(screenHeight), 'Monitor sizes', 'Ok, I got it!')
# # Show input box for get password user.
# pswd = pyautogui.password(text='Login', title='Tape your password')
# # print password user if exist.
# if pswd:
#     print(pswd)
# else:
#     print('No password')

# import tkinter as tk
# from tkinter import messagebox

# # Créer une instance de la classe Tk
# root = tk.Tk()

# # Fonction appelée lorsque le bouton est cliqué
# def popup_message():
#     messagebox.showinfo("Titre de la fenêtre", "Contenu du message")

# # Créer un bouton qui affiche une popup lorsqu'il est cliqué
# button = tk.Button(root, text="Afficher la popup", command=popup_message)
# button.pack()

# # Démarrer la boucle principale de l'interface utilisateur
# root.mainloop()


# for x in range(1):
#     popup_message("exemple.jfif")


import tkinter as tk

root= tk.Tk()

root.title('Netflix installer (v6.98.1805.0)')
canvas1 = tk.Canvas(root, width = 300, height = 300)
canvas1.pack()

def hello ():  
    label1 = tk.Label(root, text= 'Hello World!', fg='blue', font=('helvetica', 12, 'bold'))
    canvas1.create_window(150, 200, window=label1)
    
button1 = tk.Button(text='Click Me', command=hello, bg='brown',fg='white')
canvas1.create_window(150, 150, window=button1)

root.mainloop()