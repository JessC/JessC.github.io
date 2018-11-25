//**LIBRARIES**
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

//1: Get key from the user input
//2: Turn key into an intger
//3: Prompt for plaintext???

//Accept a comand line argument
int main(int argc, string argv[])

{
    string k = argv[1];
    //...but only accept only two arguments (user input) with k being positive
    if (argc != 2) //|| (k <= 0)
    {
        //error message
        printf("Not a valid input\n");
        return 1;
    }
    //change the string into a code and check that it is positive
    int k = atoi(argv[1]);
    if (k <= 0)
    {
        printf("Not a valid input\n");
        return 1;
    }
    else
    {
        string plainText = get_string("plaintext: ");
        {
            for (int i = 0, n = strlen(plntxt); i < n; i++)
            {
                                int c = 0;

                // Check if text is upper case or lower case
                // If so, switch to alphabet number and encrypt
                if (isupper(plntxt[i]))
                {

                    c = (((int)plntxt[i] - 65 + k) % 26) + 65;
                    printf("%c", (char) c);
                }
                else if (islower(plntxt[i]))
                {

                    c = (((int)plntxt[i] - 97 + k) % 26) + 97;
                    printf("%c", (char) c);
                }
                else
                {
                    printf("%c", plntxt[i]);
                 }

            }
            printf("\n");
            return 0;
        }
    }
}
