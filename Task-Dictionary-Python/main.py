menu = {
    "pizza": 3.19,
    "popcorn": 4.50,
    "fries": 3.49,
    "chips": 2.59,
    "soda": 0.99,
    "lemonade": 2.00,
    "palov": 5.99,
}
cart = []
total = 0

print("--------- MENU ---------")
for key, value in menu.items():
    print(f"{key:10}: €{value:.2f}")

print("-------------------------")

while True:
    food = input("Select an item (q to quit): ").lower()
    if food == "q":
        break
    elif menu.get(food) is not None:
        cart.append(food)
    else:
        print(f"Sorry we do not have '{food}'!")

print("----------- YOUR ORDER ------------")
for food in cart:
    total += menu.get(food)
    print(food, end=" ")

print()
print(f"Total is: €{total:.2f}")




# print(f"{cart}  You tried to search unavailable items {food}")