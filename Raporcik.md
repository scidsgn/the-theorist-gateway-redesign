# Insertion Sort

## 1. Błędy składniowe

W pliku `insort.c` znajdowały się 2 błędy składniowe.

W 9. linijce zamiast średnika w definicji pętli `for` znajdował się przecinek:

```c
for (j = i-1; v[j] > tmp, j--)
```

Ponadto, w 11. linijce użyto zmiennej `tnp`, która nie została zdefiniowana:

```c
v[j+1] = tnp;
```

## 2. Błędy merytoryczne

Po skompilowaniu i uruchomieniu programu z argumentem 10 (`./a.out 10`), program zamiast sortować wektor, przepisuje wartość pierwszego elementu do reszty:

```
Wygenerowany wektor: [ 9.14584 2.24124 -3.23878 -5.94114 4.33237 5.90019 0.831315 -8.14841 3.87961 -5.97038 ]
Posortowany wektor: [ 9.14584 9.14584 9.14584 9.14584 9.14584 9.14584 9.14584 9.14584 9.14584 9.14584 ]
```

Nie pojawiają się błędy "segmentation fault" opisane w instrukcji. Z tego powodu, postanowiliśmy nie używać `gdb` do znalezienia błędów w kodzie.

Zamiast tego, dodaliśmy funkcję wyświetlającą zawartość tablicy przy każdym kroku sortowania;

```c
void printvec(double v[], int n) {
        for (int i = 0; i < n; i++) {
                printf("%g ", v[i]);
        }
        printf("\n");
}

void
insort (double v[], int n)
{
  int i, j;

  for (i = 1; i < n; i++) {
    double tmp = v[j];

    for (j = i-1; v[j] > tmp; j--)
      v[j+1] = v[j];

    v[j+1] = tmp;

    printvec(v, n);
  }
}
```

for (j = i-1; v[j] > tmp; j--)Następnie:

* Zamieniliśmy w pierwszej pętli `for` `double tmp = v[j]` na `double tmp = v[i]`ponieważ przy pierwszej iteracji pętli, `j` nie ma przypisanej wartości.
* W drugiej pętli `for`dodaliśmy warunek kończący pętlę gdy `j`będzie mniejsze od zera: `for (j = i-1; v[j] > tmp && j >= 0; j--)`

Ostateczny kod pliku `insort.c`:

```c
#include "insort.h"

void
insort (double v[], int n)
{
  int i, j;

  for (i = 1; i < n; i++) {
    double tmp = v[i];

    for (j = i-1; v[j] > tmp && j >= 0; j--)
      v[j+1] = v[j];

    v[j+1] = tmp;
  }
}
```



# Quicksort

