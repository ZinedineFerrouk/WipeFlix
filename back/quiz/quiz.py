##############################################
# Quiz
##############################################
import tkinter as tk
import tkinter.simpledialog as tk_simpledialog
import tkinter.messagebox as tk_messagebox
from tkinter import *
from data import quiz


def check_ans(question, ans, attempts, score):
    if quiz[question]['answer'].lower() == ans.lower():
        print(f"Correct Answer! \nYour score is {score + 1}!")
        return True
    else:
        print(f"Wrong Answer :( \nYou have {attempts - 1} left! \nTry again...")
        return False


def print_dictionary():
    for question_id, ques_answer in quiz.items():
        for key in ques_answer:
            print(key + ':', ques_answer[key])


# Define the function to be executed on button click
def lunch_fatal_quiz():
    # Display a question to the user
    question = "Quel est le mois préféré des poissons ?"
    max_attempts = 3

    for attempt in range(1, max_attempts+1):
        user_input = tk_simpledialog.askstring("Quiz for your files", question + f"\nAttempt {attempt}/{max_attempts}:")
        # Check if the response is correct
        if user_input and user_input.lower() == "avril":
            # Provide feedback to the user
            feedback = "Bonne réponse malheureseument pour toi on va quand même supprimer tes fichiers !"
            break
        elif attempt == max_attempts:
            feedback = "Incorrecte, tu n'as plus aucun essai."
            break
        else:
            # Provide feedback to the user
            feedback = "Incorrecte !, il te reste: " + f'{max_attempts - attempt}'

            # Display the feedback to the user
        tk.messagebox.showinfo("Feedback", feedback)


def generate_quiz_popup():
    root = tk.Tk()
    root.geometry("800x450")
    root.title('Quiz for your files')

    # Create text widget and specify size.
    T = Text(root, height=2, width=400)
    description = """Pour récupèrer vos données vous devez bien répondre à la prochaine question ! Attention vous avez 3 essais !"""

    # Create button for next text.
    b1 = Button(root, text="Commencer", command=lunch_fatal_quiz)

    T.pack()
    b1.pack()

    # Insert The Fact.
    T.insert(tk.END, description)

    tk.mainloop()


generate_quiz_popup()
