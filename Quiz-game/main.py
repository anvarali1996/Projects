# =======//////===-- PYTHON QUIZ GAME --=======////////=====

questions = ("What is capital city of Uzbekistan?: ",
            "Which animal lays the largest egss?: ",
            "What is the most abundant gas in Earth's atmosphere?: ",
            "How many bones are in the human body?: ")

options = (("A. Bishkek", "B. Tashkent", "C. Astana", "D. Riga"),
           ("A. Whale", "B. Crocodile", "C. Elephant", "D. Ostrich"),
           ("A. Nitrogen", "B. Oxygen", "C. Carbon-Dioxide", "D. Hydrogen"),
           ("A. 206", "B. 207", "C. 208", "D. 209"))

answers = ("B", "D", "A", "A")
guesses = []
score = 0
question_num = 0

for question in questions:
    print("------=-----=-----=-----=----")
    print(question)
    for option in options[question_num]:
        print(option)

    guess = input("Enter (A, B, C, D): ").upper()
    guesses.append(guess)
    if guess == answers[question_num]:
        score += 1
        print("CORRECT")
    else:
        print("INCORRECT")
        print(f"{answers[question_num]} is the correct answer!!!")
    question_num += 1

print("-----------------------------")
print("           RESULT           ")
print("-----------------------------")

print("answers: ", end="")
for answer in answers:
    print(answer, end=" ")
print()

print("guesses: ", end="")
for guess in guesses:
    print(guess, end=" ")
print()

score = int(score / len(questions) * 100)
print(f"Your score is: {score}%")

# fruits = ["apple", "orange", "banana", "coconut"]
# vegetables = ["celery", "carrots", "potatoes"]
# meats = ["chicken", "fish", "turkey"]
#
# groceries = [fruits, vegetables, meats]
#
# print(groceries[0])

# grocceries = [["apple", "orange", "banana", "coconut"],
#         ["celery", "carrots", "potatoes"],
#         ["chicken", "fish", "turkey"]]
#
# for collection in grocceries:
#     for food in collection:
#         print(food, end=" ")
#     print()

# num_pad = ((1,2,3),
#            (4,5,6),
#            (7,8,9),
#            ("*", 0, "#"))
#
# for row in num_pad:
#     for column in row:
#         print(column, end=" ")
#     print()

# for row in num_pad:
#     print(row)
# print(num_pad[0], [1], [2], [3])