##############################################
# Configuration file
##############################################

from dotenv import load_dotenv
import os, pyautogui
load_dotenv()

POPUP_COUNT = 2
IMAGE_WIDTH = 600
POPUP_MODE = "maximize" # fullscreen or maximize
URL  = os.environ['MEME_API_URL']
SCREEN_WIDTH, SCREEN_HEIGHT = pyautogui.size()
