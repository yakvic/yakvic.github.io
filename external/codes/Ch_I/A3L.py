"""
Python-Skript A3L.py
Lösung zur Aufgabe A3
"""

import math # Import des math-Moduls

a, b, c = 1.0, 2.0, -3.0 # Definitionen der Variablen und Zuweisung von Werten:
print("a = ", a, ", b = ", b, ", c = ", c, sep = '') # Ausgabe von a, b, c

# Ausgabe der Form der Quad. Gleichung:
print("Die quadratische Gleichung lautet: (",
      a, ")*x^2 + (", b,")*x + (", c,") = 0", sep = '') 

# Berechnung der Diskriminante:
D = b**2 - 4*a*c

# Berechnung der Lösungen:
if D >= 0: # Diskriminante ist nicht-negativ ==> 2 Lösungen 
	x1 = (-b + math.sqrt(D))/(2*a)  
	x2 = (-b - math.sqrt(D))/(2*a)
	print("Die Diskriminante D = b^2 - 4*a*c = ", D, " > 0 ==>" +
          "\n" + "Zwei Lösungen der Gleichung lauten:",
          " x1 = ", x1, ", x2 = ", x2, sep = '')
else:
	print("Fehler: Die Diskriminante D =", D, "< O")
	print("==> keine Lösungen! ==> Programmabbruch!")
	exit() # Mit diesem Befehl wird der Programmablauf abgebrochen

print(70*'_' +
      "\nDas Programm ist erfolgreich beendet!")
