"""
Python-Skript Kreisflaeche.py
zur Berechnung von Umfang und Fläche eines Kreises mit vorgegebenem Radius r

Datum: 01.01.2025
Autor: *****
"""

# --- Definition und Zuweisung von Variablen ---
pi = 3.14159  # Die Kreiszahl $\pi = 3.141592653589793$
radius = 1.5  # Der Kreisradius $r$

# --- Berechnungen ---
umfang = 2 * radius * pi  # Der Kreisumfang $= 2 \cdot \pi \cdot r$
flaeche = pi * radius**2  # Die Kreisflaeche $= \pi \cdot r^2$

# --- Programmausgabe ---
print("Radius = ", radius, ", Umfang = ", umfang, ", Flaeche = ", flaeche, sep = "")
print(51 * "-" + "\nDas Programm ist erfolgreich beendet!")
# print('Radius = {rad:3.1f}, Umfang = {umf:9.7f}, Flaeche = {flaech:9.7f}'.
#     format(rad = radius, umf = umfang, flaech = flaeche))
