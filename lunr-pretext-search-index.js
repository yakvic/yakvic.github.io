var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Einleitung",
  "level": "1",
  "url": "Einleitung.html",
  "type": "Kapitel",
  "number": "0",
  "title": "Einleitung",
  "body": " Einleitung                  Dieses Buch und auch der damit verbundene Programmierkurs beschäftigen sich mit Algorithmen. Algorithmen ...    sind Verarbeitungsvorschriften zur Lösung von Problemen, die so exakt formuliert sind, dass sie von Maschinen abgearbeitet werden können.  Algorithmen sind eine wesentliche Grundlage von Computerprogrammen.  Sie legen letztlich fest, wie der Computer die jeweiligen Aufgaben erledigen soll.    Alt text for accessibility    In diesem Kurs wollen wir über Algorithmen nicht nur theoretisch gut reden, sondern auch sie am PC praktisch umsetzen und ausführen. Dafür wird die Programmiersprache Python durchgehend benutzt, die für das Buch zum Thema Algorithmen am besten geeignet zu sein scheint. Dies gilt vorwiegend deshalb, weil sich die Python Syntax erfahrungsgemäss als sehr einfach, vor allem für Programmieranfänger, zu verstehen erweist. Weitere Gründe sind, dass Python eine verbreitete und gut dokumentierte Programmiersprache, die auch auf allen gängigen Betriebssystemen kostenlos herunterladbar und leicht installierbar ist. Dies sind nur einige der vielen Merkmale und Vorteile, wieso Python heutzutage als eine der am häufigsten verwendeten Programmiersprachen für Einsteiger und Fortgeschrittene gilt. Abgesehen von professionellen Anwendung hat sich Python auch besonders gut auf der Sekundarstufe II bewährt, wo er als ein nützliches Werkzeug zum Einsatz kommt, um mathematische Aussagen nachzurechnen, Vermutungen zu überprüfen, Algorithmen zu testen und physikalische Vorgänge zu simulieren.  Wie bei anderen Programmiersprachen braucht man auch in Python manchmal Programmieransätze, die für Anfänger schwerverständlich, quasi magisch sind. Das fachdidaktische Konzept dieses Buchs zielt unter anderem darauf ab, solche Programmfragmente möglichst verständlich zu machen und auf magische Aspekte, die erst für Fortgeschrittene verständlich werden, wo immer möglich zu verzichten. Aufgrund hoher Flexibilität von Python besteht einer seiner Vorteile darin, dass man bei ersten Programmierschritten derartige heikle Problematiken erfreulicherweise nicht bis ins Detail eingehen muss. Dies steht in keinem Konflikt mit dem Hauptziel dieser Abhandlung, die in erster Linie als ein Arbeitsbuch durchdacht und konzipiert ist. Hierbei werden alle grundlegenden Programmierkonzepte anhand zahlreicher praktischer Beispiele und Pflichtaufgaben illustriert und ausführlich erläutert. All diese sind in der Regel nach allmählich ansteigendem Schwierigkeitsniveau geordnet. Zur Vertiefung der Programmierkenntnisse werden auch mehrere zusätzliche Eigenübungen sowie Projektthemen von höherer Schwierigkeitsgrad zur Verfügung gestellt. Dabei lassen sich sämtliche im Buch vorgestellte Python Scripte direkt rauskopieren, um sowohl deren Ausführung als auch späteren Einsatz bei Eigenprogrammen zu ermöglichen.  Als Lernumgebung für die Python Programmierung wird in den ersten X Kapiteln dieses Kurses meistens das Programm TigerJython benutzt. Der Kürze halber wird TigerJython im Folgenden einfach als TJ bezeichnet. Dieses PC Programm hat sich erfahrungsgemäss sehr gut bewertet, vor allem für die Einführung in die Informatik bei nicht naturwissenschaftlichen Schwerpunktfächern der Stufe Sek. II. Die Beliebtheit von TJ bei Programmieranfängern liegt nicht zuletzt daran, dass es   die meisten für die Grundprogrammierung notwendige Python--Komponenten  vollkommen kostenlos ist,  sehr wenig PC Ressourcen benötigt und verbraucht und demzufolge  ganz stabil unter Windows, macOS und Linux läuft.   Im folgenden Abschnitt wird detailliert beschrieben:   wie sich die aktuelle Python Version sowie auch zwei gut geeinigten Entwicklungsumgebungen, PyCharm und TJ, auf PC installieren und einrichten lassen;  Wie man mit TJ ein Python Programm editiert und ausführt.  Wie man Editor Einstellungen vornimmt.  Wie man das Konsolenfenster für einfache Berechnungen verwendet.   Die Ergebnisse der folgenden Abschnitte sind zentral und werden bei anderen Kapiteln dieses Kurses ständig benötigt.  "
},
{
  "id": "Einleitung-6",
  "level": "2",
  "url": "Einleitung.html#Einleitung-6",
  "type": "Absatz (with a defined term)",
  "number": "",
  "title": "",
  "body": "TJ "
},
{
  "id": "sec_pyth_install",
  "level": "1",
  "url": "sec_pyth_install.html",
  "type": "Abschnitt",
  "number": "1.1",
  "title": "Verfügbarkeitscheck, Installation und Einrichtung von Python auf PC",
  "body": " Verfügbarkeitscheck, Installation und Einrichtung von Python auf PC   Hutzutage ist es ist nicht ungewöhnlich, dass Python unter vielen Betriebssystemen bereits vorinstalliert ist. Das kann sehr einfach kontrolliert werden, indem wir für Python seine Version ausgeben lassen. Ist Python nicht installiert, kommt eine Fehlermeldung oder ansonsten kennen wir danach die aktuelle Version.    Python schon installiert?    Unter Windows benötigen wir für den Check der Verfügbarkeit von Python die Befehlszeile, die wir bei der Eingabeaufforderung App (aufrufbar über den Ausführung Button bei der Suche nach cmd.exq oder durch die Tastenkombination 🪟 x direkt starten können:    Zwei Möglichkeiten, die Eingabeaufforderung App zu starten und von dort die Verfügbarkeit von Python mit Hilfe des Befehls python --version zu prüfen.    Eingabe vom cmd.exe Befehl und das Öffnen des Eingabeaufforderung Fensters durch Klick auf den Ausführen Button.       Der Aufruf des Eingabeaufforderung Fensters mit dem Shortcut 🪟 x .      Das Eingabeaufforderung Fenster mit der Befehlseingabe zum Checken der Verfügbarkeit und Version von Python.       Im Eingabeaufforderung Fenster geben wir nun beim Cursor das Kommando python --version ein und erhalten dann je nach Installationsstatus von Python entweder einen Fehler oder die auf dem System installierte Python Version, wie z.B. die veraltete Version 3.9.7 der Python Distribution bei der Befehlsausgabe in Abb. .   Beim macOS kann man das Terminal über den Ordner öffnen oder es sogar blitzschnell über aufrufen. lässt sich mit dem Tastaturkurzbefehl ⌘ starten. Tippen Sie im Eingabefeld die Anfangsbuchstaben ter ein und drücken Sie dann direkt die Eingabetaste. Davor müssen Sie eventuell erst über die Pfeiltasten die App auswählen (s. Abb. ). Im Terminal Fenster geben Sie anschliessend den Befehl python3 --version ein, um herauszufinden, welche Python Version auf Ihrem PC vorinstalliert, respektive nicht vorhanden ist.     Aufruf der Terminal App über Spotlight unter macOS.      Auswahl der aktuellen Python Version 3.14.2 auf der offiziellen Website  .                        Fundamental Structures   This is an <objectives> element you are reading, and this is its introduction. This early section has really grown and tries to accomplish many things. Not all of them are listed here.     Display various blocks , fundamental units of the flow.  More.  Evermore.                Hello, Python       Running the script   print(\"XXX\")  Hello, world! Hello, world! Hello, world! Hello, world! Hello, world!       print(\"XXX\")  Hello, world! Hello, world! Hello, world! Hello, world! Hello, world!    print(\"XX X \") Hello, world! Hello, world! Hello, world!  print(\"XXX\") Hello, world!  Hello, +++ world!  Hello, ... world!      def square(n): return n * n def square(n): return n * n     def square(n): return n * n     Summing the first ten squares   total = sum(n * n for n in range(1, 11)) print(total)       import java.util.Scanner;  public class Main { public static void main(String[] args) { System.out.println(\"Hello, world!\"); } }                                       Parsons Problem, mathematischer Beweis  even numbers   Create a proof of the theorem: If is an even number, then .     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.      Parsons Problem, Programming  prime numbers  Sieve of Eratosthenes   The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. This version has numbered blocks, online they are on the left end of the block.]      n = 250    primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)       Parsons Problem, Programming   The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. This version has numbered blocks, online they are on the left end of the block.]      n = 250    primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)         Parsons Problem, Python import   Austesten eines Programms.    from  math  import  pi      Cardsort Problem, Derivatives  matching derivatives   Match each function with its derivative.    Did you compute the derivative of each function in the premises (left column)?                     Clickable Areas, Code   Identify (by clicking, or by circling) all of the assignment statements in this Python function.    def main():   x = 4  for i in range(5):   y = i   if y > 2:  print(y)    Remember, the operator = is used for assignment.      Optimization    Find the critical points.    Differentiate first.      Classify each critical point.    Use the second derivative test.       Parsons Problem with math blocks   Testing math mode blocks - correct answer is            Three-way Select Question Runestone-only: exercise to grade will be automatically chosen by Runestone from , , or .    Ausführung eines externen Python-Programms   Führe das folgende Programm aus!    \"\"\" Python-Skript A1L.py Lösung zur Aufgabe A1 \"\"\" # Definition von Variablen und Zuweisungen: a = 1 # Die Variablen a, b und c werden mit den Werten: 1 b = 2 # 2 und c = 3 # 3 belegt # 1. Berechnung: a_mal_c = a * c # a * c und b \/ c werden ausgerechnet und den b_durch_2 = b \/ 2 # Variablen a_mal_c und b_durch_2 zugewiesen print(\"a = \", a, \", b = \", b, \", c = \", c, sep = '') # Ausgabe von a, b und c print(\"a*c = \", a_mal_c) # Ausgabe von a_mal_c auf die Konsole print(\"b\/2 = \", b_durch_2) # Ausgabe von b_durch_2 auf die Konsole # Zuweisung von neuen Werten: a = -10 # Die Variablen a, b und c werden mit neuen Werten -10 b = 100 # 100 und c = -35 # -35 belegt # 2. Berechnung: a_mal_c = a * c # a * c und b \/ c werden erneut ausgerechnet und den b_durch_2 = b \/ 2 # Variablen a_mal_c und b_durch_2 zugewiesen print(\"a = \", a, \", b = \", b, \", c = \", c, sep = '') # Ausgabe von a, b und c print(\"a*c = \", a_mal_c) # Ausgabe von a_mal_c print(\"b\/2 = \", b_durch_2) # Ausgabe von b_durch_2 print(41*'_' + \"\\nDas Programm ist erfolgreich beendet!\")      Kapitelübungen    Solve for :    Add or subtract terms from both sides so that terms with an are on the left side and all other terms are on the right.    First, combine the two terms that contain . To do this, we subtract from both sides, obtaining. .  Next, we add to both sides so only the term containing remain on the left-hand side: .  Finally, divide both sides by to get by itself: .         This and this    True\/False  vector space   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinte.     the vector space of polynomials with degree at most , has dimension by ...?     Multiple-Choice, Not Randomized, One Answer  stop signs   What color is a stop sign?           Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.      What did you see last time you went driving?    Maybe go out for a drive?     Multiple-Choice, Math in Feedback   What is the coefficient on in ?           Have you accounted for the and that are in the original binomial?           What should the exponents on and be when you expand ?           Have you included something of the form in your computations?           Correct! Using the binomial theorem, we get a term containing the monomial by taking two of the first term, and two of the second term in the expansion of , and so this term is equal to .       Multiple-Choice, Not Randomized, Multiple Answers  stop signs   Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.)      Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym  ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.      Do you know the acronym  ROY G BIV for the colors of a rainbow, and their order?      A Skeletal Worksheet         It can be helpful to say what the point of the worksheet is.      A first exercise, given one inch of blank workspace.       Only inside a worksheet may an exercise go in a sidebyside.      And so this is a second column.             verschiedene Versionen von Python gleichzeitig installiert zu haben. Sinnvoll zum Lernen wäre jedoch die aktuellste Version 3.14.2 (zum Zeitpunkt der Drucklegung), worauf die folgende Diskussion basiert ist.  Falls Python nicht vorhanden ist, werden in folgenden Abschnitten zwei gängige Methoden beschrieben, um Python auf einem PC System möglichst schnell und effizient installieren zu können.                                                                                                                                                                                     Python Installation mit Hilfe der  Distribution  ist eine weit verbreitete Open Source Distribution für die Programmiersprache Python, die speziell für wissenschaftliches Rechnen und Datenanalyse entwickelt wurde. Sie bietet eine umfassende Sammlung von Python Paketen (Version 3.12), Bibliotheken und Entwicklungswerkzeugen. Die neueste Version von kann von der obigen offiziellen Webseite für alle Betriebssysteme heruntergeladen und installiert werden.  Alternativ kann die leichtgewichtigere Version von Anaconda namens installiert werden, die nur den Paketmanager sowie eine Minimalauswahl von Python Paketen enthält. Die  Distribution ist verfügbar für Windows, macOS sowie Linux und   Nach der Installation können Benutzer Pakete verwalten, Umgebungen erstellen und verschiedene integrierte Werkzeuge nutzen. Die Installation von ist unkompliziert und kann in wenigen nachstehenden Schritten durchgeführt werden.    "
},
{
  "id": "subsec_pyth_install-2",
  "level": "2",
  "url": "sec_pyth_install.html#subsec_pyth_install-2",
  "type": "Absatz (with a defined term)",
  "number": "",
  "title": "",
  "body": "Unter Windows "
},
{
  "id": "fig_Python_Check_Win",
  "level": "2",
  "url": "sec_pyth_install.html#fig_Python_Check_Win",
  "type": "Abb.",
  "number": "1.1.1",
  "title": "",
  "body": " Zwei Möglichkeiten, die Eingabeaufforderung App zu starten und von dort die Verfügbarkeit von Python mit Hilfe des Befehls python --version zu prüfen.    Eingabe vom cmd.exe Befehl und das Öffnen des Eingabeaufforderung Fensters durch Klick auf den Ausführen Button.       Der Aufruf des Eingabeaufforderung Fensters mit dem Shortcut 🪟 x .      Das Eingabeaufforderung Fenster mit der Befehlseingabe zum Checken der Verfügbarkeit und Version von Python.     "
},
{
  "id": "subsec_pyth_install-5",
  "level": "2",
  "url": "sec_pyth_install.html#subsec_pyth_install-5",
  "type": "Absatz (with a defined term)",
  "number": "",
  "title": "",
  "body": "Beim macOS "
},
{
  "id": "fig_terminal_macOS",
  "level": "2",
  "url": "sec_pyth_install.html#fig_terminal_macOS",
  "type": "Abb.",
  "number": "1.1.2",
  "title": "",
  "body": " Aufruf der Terminal App über Spotlight unter macOS.    "
},
{
  "id": "fig_Akt_pyth_V3142",
  "level": "2",
  "url": "sec_pyth_install.html#fig_Akt_pyth_V3142",
  "type": "Abb.",
  "number": "1.1.3",
  "title": "",
  "body": " Auswahl der aktuellen Python Version 3.14.2 auf der offiziellen Website  .   "
},
{
  "id": "fundament-structures",
  "level": "2",
  "url": "sec_pyth_install.html#fundament-structures",
  "type": "Problem",
  "number": "1.1.4",
  "title": "Fundamental Structures.",
  "body": " Fundamental Structures   This is an <objectives> element you are reading, and this is its introduction. This early section has really grown and tries to accomplish many things. Not all of them are listed here.     Display various blocks , fundamental units of the flow.  More.  Evermore.        "
},
{
  "id": "python1",
  "level": "2",
  "url": "sec_pyth_install.html#python1",
  "type": "Liste",
  "number": "1.1.5",
  "title": "Hello, Python",
  "body": " Hello, Python    "
},
{
  "id": "hello-python2",
  "level": "2",
  "url": "sec_pyth_install.html#hello-python2",
  "type": "Liste",
  "number": "1.1.6",
  "title": "Running the script",
  "body": " Running the script   print(\"XXX\")  Hello, world! Hello, world! Hello, world! Hello, world! Hello, world!   "
},
{
  "id": "ex_CDATA",
  "level": "2",
  "url": "sec_pyth_install.html#ex_CDATA",
  "type": "Beispiel",
  "number": "1.1.7",
  "title": "",
  "body": "  def square(n): return n * n def square(n): return n * n   "
},
{
  "id": "subsec_pyth_install-15",
  "level": "2",
  "url": "sec_pyth_install.html#subsec_pyth_install-15",
  "type": "Berechnung",
  "number": "1.1.8",
  "title": "Summing the first ten squares.",
  "body": " Summing the first ten squares   total = sum(n * n for n in range(1, 11)) print(total)   "
},
{
  "id": "q_java",
  "level": "2",
  "url": "sec_pyth_install.html#q_java",
  "type": "Frage",
  "number": "1.1.9",
  "title": "",
  "body": "  import java.util.Scanner;  public class Main { public static void main(String[] args) { System.out.println(\"Hello, world!\"); } }   "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "sec_pyth_install.html#number-theory-proof",
  "type": "Übung",
  "number": "1.1.10",
  "title": "Parsons Problem, mathematischer Beweis.",
  "body": " Parsons Problem, mathematischer Beweis  even numbers   Create a proof of the theorem: If is an even number, then .     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.   "
},
{
  "id": "prime-number-program-numbered-left",
  "level": "2",
  "url": "sec_pyth_install.html#prime-number-program-numbered-left",
  "type": "Übung",
  "number": "1.1.11",
  "title": "Parsons Problem, Programming.",
  "body": " Parsons Problem, Programming  prime numbers  Sieve of Eratosthenes   The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. This version has numbered blocks, online they are on the left end of the block.]      n = 250    primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)    "
},
{
  "id": "prime-number-program-numbered-right",
  "level": "2",
  "url": "sec_pyth_install.html#prime-number-program-numbered-right",
  "type": "Übung",
  "number": "1.1.12",
  "title": "Parsons Problem, Programming.",
  "body": " Parsons Problem, Programming   The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. This version has numbered blocks, online they are on the left end of the block.]      n = 250    primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)      "
},
{
  "id": "horizontal-parson-python-test",
  "level": "2",
  "url": "sec_pyth_install.html#horizontal-parson-python-test",
  "type": "Übung",
  "number": "1.1.13",
  "title": "Parsons Problem, Python import.",
  "body": " Parsons Problem, Python import   Austesten eines Programms.    from  math  import  pi   "
},
{
  "id": "matching-derivatives",
  "level": "2",
  "url": "sec_pyth_install.html#matching-derivatives",
  "type": "Übung",
  "number": "1.1.14",
  "title": "Cardsort Problem, Derivatives.",
  "body": " Cardsort Problem, Derivatives  matching derivatives   Match each function with its derivative.    Did you compute the derivative of each function in the premises (left column)?                  "
},
{
  "id": "clickable-code",
  "level": "2",
  "url": "sec_pyth_install.html#clickable-code",
  "type": "Übung",
  "number": "1.1.15",
  "title": "Clickable Areas, Code.",
  "body": " Clickable Areas, Code   Identify (by clicking, or by circling) all of the assignment statements in this Python function.    def main():   x = 4  for i in range(5):   y = i   if y > 2:  print(y)    Remember, the operator = is used for assignment.   "
},
{
  "id": "exe_1",
  "level": "2",
  "url": "sec_pyth_install.html#exe_1",
  "type": "Übung",
  "number": "1.1.16",
  "title": "Optimization.",
  "body": " Optimization    Find the critical points.    Differentiate first.      Classify each critical point.    Use the second derivative test.    "
},
{
  "id": "horizontal-parson-math-test",
  "level": "2",
  "url": "sec_pyth_install.html#horizontal-parson-math-test",
  "type": "Übung",
  "number": "1.1.17",
  "title": "Parsons Problem with math blocks.",
  "body": " Parsons Problem with math blocks   Testing math mode blocks - correct answer is          "
},
{
  "id": "question-select",
  "level": "2",
  "url": "sec_pyth_install.html#question-select",
  "type": "Übung",
  "number": "1.1.18",
  "title": "Three-way Select Question.",
  "body": "Three-way Select Question Runestone-only: exercise to grade will be automatically chosen by Runestone from , , or . "
},
{
  "id": "comp_A1L",
  "level": "2",
  "url": "sec_pyth_install.html#comp_A1L",
  "type": "Berechnung",
  "number": "1.1.19",
  "title": "Ausführung eines externen Python-Programms.",
  "body": " Ausführung eines externen Python-Programms   Führe das folgende Programm aus!    \"\"\" Python-Skript A1L.py Lösung zur Aufgabe A1 \"\"\" # Definition von Variablen und Zuweisungen: a = 1 # Die Variablen a, b und c werden mit den Werten: 1 b = 2 # 2 und c = 3 # 3 belegt # 1. Berechnung: a_mal_c = a * c # a * c und b \/ c werden ausgerechnet und den b_durch_2 = b \/ 2 # Variablen a_mal_c und b_durch_2 zugewiesen print(\"a = \", a, \", b = \", b, \", c = \", c, sep = '') # Ausgabe von a, b und c print(\"a*c = \", a_mal_c) # Ausgabe von a_mal_c auf die Konsole print(\"b\/2 = \", b_durch_2) # Ausgabe von b_durch_2 auf die Konsole # Zuweisung von neuen Werten: a = -10 # Die Variablen a, b und c werden mit neuen Werten -10 b = 100 # 100 und c = -35 # -35 belegt # 2. Berechnung: a_mal_c = a * c # a * c und b \/ c werden erneut ausgerechnet und den b_durch_2 = b \/ 2 # Variablen a_mal_c und b_durch_2 zugewiesen print(\"a = \", a, \", b = \", b, \", c = \", c, sep = '') # Ausgabe von a, b und c print(\"a*c = \", a_mal_c) # Ausgabe von a_mal_c print(\"b\/2 = \", b_durch_2) # Ausgabe von b_durch_2 print(41*'_' + \"\\nDas Programm ist erfolgreich beendet!\")   "
},
{
  "id": "exs_ex_1",
  "level": "2",
  "url": "sec_pyth_install.html#exs_ex_1",
  "type": "Übungsaufgabe",
  "number": "1.1.1.1",
  "title": "",
  "body": "  Solve for :    Add or subtract terms from both sides so that terms with an are on the left side and all other terms are on the right.    First, combine the two terms that contain . To do this, we subtract from both sides, obtaining. .  Next, we add to both sides so only the term containing remain on the left-hand side: .  Finally, divide both sides by to get by itself: .      "
},
{
  "id": "vector-space-dimension",
  "level": "2",
  "url": "sec_pyth_install.html#vector-space-dimension",
  "type": "Übung",
  "number": "1.1.20",
  "title": "True\/False.",
  "body": " True\/False  vector space   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinte.     the vector space of polynomials with degree at most , has dimension by ...?   "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "sec_pyth_install.html#multiple-choice-not-randomized",
  "type": "Übung",
  "number": "1.1.21",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": " Multiple-Choice, Not Randomized, One Answer  stop signs   What color is a stop sign?           Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.      What did you see last time you went driving?    Maybe go out for a drive?   "
},
{
  "id": "multiple-choice-feedback-math",
  "level": "2",
  "url": "sec_pyth_install.html#multiple-choice-feedback-math",
  "type": "Übung",
  "number": "1.1.22",
  "title": "Multiple-Choice, Math in Feedback.",
  "body": " Multiple-Choice, Math in Feedback   What is the coefficient on in ?           Have you accounted for the and that are in the original binomial?           What should the exponents on and be when you expand ?           Have you included something of the form in your computations?           Correct! Using the binomial theorem, we get a term containing the monomial by taking two of the first term, and two of the second term in the expansion of , and so this term is equal to .     "
},
{
  "id": "multiple-choice-multiple-answers",
  "level": "2",
  "url": "sec_pyth_install.html#multiple-choice-multiple-answers",
  "type": "Übung",
  "number": "1.1.23",
  "title": "Multiple-Choice, Not Randomized, Multiple Answers.",
  "body": " Multiple-Choice, Not Randomized, Multiple Answers  stop signs   Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.)      Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym  ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.      Do you know the acronym  ROY G BIV for the colors of a rainbow, and their order?   "
},
{
  "id": "basics-sample-worksheet-3-1",
  "level": "2",
  "url": "sec_pyth_install.html#basics-sample-worksheet-3-1",
  "type": "Arbeitsauftrag",
  "number": "1.1.1.1",
  "title": "",
  "body": "  A first exercise, given one inch of blank workspace.   "
},
{
  "id": "basics-sample-worksheet-3-2-1",
  "level": "2",
  "url": "sec_pyth_install.html#basics-sample-worksheet-3-2-1",
  "type": "Arbeitsauftrag",
  "number": "1.1.1.2",
  "title": "",
  "body": "  Only inside a worksheet may an exercise go in a sidebyside.   "
},
{
  "id": "basics-sample-worksheet-3-2-2",
  "level": "2",
  "url": "sec_pyth_install.html#basics-sample-worksheet-3-2-2",
  "type": "Arbeitsauftrag",
  "number": "1.1.1.3",
  "title": "",
  "body": "  And so this is a second column.   "
},
{
  "id": "sec_pyth_als_TR",
  "level": "1",
  "url": "sec_pyth_als_TR.html",
  "type": "Abschnitt",
  "number": "2.1",
  "title": "Python als Taschenrechner",
  "body": " Python als Taschenrechner   Jedes Computerprogramm besteht in der Regel aus mehreren Anweisungen, die nach dem Programmstart, und zwar ausgehend vom ersten und bis hin zum letzten Programmbefehl (Programmende) je nacheinander automatisch ausgeführt werden. Die einzelnen Anweisungen eines Python Programms lassen sich hingegen mit Hilfe eines Standardwerkzeuges, auch genannt als Python Konsole , komfortabel und schnell austesten.  Damit können die einzelnen Python Befehle und ihre Ergebnisse interaktiv und benutzerfreundlich untersucht und auf Richtigkeit überprüft werden. Dabei sind folgende Anmerkungen zu beachten.   Vorteile  Man kann schnell und einfach Dinge ausprobieren.    Nachteile  Da der Python Code nicht dauerhaft gespeichert wird, kann er nicht wiederverwendet werden.       Python Konsole   Python Konsole von TJ.    Aufruf der Konsole im Hauptfenster von TJ.      Konsolenfenster von TJ.        Benutzeranweisungen für das Konsolenfenster von TJ        Starten Sie TJ und klicken Sie auf das schwarze Schaltfläche in der Abb. , um das Popup Fenster Konsole (s. Abb. ) zu öffnen. Dieses lässt sich auch durch die Tastenkombination Ctrl+T aufrufen. Drei Pfeile >>> , welche im Konsolenfenster zu sehen sind, zeigen an, dass Python Interpreter auf einen Befehl im Eingabefeld rechts wartet. Auf dieser Befehlszeile tippen Sie eine Anweisung ein und schliessen sie mit der Taste ab. Mit dem Spezialbefehl exit() oder durch manuelle Schliessung des Konsolenfensters können Sie die aktuelle Sitzung jederzeit beenden.  Wie in einem gewöhnlichen Editor können Sie sich mit den Kursortasten auf der Befehlszeile hin und herbewegen, um einzelne Zeichen zu löschen oder einzufügen. Sobald Sie Taste drücken, wird die Befehlszeile ausgeführt, ausser es sich um einen mehrzeiligen Befehl handelt. In diesem Fall wird der Befehl erst dann ausgeführt, wenn Sie drücken.  Sie können auch bereits verarbeitete Eingaben mit gedrückter linker Maustaste markieren und durch die Ctrl+C Tastenkombination in die Zwischenablage kopieren. Befindet sich Ihr Cursor auf der Befehlszeile, so können Sie mit der Ctrl+V Tastenkombination den Inhalt der Zwischenablage dort einfügen.  Das Unterstreichungszeichen __ ist ein Platzhalter für das Resultat einer vorgängigen Rechenoperation. Mit und Tasten können Sie die letzten Eingabezeilen zurückholen und mit und Pfeiltasten editieren.     Aufgaben zu arithmetischen, logischen und Zeichenkettenausdrücken  Öffnen Sie die Python Konsole in PyCharm oder TigerJython und geben Sie nach der >>> Aufforderung die folgenden Ausdrucksanweisungen ein. Zum Ausführen schliessen Sie die Eingabe jeweils mit Taste ab. Überprüfen Sie die Ergebnisse am Taschenrechner und vergleichen sie auch mit Lösungen im Abschnitt.      Eingebaute mathematische Operatoren \/ Funktionen und ihre Prioritäten (von hoch nach niedrig) in Python.    Arithmetische Ausdrücke:  Logische Ausdrücke  Zeichenketten Ausdrücke:  Grosse Zahlen:     Lösungen für Aufgaben zu Ausdrucks Anweisungen     Arithmetische Ausdrücke:     Logische Ausdrücke:     Zeichenketten Ausdrücke:     Grosse Zahlen gut lesbar:       "
},
{
  "id": "fig_Pyth_Kons_Fest",
  "level": "2",
  "url": "sec_pyth_als_TR.html#fig_Pyth_Kons_Fest",
  "type": "Abb.",
  "number": "2.1.1",
  "title": "",
  "body": " Python Konsole von TJ.    Aufruf der Konsole im Hauptfenster von TJ.      Konsolenfenster von TJ.      "
},
{
  "id": "tab_gener_math_Oper",
  "level": "2",
  "url": "sec_pyth_als_TR.html#tab_gener_math_Oper",
  "type": "Tabelle",
  "number": "2.1.2",
  "title": "Eingebaute mathematische Operatoren \/ Funktionen und ihre Prioritäten (von hoch nach niedrig) in Python.",
  "body": " Eingebaute mathematische Operatoren \/ Funktionen und ihre Prioritäten (von hoch nach niedrig) in Python.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
