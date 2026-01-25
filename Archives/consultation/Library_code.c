#include <stdio.h>
#include <stdlib.h>
// struct Book, struct Library
// 1 - addBook, 2 - delete Book, 3 - findBook

typedef struct {
   char name[20]; 
   char author[30];
   unsigned year; //invalid book  - year is 0
        
} Book;

Book invalidBook = { "", "", 0 };

typedef struct {

    Book shelves[5][5];
    Book otherBooks[10];
} Library;

//typedef struct {
//    Book shelf[5];
//} Shelf;
//
//typedef struct {
//    Shelf shelves[5];
//    Shelf others;
//} MyLib;

//void swap(int a, int b) {
//    int tmp = a;
//    a = b;
//    b = tmp;
//    //print - a = 6, b = 5
//}
//
//void swap2(int* a, int* b) {
//    int tmp = *a;
//    *a = *b;
//    *b = tmp;
//    //print - *a = 6, *b = 5
//}


//one shelf contains one author

int addBook(Library* lib, Book book) {

    if (lib == NULL) {
        return 0;
    }
    //lib != l1 //lib 0xb6789 - Library lib
    // lib == l1 // lib 0xb1234 - Library* lib
    for (int i = 0; i < 5; i++) {
        if (strcmp(book.author, lib->shelves[i][0].author) == 0) { //we found a shelf with this author
            for (int j = 0; j < 5; j++) {
                if (lib->shelves[i][j].year == 0) { // this slot is empty
                    lib->shelves[i][j] = book;
                    return 1;
                }
            }
        }
        else { // the authors are not the same
            if (lib->shelves[i][0].year == 0) { // if year is invalid - shelf is empty
                lib->shelves[i][0] = book;
                return 1;
            }
            else { //if year is valid - shelf has other author
                //continue;
            }
        }
    }
    

    for (int i = 0; i < 10; i++) {
        if (lib->otherBooks[i].year == 0) { // the slot is empty
            lib->otherBooks[i] = book;
            return 1;
        }
    }
        
    return 0;
} // lib is deleted 

Book* findBook(Library* lib, Book b) {

    if (lib == NULL) {
        return NULL;
    }

    for (int i = 0; i < 5; i++) {
        if (strcmp(b.author, lib->shelves[i][0].author) == 0) { // row with our author
            for (int j = 0; j < 5; j++) {
                if ((strcmp(b.name, lib->shelves[i][j].name) == 0) && b.year == lib->shelves[i][j].year) { // we found the book
                    return &lib->shelves[i][j];
                }
            }
        }
    }

    for (int i = 0; i < 10; i++) {
        if (strcmp(b.author, lib->otherBooks[i].author) == 0) { // row with our author
                if ((strcmp(b.name, lib->otherBooks[i].name) == 0) && b.year == lib->otherBooks[i].year) { // we found the book
                    return &lib->otherBooks[i];
            }
        }
    }

    return NULL;
}

int deleteBook(Library* lib, Book* b) { // b - 0xb34567

    if (b == NULL || lib == NULL) {
        return 0;
    }

    for (int i = 0; i < 5; i++) {
        if (strcmp(b->author, lib->shelves[i][0].author) == 0) {
            for (int j = 0; j < 5; j++) {
                if (b == &lib->shelves[i][j]) { // lib... - 0xb34567 - yes the addresses are the same
                    lib->shelves[i][j] = invalidBook;
                    return 1;
                }
            }
        }
    }

    for (int i = 0; i < 10; i++) {
        if (b == &lib->otherBooks[i]) {
            lib->otherBooks[i] = invalidBook;
            return 1;
        }
    }

    return 0;
}

int deleteBook2(Library* lib, Book b) {
    if (lib == NULL)
        return 0;

    Book* found = findBook(lib, b);

    if (found == NULL) {
        return 0;
    }

    *found = invalidBook; 
    return 1;

}

int main()
{
    Book b2;

    Library l1; //0xb1234

    addBook(&l1, b2);

    //int a = 5;
    //int b = 6;
    //swap(a, b);

    //printf("a = %d, b = %d\n", a, b); // a = 5, b = 6

    //swap2(&a, &b);

    //printf("a = %d, b = %d", a, b);
}

