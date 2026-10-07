"""
Python-Skript Kreisflaeche.py
zur Berechnung von Umfang und Fläche eines Kreises mit vorgegebenem Radius r

Datum: 01.01.2026
Autor: *****
"""

# Definition und Zuweisung von Variablen:
pi = 3.14159  # Die Kreiszahl $\pi = 3.141592653589793$
radius = 1.5  # Der Kreisradius $r$

# Berechnungen:
umfang = 2*radius*pi  # Der Kreisumfang = 2 * pi * r
flaeche = pi*radius**2  # Die Kreisflaeche = pi * r**2

# Programmausgabe:
print("Radius = ", radius, ", Umfang = ", umfang, ", Flaeche = ", flaeche, sep = "")
print(51 * "-", "\nDas Programm ist erfolgreich beendet!")
