##############################################
# Generate Meme Image
##############################################

import requests, jsons, constant, tkinter as tk, random
from tkinter import CENTER
from PIL import Image, ImageTk

def get_memes():
    response = requests.request("GET", constant.URL)

    return response.content

def get_memes_image(data):
    array = []

    for item in data:
        array.append(item["url"])
    
    return array

# Créer une instance de la classe Tk
def generate_popup(imageUrl):
    root = tk.Tk()
    root.title('Netflix installer (v6.98.1805.0)')
    
    if constant.POPUP_MODE == "fullscreen":
        root.attributes('-fullscreen', True)
    else:
        root.state('zoomed')

    # Charger une image
    image = Image.open(imageUrl)

    # Redimensionner l'image
    wpercent = (constant.IMAGE_WIDTH / float(image.size[0]))
    hsize = int((float(image.size[1]) * float(wpercent)))
    image = image.resize((constant.IMAGE_WIDTH, hsize), Image.Resampling.LANCZOS)

    # Créer un objet ImageTk pour afficher l'image dans Tkinter
    image_tk = ImageTk.PhotoImage(image)

    # Créer un widget Label pour afficher l'image
    label = tk.Label(root, image=image_tk, width= constant.SCREEN_WIDTH, height= constant.SCREEN_HEIGHT, anchor= CENTER)
    label.pack()

    # Démarrer la boucle principale de l'interface utilisateur
    root.mainloop()

memes = jsons.loadb(get_memes())["memes"]
memesArray = get_memes_image(memes)

for x in range(constant.POPUP_COUNT):
    rand = random.randint(0, len(memesArray))
    generate_popup(requests.get(memesArray[rand], stream=True).raw)
