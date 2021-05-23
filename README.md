## send prn to printer.bat - print directly .prn files

### Instalation
Save script anywhere you want and drag&drop .prn file on script.
### Description
Sends dropped .prn file to printer. To get this work you only need share printer over internet and fill script with your data - \\pc_name\\printer_shared_name . If you need debugging (script runs without printing and get away) put "PAUSE" in next line and save. By this simply trick you will see why script didn't work


### Instalacja
Zapisz skrypt gdzie potrzebujesz i upuść na niego plik .prn
### Opis
Wysyła upuszczony plik .prn do drukarki. Do działania wymaga tylko udostępnienia drukarki przez internet i wypełnienie skryptu swoimi danymi - \\nazwa_komputera\\udostępniona_nazwa_drukarki. Jeżeli potrzebujesz debugowania (skrypt uruchamia się i znika) dopisz "PAUSE" w następnej linijce. Tym prostym sposobem sprawdzisz dlaczego skrypt nie działa.
## ------------------------------------------------------------------------------------------------------------------------
## Bookmark with input - run the page with your own part of the address

### Instalation
Copy the contents of the script into your favorite text editor, fill in as desired and add as a bookmark. Tested on Google Chrome
### Description
The script in the version without "esc support" only requires the address to be completed. Example:

demo.redmine.org/issues/xxxxxx

When you press the tab, it will ask you to enter the task number in redmine, and then in place of "xxxxxx" it will enter this number and take you to the required page.

The script in the "esc support" version requires two addresses - the first one works as above, the second one will be called when you press the tab and then press "cancel" or "esc" in the browser window.

### Instalacja
Skopiuj zawartość skryptu do swojego ulubionego edytora tekstu, wypełnij według własnych potrzeb i dodaj jako zakładkę. Testowane w Google Chrome
### Opis
Skrypt w wersji bez "esc support" wymaga od nas tylko podania adresu który ma uzupełnić. Przykład działania:

demo.redmine.org/issues/xxxxxx

Gdy naciśniesz zakładkę poprosi Cię ona o podanie numeru zadania w redmine, a następnie w miejsce "xxxxxx" wprowadzi ten numer i przeniesie Cię do żądanej strony.

Skrypt w wersji "esc support" wymaga podania dwóch adresów - pierwszy działa jak wyżej, drugi zostanie wywołany gdy naciśniemy na zakładkę po czym wciśniemy "anuluj" lub "esc" w oknie przeglądarki.
